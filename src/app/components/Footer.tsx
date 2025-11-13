'use client';

import React from 'react';
import Link from 'next/link';
import { Brain, Mail, MapPin, Phone, Linkedin, Twitter, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Brain size={28} className="text-primary" />
              <span className="text-xl font-bold text-light font-display">DeepNeural</span>
            </div>
            <p className="text-light-dark mb-4 text-sm">
              Building the next generation of AI agents for enterprise solutions. Transforming businesses with cutting-edge artificial intelligence.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-light-dark hover:text-primary transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-light-dark hover:text-primary transition-colors"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-light-dark hover:text-primary transition-colors"
                aria-label="Check our projects on GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-light-dark hover:text-primary transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link href="/about-us" className="text-light-dark hover:text-primary transition-colors text-sm">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="text-light-dark hover:text-primary transition-colors text-sm">Services</Link>
              </li>
              <li>
                <Link href="/clients" className="text-light-dark hover:text-primary transition-colors text-sm">Clients</Link>
              </li>
              <li>
                <Link href="/contact" className="text-light-dark hover:text-primary transition-colors text-sm">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-light-dark hover:text-primary transition-colors text-sm">AI Agent Development</Link>
              </li>
              <li>
                <Link href="/services" className="text-light-dark hover:text-primary transition-colors text-sm">Natural Language Processing</Link>
              </li>
              <li>
                <Link href="/services" className="text-light-dark hover:text-primary transition-colors text-sm">Computer Vision Solutions</Link>
              </li>
              <li>
                <Link href="/services" className="text-light-dark hover:text-primary transition-colors text-sm">Predictive Analytics</Link>
              </li>
              <li>
                <Link href="/services" className="text-light-dark hover:text-primary transition-colors text-sm">Custom AI Integration</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary mt-0.5" aria-hidden="true" />
                <span className="text-light-dark text-sm">31, Goyal Nagar, Kanadia Road, Indore, 452018, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary" aria-hidden="true" />
                <span className="text-light-dark text-sm">+91 79999 91951</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary" aria-hidden="true" />
                <span className="text-light-dark text-sm">contact@deepneuraltechnologies.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-lighter mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-light-dark text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} DeepNeural Pvt Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-light-dark hover:text-primary transition-colors text-sm">Privacy Policy</Link>
            <Link href="/terms" className="text-light-dark hover:text-primary transition-colors text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;