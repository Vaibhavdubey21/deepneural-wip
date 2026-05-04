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
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-black border-t border-light-dark/10 dark:border-white/10 text-light-dark dark:text-light">
      <div className="mx-3 md:mx-8 px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-4">
          {/* Left Section: Brand + Navigation */}
          <div className="lg:col-span-6 flex flex-col gap-12">
            {/* Brand Section */}
            <div>
              <Link
                href="/"
                className="w-fit flex items-center gap-3 group mb-4"
              >
                <div className="rounded-lg group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300 relative w-10 h-10">
                  <Image
                    src="/logo dnt.png"
                    alt="DeepNeural Logo"
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-col -space-y-0.5">
                  <span className="text-md font-semibold text-primary tracking-widest uppercase">
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

          {/* Right Section: Services + Contact + Quick Links */}
          <div className="lg:col-span-6 flex flex-col lg:flex-row gap-14 md:gap-12 lg:gap-12">
            {/* Services */}
            <div className="md:col-span-2 lg:col-span-1 min-w-fit">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-light-dark dark:text-light mb-6">
                Services
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/services"
                    className="text-sm text-light-dark/70 dark:text-light/70 hover:text-primary dark:hover:text-primary transition-colors flex items-center group"
                  >
                    <span className="whitespace-nowrap">AI Agent Development</span>
                    <ArrowRight
                      size={14}
                      className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-sm text-light-dark/70 dark:text-light/70 hover:text-primary dark:hover:text-primary transition-colors flex items-center group"
                  >
                    <span>AI Integration</span>
                    <ArrowRight
                      size={14}
                      className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-2 lg:col-span-1 w-fit min-w-fit">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-light-dark dark:text-light mb-6">
                Navigation
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-sm text-light-dark/70 dark:text-light/70 hover:text-primary dark:hover:text-primary transition-colors flex items-center group"
                  >
                    <span>Home</span>
                    <ArrowRight
                      size={14}
                      className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="text-sm text-light-dark/70 dark:text-light/70 hover:text-primary dark:hover:text-primary transition-colors flex items-center group"
                  >
                    <span>About Us</span>
                    <ArrowRight
                      size={14}
                      className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-sm text-light-dark/70 dark:text-light/70 hover:text-primary dark:hover:text-primary transition-colors flex items-center group"
                  >
                    <span>Services</span>
                    <ArrowRight
                      size={14}
                      className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/clients"
                    className="text-sm text-light-dark/70 dark:text-light/70 hover:text-primary dark:hover:text-primary transition-colors flex items-center group"
                  >
                    <span>Clients</span>
                    <ArrowRight
                      size={14}
                      className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-light-dark/70 dark:text-light/70 hover:text-primary dark:hover:text-primary transition-colors flex items-center group"
                  >
                    <span>Contact</span>
                    <ArrowRight
                      size={14}
                      className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-3 lg:col-span-1 min-w-fit">
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
                    className="text-sm text-light-dark/70 dark:text-light/70 hover:text-primary transition-colors whitespace-nowrap"
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
      <div className="bg-violet-600">
        <div className="mx-3 md:mx-8 px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white">
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
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
