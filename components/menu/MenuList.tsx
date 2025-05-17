"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuItem from "./MenuItem";
import { MenuItem as MenuItemType } from "@/lib/types";
import { Button } from "@/components/ui/button";

interface MenuListProps {
  items: MenuItemType[];
}

export default function MenuList({ items }: MenuListProps) {
  const [filter, setFilter] = useState<"all" | "veg" | "non-veg">("all");
  
  const filteredItems = items.filter(item => {
    if (filter === "all") return true;
    return item.category === filter;
  });

  return (
    <div className="space-y-6 md:space-y-8">
      <div className="flex flex-wrap justify-center gap-3 md:gap-4">
        <Button
          onClick={() => setFilter("all")}
          variant={filter === "all" ? "default" : "outline"}
          className="rounded-full"
          size="sm"
        >
          All
        </Button>
        <Button
          onClick={() => setFilter("veg")}
          variant={filter === "veg" ? "default" : "outline"}
          className="rounded-full"
          size="sm"
        >
          Vegetarian
        </Button>
        <Button
          onClick={() => setFilter("non-veg")}
          variant={filter === "non-veg" ? "default" : "outline"}
          className="rounded-full"
          size="sm"
        >
          Non-Vegetarian
        </Button>
      </div>
      
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
      >
        <AnimatePresence>
          {filteredItems.map(item => (
            <MenuItem key={item.id} item={item} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}