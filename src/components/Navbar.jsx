import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import gemLogo from '../assets/gemsbr/3.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

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
    <>
      <nav className={`w-full sticky top-0 z-[100] transition-all duration-500 ${
        scrolled
          ? 'bg-white/98 backdrop-blur-md shadow-sm'
          : 'bg-white/98 backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 flex items-center justify-between h-24 md:h-28 lg:h-32 relative">
          <Link to="/" className="flex-shrink-0 hover:opacity-90 transition-opacity group">
            <img
              src={gemLogo}
              alt="Gems Educare"
              className="h-[85px] md:h-20 lg:h-24 w-auto object-contain"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-0 xl:gap-0.5 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-2 xl:px-3 2xl:px-4 py-2 text-xs xl:text-sm font-semibold tracking-wide transition-all duration-200 rounded-lg xl:rounded-xl ${
                    isActive
                      ? 'text-accent bg-accent/5'
                      : 'text-text-primary hover:text-accent hover:bg-gray-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-1.5 md:gap-2">
            <div className="hidden lg:flex items-center">
              <a
                href="https://wa.me/919160404666"
                className="bg-accent text-white px-3.5 xl:px-5 py-2.5 xl:py-3 rounded-xl text-xs xl:text-sm font-bold tracking-wide uppercase hover:bg-accent-hover transition-all duration-300 flex items-center gap-1.5 xl:gap-2 shadow-sm hover:shadow-md whitespace-nowrap"
              >
                <Phone size={12} className="xl:hidden" /><Phone size={14} className="hidden xl:block" /><span className="hidden 2xl:inline">Free </span>Counselling
              </a>
            </div>
            <button
              className="lg:hidden text-text-primary p-2 focus:outline-none hover:bg-gray-100 rounded-xl transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-white z-[9999] transform transition-all duration-400 ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        } lg:hidden flex flex-col`}
        style={{ transitionDuration: '0.35s' }}
      >
        <div className="flex items-center justify-between px-5 md:px-8 h-24 border-b border-border">
          <img
            src={gemLogo}
            alt="Gems Educare"
             className="h-[85px] md:h-20 w-auto object-contain"
          />
          <button
            className="p-2.5 text-text-primary hover:bg-gray-100 rounded-xl transition-colors"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 md:px-8 pt-4">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 text-lg font-semibold px-5 py-4 rounded-2xl transition-all ${
                    isActive
                      ? 'text-accent bg-accent/5 border-l-[3px] border-accent'
                      : 'text-text-primary hover:bg-gray-50 hover:text-accent border-l-[3px] border-transparent'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="px-5 md:px-8 py-6 border-t border-border bg-gray-50/50 space-y-3">
          <a
            href="https://wa.me/919160404666"
            className="w-full flex justify-center items-center gap-3 bg-accent text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-wide text-sm hover:bg-accent-hover transition-all shadow-sm"
            onClick={() => setIsOpen(false)}
          >
            <Phone size={18} /> Get Free Counselling
          </a>
          <p className="text-center text-xs text-text-secondary">
            Call: +91 91604 04666
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
