"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  const { setIsCartOpen } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://img.freepik.com/premium-photo/diverse-homemade-indian-recipes-with-space-copy_641503-86744.jpg"
          alt="Food background"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                <span className="block">Your Favorite</span>
                <span className="text-[#e8c8a9]">Cloud Kitchen</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-lg mx-auto md:mx-0">
                We're your cozy cloud kitchen, serving love, comfort, and flavor straight to your doorstep. No dine-in, just divine in!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button 
                  onClick={() => window.location.href = "#menu"}
                  className="bg-[#6b8f71] hover:bg-[#3a4a3f] text-white px-8 py-6 text-lg rounded-lg"
                >
                  View Menu
                </Button>
                <Button 
                  onClick={() => setIsCartOpen(true)}
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg rounded-lg"
                >
                  Order Now
                </Button>
              </div>
            </motion.div>
          </div>

          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mx-auto w-80 h-80 md:w-96 md:h-96"
            >
              <div className="absolute inset-0 bg-[#6b8f71] rounded-full opacity-20 animate-pulse" />
              <Image
                src="/logo.svg"
                alt="Bushi Bites Logo"
                fill
                className="object-contain p-12"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}