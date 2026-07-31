'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Fragment } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Real Estate Investment', path: '/real-estate' },
    { name: 'Services', path: '/services' },
    { name: 'Our Work', path: '/our-work' },
    { name: 'Resources', path: '/resources' },
    { name: 'About', path: '/about-us' },
  ];

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };

    if (isOpen) {
      document.addEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const scrolledDown = currentY > lastScrollY.current;
      setHidden(scrolledDown && currentY > 120);
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Fragment>
    <motion.div
      animate={{ y: hidden && !isOpen ? '-100%' : '0%' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed top-0 w-screen z-40 backdrop-blur-xl backdrop-saturate-150 bg-white/25 dark:bg-black/25 border-b border-white/40 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.06)] before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/20 before:to-transparent before:pointer-events-none dark:before:from-white/5 pb-8">
      {/* Navbar content */}
      <div className="relative z-10 mx-4 px-4 mt-14 mb-4 flex items-center">
        <Link
          href="/"
          className="absolute left-4 flex items-center gap-3 group"
        >
          <div className="rounded-lg group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300 relative w-10 h-10">
            <Image
              src="/logo dnt.png"
              alt="DeepNeural Logo"
              fill
              className="object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="hidden lg:flex flex-col -space-y-0.5">
            <span className="text-md font-semibold text-primary tracking-widest uppercase">
              DeepNeural Technologies
            </span>
            <span className="text-xs font-medium text-light-dark/60 dark:text-light/50">
              AI Agents & Solutions
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex absolute right-4 items-center gap-6">
          <nav className="flex items-center space-x-6">
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

          <div className="flex items-center space-x-1">
            <Link href="/contact-us">
              <Button className="p-2 !text-white dark:!text-black bg-black shadow-none dark:bg-white px-4">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu - Right */}
        <div className="absolute md:hidden right-4 flex items-center justify-end space-x-3 z-60">
          <Button
            className="md:hidden text-black dark:text-white bg-transparent"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
    </motion.div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Overlay (tap outside closes) */}
            <div
              className="absolute inset-0 dark:bg-black/40"
              onClick={closeMenu}
            />

            {/* Drawer */}
            <motion.div
              className="absolute right-0 top-24 h-fit w-full bg-light dark:bg-dark"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()} // prevent overlay close on drawer click
            >
              <nav className="flex flex-col w-screen items-center space-y-6 p-8 backdrop-blur-md">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.path}
                    className={`text-xl font-medium transition-colors hover:text-primary ${pathname === link.path
                      ? 'text-primary'
                      : 'text-light-dark dark:text-light'
                      }`}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                ))}

                <Link href="/contact-us" onClick={closeMenu} className="w-full">
                  <Button className="w-full p-3 !text-white dark:!text-black bg-black shadow-none dark:bg-white">
                    Contact Us
                  </Button>
                </Link>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Fragment>
  );
};

export default Navbar;
