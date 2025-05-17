import Link from "next/link";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#3a4a3f] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Bushi Bites</h3>
            <p className="text-gray-200 mb-4">
              We're your cozy cloud kitchen, serving love, comfort, and flavor straight to your doorstep.
            </p>
            <div className="flex items-center space-x-4">
              <Link 
                href="https://instagram.com/bushibites" 
                target="_blank"
                className="text-white hover:text-gray-200 transition"
              >
                <Instagram size={24} />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-200 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-200 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#menu" className="text-gray-200 hover:text-white transition">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-200 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-200 mb-2">
              📍 Malad, Mumbai
            </p>
            <p className="text-gray-200 mb-2">
              📱 +91 98765 43210
            </p>
            <p className="text-gray-200 mb-2">
              📧 hello@bushibites.com
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>© {new Date().getFullYear()} Bushi Bites. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}