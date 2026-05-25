import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, MessageSquare } from 'lucide-react';
import gemsLogo from '../assets/gems/logo.png';

const Footer = () => {
  return (
    <footer className="w-full bg-navy text-white pb-20 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Col 1 */}
        <div className="md:col-span-4 space-y-8">
          <img src={gemsLogo} alt="Gems Educare" className="h-14 sm:h-16 md:h-20 w-auto object-contain" />
          <p className="text-border text-sm leading-relaxed">
            Leading medical education consultancy guiding Indian students to a successful career at Adam University, Kyrgyzstan.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3 text-border">
              <MapPin className="text-primary/60 mt-1 flex-shrink-0" size={18} />
              <p className="text-sm">
                2nd Floor, BLR Dream Heaven, 1-262/1,<br />
                Poranki, Vijayawada, AP 521137
              </p>
            </div>
            <div className="flex items-center gap-3 text-border">
              <Phone className="text-primary/60 flex-shrink-0" size={18} />
              <a href="tel:+919160404666" className="text-sm font-semibold hover:text-accent transition-colors">+91 91604 04666</a>
            </div>
          </div>
        </div>

        {/* Col 2 */}
        <div className="md:col-span-4 lg:col-span-3 lg:col-start-6">
          <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Quick Links</h4>
          <div className="flex flex-col gap-4">
            {[
              { name: 'Home', path: '/' },
              { name: 'About Us', path: '/about' },
              { name: 'Why Kyrgyzstan', path: '/kyrgyzstan' },
              { name: 'Fee Structure', path: '/fees' },
              { name: 'Accreditations', path: '/accreditations' },
              { name: 'Contact', path: '/contact' }
            ].map((item) => (
              <Link 
                key={item.name} 
                to={item.path}
                className="text-border text-sm hover:text-accent transition-colors w-fit"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Col 3 */}
        <div className="md:col-span-4">
          <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Free Counselling</h4>
          <div className="space-y-4">
            <a
              href="https://wa.me/919160404666"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded text-sm font-bold uppercase tracking-wide hover:bg-[#1ebe5d] transition-colors"
            >
              <MessageSquare size={18} />
              Chat on WhatsApp
            </a>
            <a
              href="tel:+919160404666"
              className="flex items-center justify-center gap-3 border border-border text-white py-4 rounded text-sm font-bold uppercase tracking-wide hover:bg-white/10 transition-colors"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-navy/50 py-8 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold text-border">
          <p>© {new Date().getFullYear()} Gems Educare. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-accent">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-accent">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
