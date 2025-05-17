'use client';

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { MenuItem as MenuItemType } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface MenuItemProps {
  item: MenuItemType;
}

export default function MenuItem({ item }: MenuItemProps) {
  const { addItem } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    addItem(item);
    
    setTimeout(() => {
      setIsAdding(false);
    }, 500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="relative h-52 w-full">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />
        <Badge 
          variant={item.category === "veg" ? "success" : "destructive"}
          className="absolute top-3 right-3"
        >
          {item.category === "veg" ? "Veg" : "Non-Veg"}
        </Badge>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-card-foreground">{item.name}</h3>
          <span className="font-bold text-primary">₹{item.price}</span>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4 min-h-[40px]">
          {item.description}
        </p>
        
        <Button 
          onClick={handleAddToCart}
          className={`w-full transition-all ${
            isAdding ? "scale-95" : "scale-100"
          }`}
        >
          <ShoppingBag className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </motion.div>
  );
}