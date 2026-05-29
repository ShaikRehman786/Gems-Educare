import { MessageSquare } from 'lucide-react';

const MobileBottomBar = () => {
  return (
    <div className="md:hidden fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/919160404666?text=Hi!%20I%20want%20to%20know%20about%20MBBS%20admission%20at%20Adam%20University%20Kyrgyzstan"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-accent rounded-full shadow-lg flex items-center justify-center text-white hover:scale-110 hover:bg-primary transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare size={26} />
      </a>
    </div>
  );
};

export default MobileBottomBar;
