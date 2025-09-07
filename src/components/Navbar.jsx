import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo-sindangpano.png"; // Impor logo baru

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { to: "/", label: "Beranda" },
    { to: "/products", label: "Produk" },
    { to: "/profile", label: "Profil" },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 navbar-container ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-white/90 backdrop-blur-sm shadow-md'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
            onClick={closeMenu}
          >
            <img 
              src={logo} 
              alt="Logo Sindangpano" 
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
            />
            <div className="flex flex-col">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
                Sindangpano
              </h1>
              <span className="text-xs text-gray-500 hidden sm:block">Desa Petani</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative px-4 py-2 text-gray-700 font-medium rounded-lg hover:text-blue-900 transition-all duration-200 group"
              >
                <span className="relative z-10">{link.label}</span>
                <div className="absolute inset-0 bg-blue-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200 origin-center"></div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <Menu 
                className={`absolute inset-0 w-6 h-6 text-gray-700 transition-all duration-200 ${
                  isOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                }`} 
              />
              <X 
                className={`absolute inset-0 w-6 h-6 text-gray-700 transition-all duration-200 ${
                  isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                }`} 
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2 border-t border-gray-100">
            {navLinks.map((link, index) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className={`block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-blue-50 hover:text-blue-900 transition-all duration-200 animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}