import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

const MobileBottomBar = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex h-16 shadow-2xl border-t border-white/10">
      <a
        href="tel:+919160404666"
        className="flex-1 bg-primary flex items-center justify-center gap-2 text-white font-bold"
      >
        <Phone size={20} />
        <span>Call Now</span>
      </a>
      <a
        href="https://wa.me/919160404666?text=Hi!%20I%20want%20to%20know%20about%20MBBS%20admission%20at%20Adam%20University%20Kyrgyzstan"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-[#25D366] flex items-center justify-center gap-2 text-white font-bold"
      >
        <MessageSquare size={20} />
        <span>WhatsApp</span>
      </a>
    </div>
  );
};

export default MobileBottomBar;
