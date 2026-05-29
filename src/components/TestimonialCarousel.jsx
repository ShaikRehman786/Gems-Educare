import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Dr. Rahul Sharma',
    location: 'Hyderabad',
    text: 'Choosing Gems Educare was the best decision for my medical career. From documentation to hostel arrangements, everything was handled professionally. The clinical exposure at Adam University is world-class.',
    rating: 5,
    image: null
  },
  {
    name: 'Dr. Sneha Reddy',
    location: 'Vijayawada',
    text: 'I was nervous about studying abroad, but the team at Gems Educare made the transition seamless. The Indian mess facility and separate girls hostel made me feel at home instantly.',
    rating: 5,
    image: null
  },
  {
    name: 'Dr. Arjun Varma',
    location: 'Guntur',
    text: 'The English medium curriculum and supportive faculty made learning easy. Adam University provides excellent infrastructure including the Anatomage table and simulation center.',
    rating: 5,
    image: null
  },
  {
    name: 'Dr. Priya Singh',
    location: 'Lucknow',
    text: 'Gems Educare guided me through the entire admission process. The visa assistance and travel arrangements were flawless. Highly recommended for MBBS abroad.',
    rating: 5,
    image: null
  },
  {
    name: 'Dr. Venkat Rao',
    location: 'Kurnool',
    text: 'Affordable fees with no hidden charges. The transparent process and genuine counselling support made all the difference. Proud to be an Adam University graduate.',
    rating: 5,
    image: null
  },
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
    setTouchStart(null);
  };

  const t = testimonials[current];

  return (
    <div
      className="relative max-w-3xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="bg-white rounded-2xl border border-border p-8 md:p-12 shadow-sm relative">
        <Quote className="absolute top-6 right-6 text-accent/10" size={60} />
        <div className="flex items-center gap-1 mb-6">
          {[...Array(t.rating)].map((_, i) => (
            <Star key={i} size={18} className="text-accent" fill="currentColor" />
          ))}
        </div>
        <p className="text-text-secondary text-lg leading-relaxed mb-8 italic relative z-10">
          &ldquo;{t.text}&rdquo;
        </p>
        <div className="flex items-center gap-4 border-t border-border pt-6">
          <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-xl">
            {t.name.split(' ').pop()[0]}
          </div>
          <div>
            <div className="font-bold text-primary">{t.name}</div>
            <div className="text-sm text-text-secondary">{t.location}</div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? 'w-8 bg-primary' : 'w-2 bg-gray-200'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
