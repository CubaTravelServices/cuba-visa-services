import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Apply from "./pages/Apply";
import Process from "./pages/Process";
import Checkout from "./pages/Checkout";
import BlogListing from "./pages/BlogListing";
import BlogPost from "./pages/BlogPost";
import AboutUs from "./pages/AboutUs";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./contexts/CartContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/process" element={<Process />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/insights" element={<BlogListing />} />
            <Route path="/insights/:slug" element={<BlogPost />} />
            {/* Redirect old blog routes to insights */}
            <Route path="/blog" element={<Navigate to="/insights" replace />} />
            <Route path="/blog/:slug" element={<Navigate to="/insights" replace />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/chat" element={<Chat />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
