'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Brain, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about-us' },
    { name: 'Services', path: '/services' },
    { name: 'Clients', path: '/clients' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header 
      className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled ? 'bg-dark/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Brain size={32} className="text-primary" />
            <span className="text-xl font-bold text-light font-display">DeepNeural</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === link.path ? 'text-primary' : 'text-light'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-light"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div 
        className={`md:hidden fixed inset-0 bg-dark z-30 pt-20 ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : '100%' }}
        transition={{ duration: 0.3 }}
      >
        <nav className="flex flex-col items-center space-y-6 p-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`text-xl font-medium transition-colors hover:text-primary ${
                pathname === link.path ? 'text-primary' : 'text-light'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;