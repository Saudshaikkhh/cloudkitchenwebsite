'use client';

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { menuItems } from "@/lib/data";
import MenuList from "@/components/menu/MenuList";

export default function MenuSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section 
      id="menu" 
      ref={sectionRef}
      className="py-12 md:py-24 bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Our Delicious Menu
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Explore our handcrafted selection of comfort foods made with love and the finest ingredients. Each dish is prepared fresh and delivered straight to your door.
          </p>
        </motion.div>
        
        <MenuList items={menuItems} />
      </div>
    </section>
  );
}