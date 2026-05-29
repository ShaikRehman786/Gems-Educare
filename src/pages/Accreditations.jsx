import { Helmet } from 'react-helmet-async';
import { Award, Globe } from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll';
import SectionHeading from '../components/SectionHeading';
import whoLogo from '../assets/gemsbr/11.png';
import faimerLogo from '../assets/gemsbr/14.png';
import ministryLogo from '../assets/gemsbr/15.png';
import pmdcLogo from '../assets/gemsbr/19.png';
import bmdcLogo from '../assets/gemsbr/20.png';
import nepalLogo from '../assets/gemsbr/21.png';
import iaarLogo from '../assets/gemsbr/23.png';

const accreditations = [
  { name: 'World Health Organization (WHO)', detail: 'Global Health Authority Recognition', logo: whoLogo },
  { name: 'FAIMER', detail: 'Foundation for Advancement of International Medical Education', logo: faimerLogo },
  { name: 'Ministry of Health, Kyrgyz Republic', detail: 'National Regulatory Authority', logo: ministryLogo },
  { name: 'Pakistan Medical & Dental Council', detail: 'PMDC Recognition', logo: pmdcLogo },
  { name: 'Bangladesh Medical & Dental Council', detail: 'BMDC Recognition', logo: bmdcLogo },
  { name: 'Nepal Medical Council', detail: 'NMC Nepal Recognition', logo: nepalLogo },
  { name: 'IAAR', detail: 'Independent Agency for Accreditation and Rating', logo: iaarLogo },
];

const Accreditations = () => {
  return (
    <>
      <Helmet>
        <title>Global Accreditations | Adam University | WHO & NMC Approved | Gems Educare</title>
        <meta name="description" content="Adam University is recognized by WHO, NMC India, ECFMG, FAIMER and 15+ international medical councils. Your MBBS degree is valid worldwide." />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-navy py-24 md:py-32 px-5 md:px-8 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-primary/80 to-navy" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <RevealOnScroll>
            <span className="text-accent font-bold tracking-[0.2em] text-[10px] uppercase mb-4 inline-block">Globally Recognized</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-playfair mb-6 leading-tight text-balance">
              International{' '}
              <span className="text-accent">Accreditations</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Adam University holds recognition from the world's most prestigious medical bodies. Your degree is valid worldwide.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-20 md:py-28 px-5 md:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6 md:space-y-8 lg:sticky lg:top-32">
              <RevealOnScroll>
                <span className="text-accent font-bold tracking-[0.2em] text-[10px] uppercase">Worldwide Recognition</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                  Practice Medicine{' '}
                  <span className="text-accent">Anywhere</span> in the World
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  A degree from Adam University opens doors across the globe. Our medical programs are strictly aligned with international medical education standards, allowing our graduates to practice medicine in India, the USA, the UK, Europe, and beyond.
                </p>
              </RevealOnScroll>
              <RevealOnScroll delay={0.1}>
                <div className="bg-section rounded-2xl border border-border p-6">
                  <h3 className="font-bold text-primary text-sm uppercase tracking-wide mb-4">Exam Eligibility</h3>
                  <div className="space-y-3">
                    {[
                      { label: 'NEXT / FMGE (India)', val: 'Eligible' },
                      { label: 'USMLE (USA)', val: 'Eligible' },
                      { label: 'PLAB (UK)', val: 'Eligible' },
                      { label: 'Australia & Canada', val: 'Eligible' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between border-b border-gray-100 last:border-0 pb-3 last:pb-0">
                        <span className="text-sm text-text-secondary">{item.label}</span>
                        <span className="text-sm font-bold text-accent">{item.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            <div className="lg:col-span-7">
              <RevealOnScroll>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {accreditations.map((body, idx) => (
                    <div key={idx} className="bg-section rounded-2xl border border-border p-6 hover:shadow-md hover:border-accent/20 transition-all duration-300 group h-full">
                      {body.logo ? (
                        <div className="w-20 h-20 flex items-center justify-center mb-4">
                          <img src={body.logo} alt={body.name} className="w-full h-full object-contain" />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-xl bg-accent/5 text-accent flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                          {body.icon}
                        </div>
                      )}
                      <h3 className="font-bold text-primary text-sm mb-1">{body.name}</h3>
                      <p className="text-xs text-text-secondary leading-relaxed">{body.detail}</p>
                    </div>
                  ))}
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="bg-section py-20 md:py-28 px-5 md:px-8 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            subtitle="Your Future"
            title="Career Opportunities Worldwide"
            description="An MBBS degree from Adam University opens doors to medical careers across the globe."
          />
          <RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {[
                { flag: '🇮🇳', country: 'India', exam: 'NEXT / FMGE' },
                { flag: '🇺🇸', country: 'United States', exam: 'USMLE' },
                { flag: '🇬🇧', country: 'United Kingdom', exam: 'PLAB' },
                { flag: '🇪🇺', country: 'Europe', exam: 'AMC / MCCQE' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-border p-6 text-center hover:shadow-md hover:border-accent/20 transition-all duration-300">
                  <div className="text-3xl mb-3">{item.flag}</div>
                  <h4 className="font-bold text-primary text-sm">{item.country}</h4>
                  <p className="text-xs text-text-secondary mt-1">{item.exam}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 md:py-28 px-5 md:px-8 lg:px-10 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <SectionHeading
            subtitle="Your Degree Awaits"
            title="Globally Valid MBBS Degree"
            description="Join 5000+ students who trusted Gems Educare to guide them to a world-class medical education."
            light
            center
          />
          <RevealOnScroll>
            <a
              href="https://wa.me/919160404666"
              className="bg-accent text-white px-10 py-5 rounded-xl text-sm font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 hover:bg-white hover:text-primary transition-all duration-300 shadow-lg"
            >
              Get Free Counselling
            </a>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
};

export default Accreditations;
