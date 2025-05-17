"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-24 bg-[#f8f4ea]"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#3a4a3f] mb-4">
            Find Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're just a click away! Follow us on Instagram to stay updated with our latest menu additions and special offers.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/7511695/pexels-photo-7511695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Map location"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#3a4a3f] mb-4">Our Location</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-[#6b8f71] mr-3 mt-0.5" />
                    <div>
                      <p className="text-gray-700">Malad, Mumbai</p>
                      <p className="text-gray-500 text-sm">Cloud kitchen - delivery only</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-[#6b8f71] mr-3" />
                    <p className="text-gray-700">+91 98765 43210</p>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-[#6b8f71] mr-3" />
                    <p className="text-gray-700">hello@bushibites.com</p>
                  </div>
                  
                  <div className="flex items-center">
                    <Instagram className="h-5 w-5 text-[#6b8f71] mr-3" />
                    <Link 
                      href="https://instagram.com/bushibites" 
                      target="_blank"
                      className="text-[#6b8f71] hover:underline font-medium"
                    >
                      @bushibites
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
              <h3 className="text-xl font-semibold text-[#3a4a3f] mb-4">Hours of Operation</h3>
              
              <div className="space-y-3 mb-8">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium text-gray-800">11:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday - Sunday</span>
                  <span className="font-medium text-gray-800">10:00 AM - 11:00 PM</span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-[#3a4a3f] mb-4">Order Now</h3>
              <p className="text-gray-600 mb-6">
                Place your order through Zomato or direct message us on Instagram for special requests.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="https://zomato.com" 
                  target="_blank"
                  className="px-6 py-3 bg-[#cb202d] hover:bg-[#b71c29] text-white rounded-lg transition flex-1 text-center font-medium"
                >
                  Order on Zomato
                </Link>
                <Link 
                  href="https://instagram.com/bushibites" 
                  target="_blank"
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg transition flex-1 text-center font-medium"
                >
                  DM on Instagram
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}