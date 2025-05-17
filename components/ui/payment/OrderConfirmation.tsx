"use client";

import { useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

export default function OrderConfirmation() {
  const { clearCart, setCheckoutState, setIsCartOpen } = useCart();

  useEffect(() => {
    // Trigger confetti effect when component mounts
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const colors = ["#6b8f71", "#3a4a3f", "#e8c8a9"];

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }, []);

  const handleBackToMenu = () => {
    clearCart();
    setCheckoutState("cart");
    setIsCartOpen(false);
    
    // Scroll to menu section
    const menuSection = document.getElementById("menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="text-center py-8">
      <div className="flex justify-center mb-6">
        <CheckCircle2 className="h-20 w-20 text-green-500" />
      </div>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Thank You for Your Order!
      </h2>
      
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        Your order has been received and is being prepared with love. You'll receive updates about your delivery on your phone.
      </p>
      
      <div className="bg-gray-50 rounded-lg p-4 mb-8 max-w-sm mx-auto">
        <p className="text-sm text-gray-500 mb-2">Order Reference</p>
        <p className="font-mono text-lg font-medium">BB-{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}</p>
      </div>
      
      <div className="flex flex-col gap-4 max-w-xs mx-auto">
        <Button 
          onClick={handleBackToMenu}
          className="bg-[#6b8f71] hover:bg-[#3a4a3f]"
        >
          Back to Menu
        </Button>
        
        <Button 
          variant="outline"
          onClick={() => {
            clearCart();
            setCheckoutState("cart");
            setIsCartOpen(false);
          }}
        >
          Close
        </Button>
      </div>
    </div>
  );
}