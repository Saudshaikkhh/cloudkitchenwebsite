"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white shadow-md py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative h-10 w-10">
            <Image
              src="/logo.svg"
              alt="Bushi Bites Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <span className={`text-xl font-semibold ${isScrolled ? 'text-[#3a4a3f]' : 'text-white'}`}>
            Bushi Bites
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#6b8f71] ${
                isScrolled ? 'text-[#3a4a3f]' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            onClick={openCart} 
            variant="outline" 
            className={`flex items-center gap-2 ${
              isScrolled 
                ? 'border-[#3a4a3f] text-[#3a4a3f] hover:bg-[#3a4a3f] hover:text-white' 
                : 'border-white text-white hover:bg-white hover:text-[#3a4a3f]'
            }`}
          >
            <ShoppingBag size={18} />
            <span className="font-medium">{totalItems}</span>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden">
          <Button 
            onClick={openCart} 
            variant="outline" 
            className={`mr-2 flex items-center gap-2 ${
              isScrolled 
                ? 'border-[#3a4a3f] text-[#3a4a3f]' 
                : 'border-white text-white'
            }`}
          >
            <ShoppingBag size={18} />
            <span className="font-medium">{totalItems}</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className={isScrolled ? 'text-[#3a4a3f]' : 'text-white'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-[#3a4a3f] text-lg font-medium py-2 border-b border-gray-100"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}