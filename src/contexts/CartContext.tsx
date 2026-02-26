import { createContext, useContext, useState, ReactNode, useCallback } from "react";

export interface CartItem {
  id: string;
  packageKey: "standard" | "express" | "signature";
  packageName: string;
  basePrice: number;
  addOns: { dviajeros: boolean; expressProcessing: boolean };
  travelers: number;
}

const ADD_ON_PRICES = { dviajeros: 25, expressProcessing: 25 };

function itemTotal(item: CartItem) {
  const addOnCost =
    (item.addOns.dviajeros ? ADD_ON_PRICES.dviajeros : 0) +
    (item.addOns.expressProcessing ? ADD_ON_PRICES.expressProcessing : 0);
  return (item.basePrice + addOnCost) * item.travelers;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "id">) => void;
  removeItem: (id: string) => void;
  updateTravelers: (id: string, travelers: number) => void;
  toggleAddOn: (id: string, addOn: "dviajeros" | "expressProcessing") => void;
  clearCart: () => void;
  cartTotal: number;
  itemCount: number;
  isDrawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const addItem = useCallback((item: Omit<CartItem, "id">) => {
    const id = crypto.randomUUID();
    setItems((prev) => [...prev, { ...item, id }]);
    setDrawerOpen(true);
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const updateTravelers = useCallback((id: string, travelers: number) => {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, travelers: Math.max(1, travelers) } : i))
    );
  }, []);

  const toggleAddOn = useCallback((id: string, addOn: "dviajeros" | "expressProcessing") => {
    setItems((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, addOns: { ...i.addOns, [addOn]: !i.addOns[addOn] } } : i
      )
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const cartTotal = items.reduce((sum, i) => sum + itemTotal(i), 0);
  const itemCount = items.reduce((sum, i) => sum + i.travelers, 0);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateTravelers, toggleAddOn, clearCart, cartTotal, itemCount, isDrawerOpen, setDrawerOpen }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};

export { itemTotal, ADD_ON_PRICES };
