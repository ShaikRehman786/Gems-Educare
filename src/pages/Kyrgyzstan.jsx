import { Helmet } from 'react-helmet-async';
import { Sun, MapPin, ShieldCheck, Thermometer, Globe, Info, CheckCircle, TreePine, GraduationCap, Plane, Users } from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll';
import SectionHeading from '../components/SectionHeading';

const Kyrgyzstan = () => {
  return (
    <>
      <Helmet>
        <title>Study MBBS in Kyrgyzstan | Bishkek Guide | Safe & Affordable | Gems Educare</title>
        <meta name="description" content="Explore Kyrgyzstan for MBBS. Safe, affordable, and student-friendly destination. Learn about Bishkek, living costs, and student life for Indian students." />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-navy py-24 md:py-32 px-5 md:px-8 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-primary/80 to-navy" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <RevealOnScroll>
            <span className="text-accent font-bold tracking-[0.2em] text-[10px] uppercase mb-4 inline-block">Discover Your Destination</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-playfair mb-6 leading-tight text-balance">
              Study MBBS in{' '}
              <span className="text-accent">Kyrgyzstan</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Safe, affordable, and student-friendly — the perfect destination for Indian medical aspirants.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Bishkek Intro */}
      <section className="bg-white py-20 md:py-28 px-5 md:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <RevealOnScroll>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=900&q=80"
                  alt="Bishkek City View"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent rounded-2xl p-4 shadow-xl hidden md:block">
                <GraduationCap size={28} className="text-white" />
              </div>
            </div>
          </RevealOnScroll>
          <div className="space-y-6">
            <RevealOnScroll>
              <span className="text-accent font-bold tracking-[0.2em] text-[10px] uppercase">Capital City</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight mt-2">
                Bishkek — The Heart of{' '}
                <span className="text-accent">Kyrgyzstan</span>
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Bishkek is the capital and largest city of Kyrgyzstan, located in the Chuy region along the Chu River valley. Known for its green spaces, parks, and gardens alongside modern infrastructure, Bishkek serves as the political, economic, and cultural center of Kyrgyzstan.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <blockquote className="border-l-2 border-accent pl-5 py-3 text-text-primary font-playfair italic text-base md:text-lg bg-section rounded-r-xl">
                &ldquo;Bishkek offers a perfect blend of high-quality education and an affordable lifestyle for Indian students.&rdquo;
              </blockquote>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Why Bishkek */}
      <section className="bg-section py-20 md:py-28 px-5 md:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="Student Life"
            title="Why Bishkek for Medical Studies?"
            description="Everything you need to know about studying and living in Bishkek, Kyrgyzstan."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {[
              { icon: <ShieldCheck size={26} />, title: 'Safe Environment', desc: 'Extremely safe for international students. Low crime rate and peaceful city — ideal for Indian students studying abroad.' },
              { icon: <Sun size={26} />, title: 'Affordable Living', desc: 'Comfortable living at approx. ₹15–20K/month. Very affordable compared to other international study destinations.' },
              { icon: <Globe size={26} />, title: 'Modern Infrastructure', desc: 'Modern transportation, hospitals, and educational facilities at a fraction of Western costs.' },
              { icon: <TreePine size={26} />, title: 'Green City', desc: 'One of the greenest cities in Central Asia with parks, boulevards, and gardens throughout.' },
            ].map((card, idx) => (
              <RevealOnScroll key={idx} delay={idx * 0.05}>
                <div className="bg-white rounded-2xl border border-border p-6 md:p-8 hover:shadow-md hover:border-accent/20 transition-all duration-300 h-full group">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-accent/5 text-accent flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3">{card.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{card.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="bg-white py-20 md:py-28 px-5 md:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <RevealOnScroll>
                <span className="text-accent font-bold tracking-[0.2em] text-[10px] uppercase">Essential Info</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                  Everything You{' '}
                  <span className="text-accent">Need to Know</span>
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  Kyrgyzstan welcomes thousands of international medical aspirants every year. With modern infrastructure and a safe environment, it provides the perfect backdrop for your medical journey.
                </p>
              </RevealOnScroll>
              <RevealOnScroll delay={0.1}>
                <div className="space-y-3">
                  {[
                    'E-visa available for Indian students',
                    'Direct flights from major Indian cities',
                    'Affordable local transport system',
                    'Growing Indian community & cultural familiarity',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-medium text-text-primary">
                      <CheckCircle size={18} className="text-accent flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </RevealOnScroll>
            </div>
            <div className="lg:col-span-7">
              <RevealOnScroll>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {[
                    { icon: <MapPin size={18} />, label: 'Capital', value: 'Bishkek' },
                    { icon: <Thermometer size={18} />, label: 'Climate', value: 'Continental' },
                    { icon: <Info size={18} />, label: 'Cost of Living', value: 'Low & Affordable' },
                    { icon: <Plane size={18} />, label: 'Travel', value: 'Direct Connectivity' },
                    { icon: <ShieldCheck size={18} />, label: 'Safety', value: 'Very Safe' },
                    { icon: <Users size={18} />, label: 'Student Community', value: 'Growing Indian Community' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 md:gap-4 bg-section p-4 md:p-5 rounded-xl border border-border hover:border-accent/20 transition-all duration-300 group">
                      <div className="text-accent group-hover:scale-110 transition-transform flex-shrink-0">{item.icon}</div>
                      <div className="min-w-0">
                        <h4 className="font-bold text-primary text-sm">{item.label}</h4>
                        <p className="text-xs text-text-secondary mt-0.5 truncate">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 md:py-28 px-5 md:px-8 lg:px-10 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <SectionHeading
            subtitle="Start Your Journey"
            title="Discover Your Future in Kyrgyzstan"
            description="Safe. Affordable. World-class education. Take the first step towards your global medical career."
            light
            center
          />
          <RevealOnScroll>
            <a
              href="https://wa.me/919160404666?text=I%20want%20to%20know%20more%20about%20life%20in%20Bishkek"
              className="bg-accent text-white px-10 py-5 rounded-xl text-sm font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 hover:bg-white hover:text-primary transition-all duration-300 shadow-lg"
            >
              Connect with Experts
            </a>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
};

export default Kyrgyzstan;
