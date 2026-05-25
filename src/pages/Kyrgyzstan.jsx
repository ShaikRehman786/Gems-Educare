import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Sun, MapPin, ShieldCheck, Thermometer, Globe, Info } from 'lucide-react';

const Kyrgyzstan = () => {
  return (
    <>
      <Helmet>
        <title>Study MBBS in Kyrgyzstan | Bishkek Guide | Gems Educare</title>
        <meta name="description" content="Explore Kyrgyzstan as a destination for medical education. Learn about Bishkek, climate, safety, and life for Indian students." />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary py-20 px-4 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-black mb-6">Kyrgyzstan</h1>
        <p className="text-xl text-primary font-bold uppercase tracking-widest">Safe, Affordable & Student Friendly</p>
      </section>

      {/* Intro */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-bold text-primary">Bishkek City</h2>
            <p className="text-lg leading-relaxed text-text-secondary">
              Bishkek, the capital of Kyrgyzstan, is the center of medical education and culture. It is a vibrant city known for its safety, green spaces, and modern infrastructure, making it an ideal destination for international medical students.
            </p>
            <div className="bg-white p-6 rounded-2xl border-l-8 border-primary shadow-xl border border-border">
              <p className="font-bold text-primary italic">"Bishkek offers a perfect blend of high-quality education and an affordable lifestyle for Indian students."</p>
            </div>
          </div>
          <div className="flex-1">
            <img src={bishkekCity} alt="Bishkek View" className="rounded-3xl shadow-2xl border-8 border-white" />
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: 'Safe Environment',
              desc: 'Extremely safe for international students. Bishkek is a peaceful city with a low crime rate.',
              icon: <ShieldCheck className="text-primary" size={32} />
            },
            {
              title: 'Affordable Living',
              desc: 'Very affordable. Students can live comfortably on a low budget compared to other European cities.',
              icon: <Sun className="text-primary" size={32} />
            },
            {
              title: 'Modern Infrastructure',
              desc: 'Equipped with modern transportation, hospitals, and educational facilities.',
              icon: <Globe className="text-primary" size={32} />
            },
            {
              title: 'Green Spaces',
              desc: 'Bishkek is one of the greenest cities in Central Asia with numerous parks and boulevards.',
              icon: <Cloud className="text-primary" size={32} />
            }
          ].map((card, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border-l-4 border-primary shadow-lg hover:shadow-xl transition-shadow border border-border">
              <div className="mb-6">{card.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-4">{card.title}</h3>
              <p className="text-text-secondary">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Facts Section */}
      <section className="py-20 px-4 bg-white overflow-hidden relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary">Essential Information</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="w-full h-[400px] bg-primary/5 rounded-[3rem] border-8 border-white shadow-2xl overflow-hidden font-black text-primary/10 italic flex items-center justify-center text-4xl">
              Travel & Maps
            </div>
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white"><MapPin size={24} /></div>
                  <div>
                    <h4 className="font-bold text-primary">Capital</h4>
                    <p className="text-sm text-text-secondary">Bishkek</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white"><Thermometer size={24} /></div>
                  <div>
                    <h4 className="font-bold text-primary">Climate</h4>
                    <p className="text-sm text-text-secondary">Continental</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white"><Info size={24} /></div>
                  <div>
                    <h4 className="font-bold text-primary">Cost of Living</h4>
                    <p className="text-sm text-text-secondary">Low & Affordable</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white"><Globe size={24} /></div>
                  <div>
                    <h4 className="font-bold text-primary">Travel</h4>
                    <p className="text-sm text-text-secondary">Direct Connectivity</p>
                  </div>
                </div>
              </div>
              <p className="text-lg leading-relaxed text-text-secondary">
                Kyrgyzstan is a student-friendly nation that welcomes thousands of international aspirants every year. With its modern infrastructure and safe environment, it provides the perfect backdrop for your medical journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-20 px-4 text-white text-center shadow-2xl border-t-8 border-primary">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold">Discover Your Future in Kyrgyzstan</h2>
          <p className="text-xl opacity-80 italic">"Safe. Affordable. World-class education."</p>
          <a
            href="https://wa.me/919160404666?text=I%20want%20to%20know%20more%20about%20life%20in%20Bishkek"
            className="bg-primary text-white px-12 py-4 rounded-md font-bold text-xl hover:scale-105 transition-transform inline-block shadow-lg"
          >
            Connect with Experts
          </a>
        </div>
      </section>
    </>
  );
};

export default Kyrgyzstan;
