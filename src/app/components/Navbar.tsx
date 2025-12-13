'use client';

import { motion } from 'framer-motion';
import { Brain, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Button from './Button';
import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'About', path: '/about-us' },
    { name: 'Services', path: '/services' },
    { name: 'Clients', path: '/clients' },
  ];

  return (
    <div className="fixed top-0 w-full z-40">
      {/* Backdrop blur layer */}
      <div className="absolute inset-x-0 top-0 h-24 backdrop-blur-md" />

      {/* Navbar content */}
      <div className="relative z-10 mx-4 px-4 mt-14 mb-4 flex items-center">
        <Link
          href="/"
          className="absolute left-4 flex items-center gap-3 group"
        >
          <div className="rounded-lg group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
            <Brain
              size={40}
              className="text-primary group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="hidden lg:flex flex-col -space-y-0.5">
            <span className="text-md font-semibold text-primary tracking-widest uppercase">
              DeepNeural
            </span>
            <span className="text-xs font-medium text-light-dark/60 dark:text-light/50">
              AI Solutions
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="text-md font-medium pb-0.5 border-b-2 border-b-transparent hover:border-b-primary transition-colors duration-300 inline-block"
            >
              <span className="block hover:-translate-y-1 transition-transform duration-300">
                {link.name}
              </span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex absolute right-4 items-center space-x-1">
          <ThemeToggle />
          <Link href="/contact">
            <Button className="p-2 text-white dark:text-black bg-black shadow-none dark:bg-white ">
              Contact
            </Button>
          </Link>
        </div>

        {/* Theme Toggle and Mobile Menu - Right */}
        <div className="absolute right-10 flex items-center space-x-4">
          <button
            className="md:hidden text-light-dark dark:text-light"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className={`md:hidden fixed inset-0 bg-light dark:bg-dark z-30 pt-20 ${
          isOpen ? 'block' : 'hidden'
        }`}
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
                pathname === link.path
                  ? 'text-primary'
                  : 'text-light-dark dark:text-light'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </motion.div>
    </div>
  );
};

export default Navbar;
