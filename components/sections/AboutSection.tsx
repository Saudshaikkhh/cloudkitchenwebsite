"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 bg-[#f8f4ea]"
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <motion.div 
            variants={itemVariants}
            className="md:w-1/2 order-2 md:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#3a4a3f] mb-6">
              About Bushi Bites
            </h2>
            
            <p className="text-gray-700 mb-6 text-lg">
              Bushi Bites is an Instagram-based cloud kitchen serving delicious comfort food straight to your doorstep in Mumbai. Our passion is creating food that makes you feel at home, no matter where you are.
            </p>
            
            <p className="text-gray-700 mb-8 text-lg">
              As a delivery-only kitchen, we focus entirely on crafting the perfect flavors and ensuring your food arrives fresh and hot. We believe that great food should be accessible to everyone, which is why we've created a menu full of comforting favorites with our unique twist.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold text-[#3a4a3f] mb-2">Cloud Kitchen</h3>
                <p className="text-gray-600">Delivery-only concept focused on quality</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold text-[#3a4a3f] mb-2">Comfort Food</h3>
                <p className="text-gray-600">Dishes that feel like a warm hug</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold text-[#3a4a3f] mb-2">Fresh Ingredients</h3>
                <p className="text-gray-600">Locally sourced and high quality</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="md:w-1/2 order-1 md:order-2"
          >
            <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.pexels.com/photos/5602502/pexels-photo-5602502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Kitchen preparation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#3a4a3f] bg-opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white bg-opacity-90 p-6 rounded-lg max-w-xs">
                  <p className="text-center text-xl font-semibold text-[#3a4a3f]">
                    "No dine-in, just divine in!"
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}