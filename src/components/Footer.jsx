import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, ArrowUpRight, ShieldCheck, Award, Globe } from 'lucide-react';
import gemLogo from '../assets/gemsbr/3.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-navy text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 pt-16 md:pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-flex items-center group">
              <img
                src={gemLogo}
                alt="Gems Educare"
                className="h-[75px] md:h-[95px] lg:h-[110px] w-auto object-contain"
              />
            </Link>
            <p className="text-white/45 text-sm leading-relaxed max-w-sm">
              India's trusted medical education consultancy since 2010. We guide aspiring doctors to successful medical careers at Adam University, Kyrgyzstan — with globally recognized degrees at affordable costs.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-white/50 bg-white/5 rounded-lg px-3 py-1.5">
                <ShieldCheck size={11} className="text-accent" /> ISO 9001:2015
              </span>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-white/50 bg-white/5 rounded-lg px-3 py-1.5">
                <Award size={11} className="text-accent" /> 5000+ Students
              </span>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-white/50 bg-white/5 rounded-lg px-3 py-1.5">
                <Globe size={11} className="text-accent" /> WHO Recognized
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold uppercase tracking-[0.15em] text-xs mb-5">Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact', path: '/contact' },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-white/45 text-sm hover:text-accent transition-colors w-fit flex items-center gap-1 group"
                >
                  {item.name}
                  <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>

          {/* University Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold uppercase tracking-[0.15em] text-xs mb-5">University</h4>
            <div className="flex flex-col gap-2.5">
              {[
                { name: 'University Overview', path: '/university' },
                { name: 'Fee Structure', path: '/fees' },
                { name: 'Admission Process', path: '/admission' },
                { name: 'Hostel & Food', path: '/hostel-food' },
                { name: 'Accreditations', path: '/accreditations' },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-white/45 text-sm hover:text-accent transition-colors w-fit flex items-center gap-1 group"
                >
                  {item.name}
                  <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-bold uppercase tracking-[0.15em] text-xs mb-5">Contact</h4>
            <div className="space-y-3.5 mb-6">
              <div className="flex gap-3">
                <MapPin size={15} className="text-accent mt-0.5 flex-shrink-0" />
                <p className="text-white/45 text-sm leading-relaxed">
                  2nd Floor, BLR Dream Heaven, 1-262/1, Poranki, Vijayawada, AP 521137
                </p>
              </div>
              <a href="tel:+919160404666" className="flex gap-3 items-center group">
                <Phone size={15} className="text-accent flex-shrink-0" />
                <span className="text-white/45 text-sm group-hover:text-accent transition-colors">+91 91604 04666</span>
              </a>
              <a href="mailto:info@gemseudtech.com" className="flex gap-3 items-center group">
                <Mail size={15} className="text-accent flex-shrink-0" />
                <span className="text-white/45 text-sm group-hover:text-accent transition-colors">info@gemseudtech.com</span>
              </a>
            </div>
            <div className="space-y-2.5">
              <a
                href="https://wa.me/919160404666"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-accent text-white py-3 rounded-xl text-sm font-bold uppercase tracking-wide hover:bg-primary transition-all duration-300 shadow-sm"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
              <a
                href="tel:+919160404666"
                className="flex items-center justify-center gap-3 border border-white/15 text-white py-3 rounded-xl text-sm font-bold uppercase tracking-wide hover:bg-white/10 transition-all duration-300"
              >
                <Phone size={16} />
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 md:mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/35 order-2 md:order-1">
            &copy; {new Date().getFullYear()} Gems Educare. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/35 order-1 md:order-2">
            <Link to="/about" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <span className="w-px h-3 bg-white/15" />
            <Link to="/contact" className="hover:text-white/60 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 left-8 z-40 w-11 h-11 rounded-full bg-accent/90 hover:bg-accent text-white flex items-center justify-center shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
        aria-label="Scroll to top"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 15l-6-6-6 6"/>
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
