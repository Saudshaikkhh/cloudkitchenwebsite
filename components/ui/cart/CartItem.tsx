"use client";

import { useState } from "react";
import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { CartItem as CartItemType } from "@/lib/types";
import { Button } from "@/components/ui/button";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();
  const [isRemoving, setIsRemoving] = useState(false);

  const handleIncrement = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      handleRemove();
    }
  };

  const handleRemove = () => {
    setIsRemoving(true);
    setTimeout(() => {
      removeItem(item.id);
    }, 300);
  };

  return (
    <div 
      className={`flex gap-4 py-4 border-b border-gray-200 transition-all ${
        isRemoving ? 'opacity-0 transform translate-x-5' : 'opacity-100'
      }`}
    >
      <div className="relative h-20 w-20 rounded-md overflow-hidden flex-shrink-0">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="flex-1">
        <div className="flex justify-between">
          <h4 className="font-medium text-gray-900">{item.name}</h4>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleRemove}
            className="h-8 w-8 text-gray-500 hover:text-red-500"
          >
            <Trash2 size={16} />
          </Button>
        </div>
        
        <p className="text-sm text-gray-500 line-clamp-1 mb-2">{item.description}</p>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center border rounded-md">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleDecrement}
              className="h-8 w-8 text-gray-500"
            >
              <Minus size={16} />
            </Button>
            <span className="w-8 text-center">{item.quantity}</span>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleIncrement}
              className="h-8 w-8 text-gray-500"
            >
              <Plus size={16} />
            </Button>
          </div>
          
          <span className="font-medium">
            ₹{(item.price * item.quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}