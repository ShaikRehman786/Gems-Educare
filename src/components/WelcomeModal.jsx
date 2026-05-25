import React, { useEffect, useState, useRef } from 'react';
import { X, CheckCircle, ArrowLeft, Star, MessageSquare } from 'lucide-react';

const reviews = [
  { name: 'Sai Kiran', city: 'Hyderabad', text: 'Very smooth admission process and excellent guidance throughout.' },
  { name: 'Priya', city: 'Vijayawada', text: 'Hostel and visa process handled perfectly by Gems Educare.' },
  { name: 'Rahul', city: 'Guntur', text: 'Affordable fees and genuine counselling support.' },
  { name: 'Anjali', city: 'Visakhapatnam', text: 'Right from documentation to flight, everything was seamless.' },
  { name: 'Venkat', city: 'Kurnool', text: 'Highly recommended for MBBS abroad. Great support team.' },
];

const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [currentReview, setCurrentReview] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', state: '', course: 'MBBS' });
  const [touchStart, setTouchStart] = useState(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentReview(prev => (prev + 1) % reviews.length);
      }, 3000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi! My name is ${formData.name}.%0APhone: ${formData.phone}%0AState: ${formData.state}%0ACourse: ${formData.course}%0AI want free counselling for MBBS admission at Adam University.`;
    window.open(`https://wa.me/919160404666?text=${text}`, '_blank');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBack = () => setStep(1);

  const handleNextReview = () => setCurrentReview(prev => (prev + 1) % reviews.length);
  const handlePrevReview = () => setCurrentReview(prev => (prev - 1 + reviews.length) % reviews.length);

  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNextReview();
      else handlePrevReview();
    }
    setTouchStart(null);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(4px)' }}
      onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
    >
      <div
        className="relative bg-white rounded-2xl shadow-xl border border-border w-[95vw] max-w-[420px] md:max-w-[600px] lg:max-w-[850px] max-h-[90vh] overflow-y-auto animate-modal-in"
        style={{ animation: 'modalIn 0.35s cubic-bezier(0.34,1.56,0.64,1) both' }}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {step === 1 && (
          <div className="p-6 md:p-8 lg:p-10">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary font-playfair leading-tight">
                MBBS at <span className="text-accent">Adam University</span>
              </h2>
              <div className="text-xl md:text-2xl font-bold text-primary mt-2">
                ₹16 Lakhs <span className="text-base font-normal text-text-secondary">Total Cost</span>
              </div>
            </div>

            <p className="text-sm md:text-base text-text-secondary text-center mb-6 max-w-2xl mx-auto">
              5000+ students from Andhra Pradesh & Telangana have secured MBBS admissions through Gems Educare.
            </p>

            <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
              {[
                '5000+ Successful Admissions',
                'Visa Assistance',
                'Hostel Support',
                'Documentation Help',
                'WHO & NMC Approved',
                'No IELTS Required',
                'No Donation',
                'Pay Fee on Arrival',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                  <CheckCircle size={16} className="text-secondary flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>

            <div
              className="bg-section rounded-xl p-5 mb-6 relative overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="text-yellow-500 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <span className="text-xs font-bold text-text-secondary">
                  {reviews[currentReview].name} &bull; {reviews[currentReview].city}
                </span>
              </div>
              <p className="text-sm text-text-primary italic leading-relaxed min-h-[40px] transition-opacity">
                &ldquo;{reviews[currentReview].text}&rdquo;
              </p>
              <div className="flex justify-center gap-2 mt-4">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentReview(i)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      i === currentReview ? 'w-6 bg-primary' : 'w-2 bg-gray-300'
                    }`}
                    aria-label={`Review ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { num: '5000+', label: 'Students Guided' },
                { num: '7+', label: 'Accreditations' },
                { num: '₹16L', label: 'Approx Total Cost' },
                { num: '4.5+1 Yr', label: 'Course Duration' },
              ].map((s, i) => (
                <div key={i} className="border border-border rounded-xl py-4 px-2 text-center bg-white shadow-sm">
                  <div className="text-xl md:text-2xl font-bold text-primary font-playfair">{s.num}</div>
                  <div className="text-[11px] font-bold text-text-secondary uppercase tracking-widest mt-1 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full bg-primary text-white py-4 rounded-xl text-sm font-bold uppercase tracking-wide hover:bg-navy transition-all shadow-md"
            >
              GET FREE COUNSELLING
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="p-6 md:p-8 lg:p-10 animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={handleBack}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors text-gray-500 hover:text-gray-700 flex-shrink-0"
                aria-label="Back"
              >
                <ArrowLeft size={18} />
              </button>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary font-playfair">Get Free Counselling</h2>
                <p className="text-sm text-text-secondary">Please fill your details below</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-text-primary mb-1.5 uppercase tracking-wide">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-border rounded-lg px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-text-primary mb-1.5 uppercase tracking-wide">Mobile Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-border rounded-lg px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
                  placeholder="Enter your mobile number"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-text-primary mb-1.5 uppercase tracking-wide">Select State</label>
                <select
                  name="state"
                  required
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-border rounded-lg px-4 py-3 text-sm outline-none focus:border-primary transition-colors appearance-none"
                >
                  <option value="">Select your state</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-text-primary mb-1.5 uppercase tracking-wide">Course</label>
                <input
                  type="text"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full bg-gray-100 border border-border rounded-lg px-4 py-3 text-sm outline-none text-gray-500 cursor-not-allowed"
                  readOnly
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-xl text-sm font-bold uppercase tracking-wide hover:bg-navy transition-all shadow-md mt-2"
              >
                GET FREE COUNSELLING
              </button>
            </form>

            <div className="mt-5 text-center border-t border-border pt-4">
              <p className="text-xs text-text-secondary mb-2">or connect directly</p>
              <a
                href="https://wa.me/919160404666"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary text-sm font-bold hover:underline"
              >
                <MessageSquare size={16} /> Chat with us on WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.95) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default WelcomeModal;
