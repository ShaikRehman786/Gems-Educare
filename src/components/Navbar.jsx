import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone, Globe, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import gemsLogo from '../assets/gems/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'University', path: '/university' },
    { name: 'Fees', path: '/fees' },
    { name: 'Admission', path: '/admission' },
    { name: 'Hostel', path: '/hostel-food' },
    { name: 'Accreditations', path: '/accreditations' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="w-full sticky top-0 z-[100]">
      {/* Top Strip */}
      <div className="bg-primary-dark h-8 flex items-center justify-between px-4 md:px-12 text-white text-[11px]">
        <div className="flex items-center gap-4">
          <a href="tel:+919160404666" className="flex items-center gap-1 hover:text-primary">
            <Phone size={12} /> +91 91604 04666
          </a>
          <span className="hidden md:inline">|</span>
          <a href="https://www.gemseudtech.com" className="hidden md:flex items-center gap-1 hover:text-primary">
            <Globe size={12} /> www.gemseudtech.com
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Facebook size={14} className="cursor-pointer hover:text-primary" />
          <Instagram size={14} className="cursor-pointer hover:text-primary" />
          <Twitter size={14} className="cursor-pointer hover:text-primary" />
          <Youtube size={14} className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-primary shadow-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex-shrink-0">
            <img src={gemsLogo} alt="Gems Educare" className="h-10 md:h-12 w-auto" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-all hover:text-primary ${
                    isActive ? 'text-primary border-b-2 border-primary' : 'text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="bg-primary text-white px-5 py-2 rounded-md font-bold text-sm hover:bg-primary-light transition-colors"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-primary-dark z-[110] transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden flex flex-col items-center justify-center gap-8`}
      >
        <button
          className="absolute top-6 right-6 text-white"
          onClick={() => setIsOpen(false)}
        >
          <X size={32} />
        </button>
        
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `text-2xl font-playfair font-bold ${
                isActive ? 'text-primary' : 'text-white'
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
        
        <Link
          to="/contact"
          onClick={() => setIsOpen(false)}
          className="bg-primary text-white px-10 py-4 rounded-md font-bold text-xl mt-4"
        >
          Apply Now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
