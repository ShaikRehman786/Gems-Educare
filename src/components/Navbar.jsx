import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import gemsLogo from '../assets/gems/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <nav className={`w-full sticky top-0 z-[100] transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm border-b border-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-20 md:h-24">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 relative z-20">
          <img src={gemsLogo} alt="Gems Educare" className="h-12 md:h-16 w-auto" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-semibold tracking-wide uppercase transition-colors hover:text-primary ${
                  isActive ? 'text-primary' : 'text-gray-800'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <a
            href="tel:+919160404666"
            className="flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded text-sm font-bold tracking-wide uppercase hover:bg-primary-dark transition-colors"
          >
            <Phone size={16} /> Call Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-gray-800 p-2 relative z-20 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-[110] transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden flex flex-col pt-24 px-6 gap-6 h-screen overflow-y-auto`}
      >
        <button
          className="absolute top-6 right-6 text-gray-800 p-2 bg-gray-100 rounded-full"
          onClick={() => setIsOpen(false)}
        >
          <X size={24} />
        </button>
        
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `text-xl font-playfair font-bold border-b border-gray-100 pb-4 ${
                isActive ? 'text-primary' : 'text-gray-800'
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
        
        <div className="pt-4 pb-12">
          <a
            href="tel:+919160404666"
            className="w-full flex justify-center items-center gap-2 bg-primary text-white px-8 py-4 rounded font-bold uppercase tracking-wide"
            onClick={() => setIsOpen(false)}
          >
            <Phone size={18} /> Call Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
