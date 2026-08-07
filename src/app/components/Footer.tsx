'use client';

import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

// Mirrors the Navbar navigation, in the same order.
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Real Estate Investment', path: '/real-estate' },
  { name: 'Services', path: '/services' },
  { name: 'Our Work', path: '/our-work' },
  { name: 'Resources', path: '/resources' },
  { name: 'About', path: '/about-us' },
  { name: 'Contact Us', path: '/contact-us' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-black border-t border-light-dark/10 dark:border-white/10 text-light-dark dark:text-light">
      <div className="px-4 sm:px-6 md:px-12 py-16 md:py-20">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Section: Brand */}
          <div className="lg:col-span-4">
            {/* Brand Section */}
            <div>
              <Link
                href="/"
                className="w-fit flex items-center gap-3 group mb-4"
              >
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="rounded-lg group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300 relative w-10 h-10"
                >
                  <Image
                    src="/logo dnt.png"
                    alt="DeepNeural Logo"
                    fill
                    sizes="40px"
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </motion.div>
                <div className="flex flex-col -space-y-0.5">
                  <span className="text-base font-semibold text-primary tracking-widest uppercase">
                    DeepNeural Technologies
                  </span>
                  <span className="text-xs font-medium text-light-dark/60 dark:text-light/50">
                    AI Solutions
                  </span>
                </div>
              </Link>
              <p className="text-sm leading-relaxed text-light-dark/70 dark:text-light/70 mb-6 max-w-lg">
                Pioneering autonomous AI agents that transform how businesses
                operate. Our cutting-edge solutions deliver unprecedented
                efficiency.
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/company/deepneural-technologies-private-limited/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#0077B5]/10 hover:bg-[#0077B5] text-[#0077B5] hover:text-white transition-all duration-300"
                  aria-label="Connect with us on LinkedIn"
                >
                  <Linkedin size={18} fill="currentColor" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61573254260959"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#1877F2]/10 hover:bg-[#1877F2] text-[#1877F2] hover:text-white transition-all duration-300"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook size={18} fill="currentColor" />
                </a>
                <a
                  href="https://www.instagram.com/co.ntact9421/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gradient-to-tr from-[#f9ce34]/10 via-[#ee2a7b]/10 to-[#6228d7]/10 hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] text-[#ee2a7b] hover:text-white transition-all duration-300"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Section: Services + Navigation + Contact */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">
            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-light-dark dark:text-light mb-6">
                Services
              </h3>
              <ul className="space-y-3">
                {[
                  'Campaign Strategy and Execution',
                  'Business Website Development',
                  'Drip Sequence Management',
                  'AI-Powered Video Podcast Production',
                  'Social Media Marketing',
                  'AI-Assisted Presentation Design',
                  'Lead Generation',
                  'CRM Automation',
                  'Custom Business & Technology Solutions',
                ].map((service) => (
                  <li key={service}>
                    <Link
                      href="/services"
                      className="text-sm text-light-dark/70 dark:text-light/70 hover:text-primary dark:hover:text-primary transition-colors flex items-start group"
                    >
                      <span>{service}</span>
                      <ArrowRight
                        size={14}
                        className="ml-2 mt-0.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-light-dark dark:text-light mb-6">
                Navigation
              </h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className="text-sm text-light-dark/70 dark:text-light/70 hover:text-primary dark:hover:text-primary transition-colors flex items-start group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight
                        size={14}
                        className="ml-2 mt-0.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-light-dark dark:text-light mb-6">
                Contact
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="shrink-0 mt-0.5">
                    <MapPin
                      size={18}
                      className="text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="text-sm text-light-dark/70 dark:text-light/70 leading-relaxed">
                    31, Goyal Nagar, Kanadia Road, Indore, 452018, India
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="shrink-0 mt-0.5">
                    <Phone
                      size={18}
                      className="text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <a
                    href="tel:+917999991951"
                    className="text-sm text-light-dark/70 dark:text-light/70 hover:text-primary transition-colors"
                  >
                    +91 79999 91951
                  </a>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="shrink-0 mt-0.5">
                    <Mail
                      size={18}
                      className="text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <a
                    href="mailto:contact@deepneuraltechnologies.com"
                    className="text-sm text-light-dark/70 dark:text-light/70 hover:text-primary transition-colors break-words"
                  >
                    contact@deepneuraltechnologies.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-light-dark/10 dark:border-white/10">
        <div className="px-4 sm:px-6 md:px-12 py-6">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-light-dark/60 dark:text-light/60">
            <p className="text-xs">
              &copy; {new Date().getFullYear()} DeepNeural Technologies Pvt Ltd.
              All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-xs hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs hover:text-primary transition-colors"
              >
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
