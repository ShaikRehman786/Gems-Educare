import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Sun, MapPin, ShieldCheck, Thermometer, Globe, Info, CheckCircle, TreePine } from 'lucide-react';

const Kyrgyzstan = () => {
  return (
    <>
      <Helmet>
        <title>Study MBBS in Kyrgyzstan | Bishkek Guide | Gems Educare</title>
        <meta name="description" content="Explore Kyrgyzstan as a destination for medical education. Learn about Bishkek, capital city, safety, and life for Indian students." />
      </Helmet>

      {/* Hero */}
      <section className="bg-section py-24 px-4 text-center border-b border-border">
        <p className="text-primary font-bold tracking-[0.15em] text-[10px] uppercase mb-4">A Land of Opportunity</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary font-playfair mb-6">Kyrgyzstan</h1>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">Safe, affordable, and student-friendly environment for medical aspirants.</p>
      </section>

      {/* Bishkek Intro */}
      <section className="py-24 px-4 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 aspect-[4/3] bg-section rounded-2xl flex items-center justify-center border border-border">
             <div className="text-text-secondary font-playfair italic text-2xl">[ Bishkek City View ]</div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <p className="text-primary font-bold tracking-[0.15em] text-[10px] uppercase">Capital City</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-playfair leading-tight">
              Bishkek — The Heart of <span className="italic font-normal text-primary">Kyrgyzstan</span>
            </h2>
            <p className="text-sm leading-relaxed text-text-secondary">
              Bishkek is the capital and largest city of Kyrgyzstan, located in the Chuy region. Situated along the Chu River valley, Bishkek is known for its numerous green spaces, parks, and gardens alongside Soviet-era buildings and monuments.
            </p>
            <p className="text-sm leading-relaxed text-text-secondary">
              The city serves as the political, economic, and cultural center of Kyrgyzstan — offering a safe, affordable, and student-friendly environment for international medical students.
            </p>
            <blockquote className="border-l-2 border-primary pl-6 py-2 text-text-primary font-playfair italic text-lg">
              "Bishkek offers a perfect blend of high-quality education and an affordable lifestyle for Indian students."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="bg-section py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-bold tracking-[0.15em] text-[10px] uppercase mb-4">Student Life</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-playfair">Why Bishkek for Medical Studies?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Safe Environment',
                desc: 'Extremely safe for international students. Bishkek is a peaceful city with a low crime rate — ideal for Indian students studying away from home.',
                icon: <ShieldCheck className="text-primary" size={24} />
              },
              {
                title: 'Affordable Living',
                desc: 'Very affordable. Students can live comfortably on a low budget compared to other European or Asian cities. Total living cost approx. ₹15–20K/month.',
                icon: <Sun className="text-primary" size={24} />
              },
              {
                title: 'Modern Infrastructure',
                desc: 'Equipped with modern transportation, hospitals, and educational facilities. The city offers a high quality of life at a fraction of the cost.',
                icon: <Globe className="text-primary" size={24} />
              },
              {
                title: 'Green Spaces & Parks',
                desc: 'Bishkek is one of the greenest cities in Central Asia with numerous parks, boulevards, and gardens — making it a pleasant place to live and study.',
                icon: <TreePine className="text-primary" size={24} />
              }
            ].map((card, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-6 bg-section inline-block p-3 rounded-lg">{card.icon}</div>
                <h3 className="text-sm font-bold text-primary mb-3">{card.title}</h3>
                <p className="text-text-secondary text-xs leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facts Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-playfair">Essential Information</h2>
            <p className="text-sm leading-relaxed text-text-secondary">
              Kyrgyzstan is a student-friendly nation that welcomes thousands of international aspirants every year. With its modern infrastructure and safe environment, it provides the perfect backdrop for your medical journey.
            </p>
            <div className="space-y-4 pt-4 border-t border-border">
              {['E-visa available for Kyrgyzstan', 'Direct flights from major Indian cities', 'Affordable local transport', 'Indian community & cultural familiarity'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm font-medium text-text-primary">
                  <CheckCircle size={16} className="text-primary/60 flex-shrink-0" />{item}
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
             {[
                { icon: <MapPin size={20} />, label: 'Capital', value: 'Bishkek' },
                { icon: <Thermometer size={20} />, label: 'Climate', value: 'Continental' },
                { icon: <Info size={20} />, label: 'Cost of Living', value: 'Low & Affordable' },
                { icon: <Globe size={20} />, label: 'Travel', value: 'Direct Connectivity' },
                { icon: <ShieldCheck size={20} />, label: 'Safety', value: 'Very Safe' },
                { icon: <Cloud size={20} />, label: 'Green Spaces', value: 'Abundant Parks' },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-section p-6 rounded-xl border border-border">
                  <div className="text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-sm">{item.label}</h4>
                    <p className="text-xs text-text-secondary mt-1">{item.value}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-playfair italic">Discover Your Future in Kyrgyzstan</h2>
          <p className="text-text-secondary">Safe. Affordable. World-class education.</p>
          <a
            href="https://wa.me/919160404666?text=I%20want%20to%20know%20more%20about%20life%20in%20Bishkek"
            className="inline-block bg-primary text-white rounded-xl px-8 py-4 rounded text-sm font-bold uppercase tracking-wide hover:bg-navy transition-all transition-colors"
          >
            Connect with Experts
          </a>
        </div>
      </section>
    </>
  );
};

export default Kyrgyzstan;
