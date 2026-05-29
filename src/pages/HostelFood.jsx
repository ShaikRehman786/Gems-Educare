import { Helmet } from 'react-helmet-async';
import { CheckCircle, Wifi, ShieldCheck, Bus, Hotel, UtensilsCrossed, Building2, Sun, Moon } from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll';
import SectionHeading from '../components/SectionHeading';
import hostelImg1 from '../assets/gemsbr/28.png';
import hostelImg2 from '../assets/gemsbr/29.png';
import hostelImg3 from '../assets/gemsbr/30.png';


const HostelFood = () => {
  return (
    <>
      <Helmet>
        <title>Hostel & Food Facilities | Adam University | Gems Educare</title>
        <meta name="description" content="Discover secure hostel accommodation and authentic Indian food at Adam University, Kyrgyzstan. Separate boys & girls hostels with 24/7 security." />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-navy py-24 md:py-32 px-5 md:px-8 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-primary/80 to-navy" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <RevealOnScroll>
            <span className="text-accent font-bold tracking-[0.2em] text-[10px] uppercase mb-4 inline-block">Your Home Away From Home</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-playfair mb-6 leading-tight text-balance">
              Hostel &{' '}
              <span className="text-accent">Food</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Premium accommodation and authentic Indian cuisine designed for international medical students.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Accommodation Gallery */}
      <section className="bg-white py-20 md:py-28 px-5 md:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="Premium Accommodation"
            title="A Safe & Comfortable Home"
            description="Our partner hostels are specifically designed for international medical students."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-12">
            {[
              { src: hostelImg1, label: 'Modern Student Hostel' },
              { src: hostelImg2, label: 'Shared Dormitory Rooms' },
              { src: hostelImg3, label: 'Furnished Student Rooms' },
            ].map((img, idx) => (
              <RevealOnScroll key={idx} delay={idx * 0.05}>
                <div className="group relative rounded-2xl overflow-hidden border border-border">
                  <div className="aspect-[4/3]">
                    <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent flex items-end p-5">
                    <span className="text-white font-semibold text-sm">{img.label}</span>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Separate Boys & Girls Hostels',
                '24/7 Security & CCTV Surveillance',
                'Indian Warden Available',
                'High-Speed WiFi Throughout',
                'Power Backup',
                'Laundry & Housekeeping Services',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-section rounded-xl p-4 border border-border">
                  <CheckCircle size={18} className="text-accent flex-shrink-0" />
                  <span className="font-medium text-text-primary text-sm">{item}</span>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Food Facilities */}
      <section className="bg-section py-20 md:py-28 px-5 md:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="Authentic Indian Cuisine"
            title="Indian Mess Facility"
            description="Fresh, hygienic, and authentic Indian meals prepared by experienced Indian chefs."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {[
              { icon: <UtensilsCrossed size={32} />, title: 'Indian Chefs', desc: 'Experienced Indian chefs preparing fresh, hygienic, and authentic meals daily for students.' },
              { icon: <Sun size={32} />, title: 'North & South Indian', desc: 'Dedicated menus for both North Indian and South Indian cuisines to suit every palate.' },
              { icon: <ShieldCheck size={32} />, title: 'Veg & Non-Veg Options', desc: 'Separate preparation areas for vegetarian and non-vegetarian food ensuring strict hygiene.' },
            ].map((item, idx) => (
              <RevealOnScroll key={idx} delay={idx * 0.1}>
                <div className="bg-white rounded-2xl border border-border p-8 md:p-10 text-center hover:shadow-md hover:border-accent/20 transition-all duration-300 group h-full">
                  <div className="w-16 h-16 rounded-2xl bg-accent/5 text-accent flex items-center justify-center mx-auto mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="bg-white py-20 md:py-28 px-5 md:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="Everything Included"
            title="Hostel Amenities"
            description="All the amenities you need for a comfortable and productive stay."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { icon: <Wifi size={20} />, label: 'High-Speed WiFi' },
              { icon: <ShieldCheck size={20} />, label: '24/7 Security' },
              { icon: <Bus size={20} />, label: 'Transport Shuttle' },
              { icon: <Hotel size={20} />, label: 'Comfortable Rooms' },
              { icon: <UtensilsCrossed size={20} />, label: 'Indian Mess' },
              { icon: <Sun size={20} />, label: 'Power Backup' },
              { icon: <Moon size={20} />, label: 'Quiet Study Areas' },
              { icon: <Building2 size={20} />, label: 'Common Room' },
            ].map((item, idx) => (
              <RevealOnScroll key={idx} delay={idx * 0.03}>
                <div className="bg-section rounded-xl border border-border p-5 md:p-6 flex flex-col items-center text-center gap-3 hover:border-accent/20 hover:shadow-sm transition-all duration-300 group">
                  <div className="text-accent group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <span className="font-semibold text-text-primary text-xs uppercase tracking-wide">{item.label}</span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="bg-section py-20 md:py-28 px-5 md:px-8 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <RevealOnScroll>
            <div className="bg-white rounded-2xl border border-border p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck size={28} className="text-accent" />
                <h2 className="text-2xl md:text-3xl font-bold text-primary font-playfair">Safety & Security</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  '24/7 Security Personnel',
                  'CCTV Surveillance',
                  'Controlled Building Access',
                  'Emergency Response System',
                  'Fire Safety Equipment',
                  'Supervised by Indian Wardens',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-accent flex-shrink-0" />
                    <span className="text-text-primary text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 md:py-28 px-5 md:px-8 lg:px-10 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <SectionHeading
            subtitle="Book Your Stay"
            title="Secure Your Accommodation"
            description="Reserve your hostel room today. Limited seats available for the upcoming academic year."
            light
            center
          />
          <RevealOnScroll>
            <a
              href="https://wa.me/919160404666"
              className="bg-accent text-white px-10 py-5 rounded-xl text-sm font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 hover:bg-white hover:text-primary transition-all duration-300 shadow-lg"
            >
              Book Hostel Room
            </a>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
};

export default HostelFood;
