"use client";

import { useEffect } from "react";
import { ShoppingBag, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import CartItem from "./CartItem";
import PaymentForm from "../payment/PaymentForm";
import OrderConfirmation from "../payment/OrderConfirmation";

export default function CartDrawer() {
  const { 
    items, 
    totalItems, 
    totalPrice, 
    isCartOpen, 
    setIsCartOpen,
    checkoutState,
    setCheckoutState
  } = useCart();

  // Close drawer on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsCartOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [setIsCartOpen]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 overflow-hidden flex flex-col">
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-[#6b8f71]" />
            <h2 className="text-lg font-semibold">
              {checkoutState === "cart" ? "Your Cart" : 
               checkoutState === "payment" ? "Payment" : 
               "Order Complete"}
            </h2>
          </div>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsCartOpen(false)}
          >
            <X size={20} />
          </Button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4">
          {checkoutState === "cart" && (
            <>
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6">
                  <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
                  <h3 className="text-xl font-medium text-gray-700 mb-2">Your cart is empty</h3>
                  <p className="text-gray-500 mb-6">Add some delicious items from our menu to get started!</p>
                  <Button 
                    onClick={() => {
                      setIsCartOpen(false);
                      // Scroll to menu section
                      const menuSection = document.getElementById("menu");
                      if (menuSection) {
                        menuSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="bg-[#6b8f71] hover:bg-[#3a4a3f]"
                  >
                    Browse Menu
                  </Button>
                </div>
              ) : (
                <div className="space-y-1">
                  {items.map(item => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>
              )}
            </>
          )}
          
          {checkoutState === "payment" && <PaymentForm />}
          
          {checkoutState === "confirmation" && <OrderConfirmation />}
        </div>
        
        {checkoutState === "cart" && items.length > 0 && (
          <div className="p-4 border-t bg-gray-50">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal ({totalItems} items)</span>
              <span className="font-medium">₹{totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Delivery Fee</span>
              <span className="font-medium">₹40.00</span>
            </div>
            <div className="flex justify-between text-lg font-semibold mb-4">
              <span>Total</span>
              <span>₹{(totalPrice + 40).toFixed(2)}</span>
            </div>
            <Button 
              className="w-full bg-[#6b8f71] hover:bg-[#3a4a3f]"
              onClick={() => setCheckoutState("payment")}
            >
              Proceed to Checkout
            </Button>
          </div>
        )}
      </div>
    </>
  );
}