import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [activeProduct, setActiveProduct] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 backdrop-blur-xl bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 flex items-center justify-center">
              <img
                src="logo.png"
                alt="Roximo Lenses"
                className="w-20 h-20 object-contain"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            <a
              href="#products"
              className="text-gray-600 hover:text-gray-900 transition-all duration-300 font-medium relative group"
            >
              Products
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-gray-900 transition-all duration-300 font-medium relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-gray-900 transition-all duration-300 font-medium relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-lg">
          <div className="px-6 py-4 space-y-4">
            <a
              href="#products"
              className="block text-gray-700 hover:text-blue-600 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>
            <a
              href="#about"
              className="block text-gray-700 hover:text-blue-600 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="block text-gray-700 hover:text-blue-600 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
