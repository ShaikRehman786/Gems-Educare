import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Award, Globe, CheckCircle } from 'lucide-react';

const Accreditations = () => {
  return (
    <>
      <Helmet>
        <title>Global Accreditations | Adam University | Gems Educare</title>
        <meta name="description" content="Adam University is recognized by WHO, NMC India, ECFMG, and FAIMER. A globally valid MBBS degree." />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary py-20 px-4 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-black mb-6">Global Accreditations</h1>
        <p className="text-xl font-bold uppercase tracking-widest text-white/80">Your Degree is Valid Worldwide</p>
      </section>

      {/* Recognition List */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-primary">Worldwide Recognition</h2>
              <p className="text-lg leading-relaxed text-text-secondary">
                A degree from Adam University opens doors across the globe. Our medical programs are strictly aligned with international medical education standards, allowing our graduates to practice medicine in India, the USA, the UK, Europe, and beyond.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary" size={24} />
                  <span className="font-bold text-lg text-text-primary">Eligible for NEXT / FMGE (India)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary" size={24} />
                  <span className="font-bold text-lg text-text-primary">Eligible for USMLE (USA)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary" size={24} />
                  <span className="font-bold text-lg text-text-primary">Eligible for PLAB (UK)</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "World Health Organization (WHO)",
                "National Medical Commission (NMC India)",
                "ECFMG (USA)",
                "FAIMER",
                "Ministry of Health (Kyrgyzstan)",
                "Pakistan Medical Council",
                "Bangladesh Medical Council",
                "Nepal Medical Council",
                "IAAR"
              ].map((body, idx) => (
                <div key={idx} className="bg-primary/5 p-6 rounded-2xl border-l-4 border-primary flex flex-col justify-center shadow-sm hover:-translate-y-1 transition-transform">
                  <Award className="text-primary mb-3" size={32} />
                  <span className="font-bold text-text-primary">{body}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Accreditations;
