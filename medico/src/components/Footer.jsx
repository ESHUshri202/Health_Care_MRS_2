import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span  className="text-[#0DD3B9] text-2xl" >🚑</span>
              <span className="text-xl font-bold">Health Care</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your virtual health assistant for disease prediction and treatment recommendations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#0DD3B9] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0DD3B9] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0DD3B9] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0DD3B9] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#0DD3B9] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#0DD3B9] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-[#0DD3B9] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/developer" className="text-gray-400 hover:text-[#0DD3B9] transition-colors">
                  Developer
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#0DD3B9] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-[#0DD3B9] transition-colors">
                Disease Prediction
              </li>
              <li className="text-gray-400 hover:text-[#0DD3B9] transition-colors">
                Treatment Recommendations
              </li>
              <li className="text-gray-400 hover:text-[#0DD3B9] transition-colors">
                Medication Information
              </li>
              <li className="text-gray-400 hover:text-[#0DD3B9] transition-colors">
                Diet Plans
              </li>
              <li className="text-gray-400 hover:text-[#0DD3B9] transition-colors">
                Workout Recommendations
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-[#0DD3B9] mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Healthcare Avenue, Medical District, CA 90210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-[#0DD3B9] flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-[#0DD3B9] flex-shrink-0" />
                <span className="text-gray-400">info@medigenius.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MediGenius. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
