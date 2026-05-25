import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Award, Globe, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Accreditations = () => {
  return (
    <>
      <Helmet>
        <title>Global Accreditations | Adam University | Gems Educare</title>
        <meta name="description" content="Adam University is recognized by WHO, NMC India, ECFMG, FAIMER and 15+ international medical councils. A globally valid MBBS degree." />
      </Helmet>

      {/* Hero */}
      <section className="bg-section py-24 px-4 text-center border-b border-border">
        <p className="text-primary font-bold tracking-[0.15em] text-[10px] uppercase mb-4">Your Degree is Valid Worldwide</p>
        <h1 className="text-4xl md:text-5xl font-bold text-primary font-playfair mb-6">International Accreditations</h1>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">Adam University holds recognition from the world's most prestigious medical bodies.</p>
      </section>

      {/* Recognition List */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-8 sticky top-32">
              <p className="text-primary font-bold tracking-[0.15em] text-[10px] uppercase">Globally Recognized</p>
              <h2 className="text-3xl font-bold text-primary font-playfair">Practice Medicine Anywhere in the World</h2>
              <p className="text-sm leading-relaxed text-text-secondary">
                A degree from Adam University opens doors across the globe. Our medical programs are strictly aligned with international medical education standards, allowing our graduates to practice medicine in India, the USA, the UK, Europe, and beyond.
              </p>
              <div className="space-y-4 pt-4 border-t border-border">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary/60" size={20} />
                  <span className="font-semibold text-sm text-text-primary">Eligible for NEXT / FMGE (India)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary/60" size={20} />
                  <span className="font-semibold text-sm text-text-primary">Eligible for USMLE (USA)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary/60" size={20} />
                  <span className="font-semibold text-sm text-text-primary">Eligible for PLAB (UK)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary/60" size={20} />
                  <span className="font-semibold text-sm text-text-primary">Practice in Europe, Australia & Canada</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { name: "World Health Organization (WHO)", detail: "Global Health Authority" },
                { name: "FAIMER", detail: "Foundation for Advancement of International Medical Education" },
                { name: "Ministry of Health, Kyrgyz Republic", detail: "National Regulatory Authority" },
                { name: "Pakistan Medical & Dental Council", detail: "PMDC Recognition" },
                { name: "Bangladesh Medical & Dental Council", detail: "BMDC Recognition" },
                { name: "Nepal Medical Council", detail: "NMC Nepal Recognition" },
                { name: "IAAR", detail: "Independent Agency for Accreditation and Rating" },
                { name: "ECFMG (USA)", detail: "Educational Commission for Foreign Medical Graduates" },
                { name: "NMC India", detail: "National Medical Commission — India" },
              ].map((body, idx) => (
                <div key={idx} className="bg-white p-8 rounded-xl border border-border hover:border-primary/30 transition-colors flex flex-col gap-3">
                  <Award className="text-primary" size={24} />
                  <div>
                    <h3 className="font-bold text-primary text-sm mb-1">{body.name}</h3>
                    <p className="text-xs text-text-secondary">{body.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-playfair italic">Your Globally Valid Degree Awaits</h2>
          <p className="text-text-secondary">Join 5000+ students who trusted Gems Educare to guide them to Adam University.</p>
          <a
            href="https://wa.me/919160404666"
            className="inline-block bg-primary text-white rounded-xl px-8 py-4 rounded text-sm font-bold uppercase tracking-wide hover:bg-navy transition-all transition-colors"
          >
            Get Free Counselling
          </a>
        </div>
      </section>
    </>
  );
};

export default Accreditations;
