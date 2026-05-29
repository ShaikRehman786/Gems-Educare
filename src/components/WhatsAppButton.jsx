import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919160404666?text=Hi!%20I%20want%20to%20know%20about%20MBBS%20admission%20at%20Adam%20University%20Kyrgyzstan"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-50 bg-accent text-white p-4 rounded-full shadow-lg hover:scale-110 hover:bg-primary transition-all duration-300 animate-pulse-slow md:bottom-8"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={28} fill="currentColor" />
    </a>
  );
};

export default WhatsAppButton;
