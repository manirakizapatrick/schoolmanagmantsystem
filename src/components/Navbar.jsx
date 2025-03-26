import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// Remove the problematic import and use direct path instead

import { 
  Home, 
  Info, 
  BookOpen, 
  Mail, 
  LogIn, 
  UserPlus, 
  Menu, 
  X
} from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Navigation items
  const navItems = [
    { title: 'Home', icon: <Home size={20} />, path: '/' },
    { title: 'About', icon: <Info size={20} />, path: '/about' },
    { title: 'Schools', icon: <BookOpen size={20} />, path: '/schools' },
    { title: 'Contact', icon: <Mail size={20} />, path: '/contact' },
    { title: 'Login', icon: <LogIn size={20} />, path: '/login' },
    { title: 'Register', icon: <UserPlus size={18} />, path: '/register' },
  ];

  return (
    <nav 
  className={`sticky top-0 z-50 transition-all duration-300 shadow-lg ${
    isScrolled 
      ? 'bg-green-100 backdrop-blur-sm shadow-md text-gray-800' 
      : 'bg-sky-100 text-gray-800'
  }`}
>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-24 ">
          
          {/* Logo */}
          <div className="flex items-center space-x-3 ">
            <Link to="/">
              <img src="/image/logo.png" alt="Logo" className="h-12 w-auto" />
            </Link>
            <span className="text-xl font-bold text-gray-800">School Management System</span>
          </div>

          {/* Rest of the component remains the same */}
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navItems.map((item) => (
             <Link
             key={item.path}
             to={item.path}
             className={`flex items-center px-3 py-2 rounded-md text-base font-medium no-underline shadow-md ${
               location.pathname === item.path
                 ? 'bg-indigo-500 text-white'
                 : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
             } transition-colors duration-200`}
             onClick={() => setIsMobileMenuOpen(false)}
           >
             {item.icon}
             <span className="ml-2">{item.title}</span>
           </Link>
           
           
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
              aria-label="Open menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-white">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === item.path
                  ? 'bg-indigo-500 text-white'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              } transition-colors duration-200`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.icon}
              <span className="ml-2">{item.title}</span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;