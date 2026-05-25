import React, { useEffect, useState } from 'react';
import { X, CheckCircle, Phone, MessageSquare, Star } from 'lucide-react';

const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Open modal after a short delay for a polished feel
    const timer = setTimeout(() => setIsOpen(true), 600);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(8px)' }}
      onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
    >
      <div
        className="relative bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 w-full max-w-2xl overflow-hidden animate-modal-in"
        style={{ animation: 'modalIn 0.4s cubic-bezier(0.34,1.56,0.64,1) both' }}
      >
        {/* Top banner */}
        <div className="px-8 pt-8 pb-4 text-center relative border-b border-gray-50">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-colors text-gray-500 hover:text-gray-900"
            aria-label="Close"
          >
            <X size={18} />
          </button>

          <p className="text-primary font-bold tracking-[0.15em] text-[10px] uppercase mb-4">2025–2026 Admissions Open</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 font-playfair">
            Study MBBS/MD Abroad
          </h2>
          <p className="text-gray-500 text-sm font-medium">
            Adam University, Kyrgyzstan — WHO & NMC India Approved
          </p>
        </div>

        {/* Body */}
        <div className="px-8 py-8">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-6 mb-8 text-center divide-x divide-gray-100">
            {[
              { num: '5000+', label: 'Students Enrolled' },
              { num: '7+', label: 'Accreditations' },
              { num: '₹18L', label: 'Approx Total Cost' },
            ].map((s, i) => (
              <div key={i} className="px-2">
                <div className="text-2xl font-bold text-primary font-playfair">{s.num}</div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Key benefits */}
          <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-8">
            {[
              'NMC India Approved',
              'No Entry Tests Required',
              'No IELTS / TOEFL',
              'No Donations',
              '100% Visa Guarantee',
              'Pay Fee on Arrival',
              'ECFMG / WHO Approved',
              '4.5+1 Year Course',
            ].map((b, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle size={16} className="text-primary/60 flex-shrink-0" />
                {b}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/919160404666"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-4 rounded text-sm font-bold tracking-wide uppercase hover:bg-[#1ebe5d] transition-colors shadow-sm"
            >
              <MessageSquare size={18} /> WhatsApp Free Counselling
            </a>
            <a
              href="tel:+919160404666"
              className="flex-1 flex items-center justify-center gap-2 border border-primary text-primary px-6 py-4 rounded text-sm font-bold tracking-wide uppercase hover:bg-primary/5 transition-colors"
            >
              <Phone size={18} /> Call Now: +91 91604 04666
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.95) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default WelcomeModal;
