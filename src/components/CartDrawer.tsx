import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart, itemTotal, ADD_ON_PRICES } from "@/contexts/CartContext";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Switch } from "@/components/ui/switch";

const CartDrawer = () => {
  const { items, removeItem, updateTravelers, toggleAddOn, cartTotal, isDrawerOpen, setDrawerOpen } = useCart();
  const navigate = useNavigate();

  return (
    <Sheet open={isDrawerOpen} onOpenChange={setDrawerOpen}>
      <SheetContent className="w-[360px] sm:w-[420px] bg-ivory flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-display text-2xl text-navy flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-gold" /> Your Cart
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-slate-brand">
            <ShoppingBag className="h-12 w-12 mb-3 opacity-30" />
            <p className="text-sm">Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto space-y-4 pr-1 mt-4">
              {items.map((item) => (
                <div key={item.id} className="bg-white rounded-lg p-4 border border-ivory-mid">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-display text-lg font-bold text-navy">{item.packageName}</h4>
                      <p className="text-xs text-slate-brand">${item.basePrice}/traveler base</p>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="text-slate-brand hover:text-destructive transition-colors">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Upsell Add-ons */}
                  <div className="space-y-2 mt-3 pt-3 border-t border-ivory-mid">
                    {[
                      { key: "dviajeros" as const, label: "D'Viajeros Assistance", price: ADD_ON_PRICES.dviajeros },
                      { key: "expressProcessing" as const, label: "Express Processing", price: ADD_ON_PRICES.expressProcessing, sub: "As fast as 15 min" },
                      { key: "vipImmigration" as const, label: "VIP Immigration Processing", price: ADD_ON_PRICES.vipImmigration },
                      { key: "vipLounge" as const, label: "VIP Departure Lounge", price: ADD_ON_PRICES.vipLounge },
                      { key: "vipTransfer" as const, label: "VIP Transfer to City Center", price: ADD_ON_PRICES.vipTransfer },
                      { key: "meetAndGreet" as const, label: "Meet & Greet at Airports", price: ADD_ON_PRICES.meetAndGreet },
                    ].map((addon) => (
                      <div key={addon.key} className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-semibold text-navy">{addon.label}</p>
                          <p className="text-[10px] text-slate-brand">{addon.sub ? `${addon.sub} · ` : ""}+${addon.price}/traveler</p>
                        </div>
                        <Switch
                          checked={item.addOns[addon.key]}
                          onCheckedChange={() => toggleAddOn(item.id, addon.key)}
                          className="data-[state=checked]:bg-gold"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Travelers */}
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-ivory-mid">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateTravelers(item.id, item.travelers - 1)}
                        className="w-7 h-7 rounded border border-ivory-mid flex items-center justify-center text-navy hover:border-gold transition-colors"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="text-sm font-semibold text-navy w-8 text-center">{item.travelers}</span>
                      <button
                        onClick={() => updateTravelers(item.id, item.travelers + 1)}
                        className="w-7 h-7 rounded border border-ivory-mid flex items-center justify-center text-navy hover:border-gold transition-colors"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                      <span className="text-xs text-slate-brand ml-1">travelers</span>
                    </div>
                    <span className="font-display text-lg font-bold text-navy">${itemTotal(item)}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-ivory-mid pt-4 mt-4 space-y-3">
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-semibold text-slate-brand uppercase tracking-wider">Total</span>
                <span className="font-display text-3xl font-bold text-navy">${cartTotal}</span>
              </div>
              <button
                onClick={() => { setDrawerOpen(false); navigate("/checkout"); }}
                className="w-full bg-navy text-white font-semibold py-3.5 rounded text-sm uppercase tracking-wider hover:bg-gold hover:text-navy transition-all duration-300"
              >
                Proceed to Checkout →
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
