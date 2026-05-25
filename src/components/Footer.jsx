import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, MessageSquare, ChevronRight } from 'lucide-react';
import gemsLogo from '../assets/gems/logo.png';

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Top Section */}
      <div className="bg-white py-16 px-4 md:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Col 1 */}
          <div className="space-y-6">
            <img src={gemsLogo} alt="Gems Educare" className="h-16 w-auto" />
            <p className="text-xl font-playfair font-bold text-primary italic">"Change Your Future"</p>
            <div className="space-y-4 text-text-primary">
              <div className="flex gap-3">
                <MapPin className="text-primary flex-shrink-0" size={20} />
                <p className="text-sm">
                  2nd Floor, BLR Dream Heaven, 1-262/1, Poranki,<br />
                  Vijayawada, Andhra Pradesh 521137
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="text-primary" size={20} />
                <a href="tel:+919160404666" className="font-bold hover:text-primary transition-colors">+91 91604 04666</a>
              </div>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-xl font-playfair font-bold text-primary mb-8 border-b-2 border-primary w-fit pb-1">Quick Links</h4>
            <div className="grid grid-cols-1 gap-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Why Kyrgyzstan', path: '/kyrgyzstan' },
                { name: 'Adam University', path: '/university' },
                { name: 'Fee Structure', path: '/fees' },
                { name: 'Admission Process', path: '/admission' },
                { name: 'Hostel & Food', path: '/hostel-food' },
                { name: 'Accreditations', path: '/accreditations' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path}
                  className="flex items-center gap-2 text-text-primary hover:text-primary transition-colors group"
                >
                  <ChevronRight size={14} className="text-primary group-hover:translate-x-1 transition-transform" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-xl font-playfair font-bold text-primary mb-8 border-b-2 border-primary w-fit pb-1">Free Counselling</h4>
            <div className="space-y-4">
              <a
                href="https://wa.me/919160404666?text=Hi!%20I%20want%20to%20know%20about%20MBBS%20admission%20at%20Adam%20University%20Kyrgyzstan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-3 rounded-md font-bold hover:scale-105 transition-transform shadow-md"
              >
                <MessageSquare size={20} />
                Chat on WhatsApp
              </a>
              <a
                href="tel:+919160404666"
                className="flex items-center justify-center gap-3 bg-primary text-white py-3 rounded-md font-bold hover:scale-105 transition-transform shadow-md"
              >
                <Phone size={20} />
                Call +91 91604 04666
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary-dark text-white py-8 px-4 text-center space-y-4 mb-16 md:mb-0">
        <p className="text-primary font-medium">
          WHO | ECFMG | NMC INDIA | 15+ INT'L COUNCILS
        </p>
        <div className="border-t border-white/10 pt-4 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto text-sm opacity-80">
          <p>© 2025 Gems Educare. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/contact" className="hover:text-primary">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-primary">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
