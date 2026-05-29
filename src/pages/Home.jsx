import { Link } from 'react-router-dom';
import {
  ArrowRight, GraduationCap, Globe,
  HeartPulse, Award,
  ShieldCheck, Banknote,
  MessageSquare, BadgeCheck
} from 'lucide-react';
import doctorImg from '../assets/gemsbr/31.png';
import whoLogo from '../assets/gemsbr/11.png';
import faimerLogo from '../assets/gemsbr/14.png';
import iaarLogo from '../assets/gemsbr/23.png';
import nmcLogo from '../assets/gemsbr/21.png';

import heroVideo from '../assets/gemsbr/DJI_0895.mp4';
import RevealOnScroll from '../components/RevealOnScroll';
import SectionHeading from '../components/SectionHeading';
import TestimonialCarousel from '../components/TestimonialCarousel';
import FAQ from '../components/FAQ';
import SocialProofBar from '../components/SocialProofBar';
import universityImg from '../assets/gemsbr/university1.png'

const Home = () => {
  return (
    <>
      {/* <Helmet>
        <title>Gems Educare | Study MBBS Abroad — Trusted Medical Education Consultancy</title>
        <meta name="description" content="India's trusted MBBS abroad consultancy since 2010. 5000+ students guided to Adam University, Kyrgyzstan. WHO & NMC approved. ₹16 Lakhs total cost. Free counselling." />
      </Helmet> */}

      {/* SECTION 1: PREMIUM HERO */}
      <section className="relative overflow-hidden bg-navy min-h-[620px] lg:h-[720px] xl:h-[760px]">
        <video autoPlay muted loop playsInline
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='600' viewBox='0 0 1920 1080'%3E%3Crect fill='%23001B4D' width='1920' height='600'/%3E%3C/svg%3E"
          className="video-background" style={{ objectFit: 'cover', filter: 'brightness(1.05) contrast(1.1) saturate(1.05)' }}>
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-10" style={{ backgroundColor: 'rgba(0,0,0,0.45)' }} />

        <div className="relative z-20 max-w-7xl mx-auto px-5 md:px-8 lg:px-10 w-full h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start lg:items-end w-full">
            <div className="lg:col-span-7 xl:col-span-6 space-y-7 md:space-y-8 max-w-[600px]">
              <RevealOnScroll>
                <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 md:px-5 py-2">
                  <BadgeCheck size={14} className="text-accent flex-shrink-0" />
                  <span className="text-[11px] md:text-xs font-semibold text-white/90 tracking-wider uppercase">
                    WHO & NMC Approved | 15+ Years Trust
                  </span>
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={0.1}>
                <h1 className="text-[2.3rem] sm:text-[3rem] md:text-[3.7rem] lg:text-[4.1rem] xl:text-[4.5rem] font-bold text-white leading-[1.05] tracking-tight text-balance">
                  Your Global Medical{' '}
                  <span className="text-accent">Career</span>
                  {' '}Begins Here
                </h1>
              </RevealOnScroll>
              <RevealOnScroll delay={0.15}>
                <p className="text-base md:text-lg lg:text-xl text-white/60 max-w-xl leading-relaxed">
                  Trusted by 5,000+ Indian students. We guide aspiring doctors to world-class medical universities with globally recognized degrees — at a fraction of the cost.
                </p>
              </RevealOnScroll>
              <RevealOnScroll delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 mt-8 mb-9">
                  <a href="https://wa.me/919160404666"
                    className="bg-accent text-white px-8 md:px-10 py-4 md:py-5 rounded-xl text-sm font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2.5 hover:bg-white hover:text-primary transition-all duration-300 shadow-lg hover:shadow-xl">
                    <MessageSquare size={16} /> Get Free Counselling
                  </a>
                  <Link to="/fees"
                    className="border-2 border-white/20 text-white px-8 md:px-10 py-4 md:py-5 rounded-xl text-sm font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2.5 hover:bg-white/10 transition-all duration-300">
                    <Banknote size={16} /> View Fee Structure
                  </Link>
                </div>
              </RevealOnScroll>
            </div>
            <div className="lg:col-span-5 xl:col-span-6 hidden lg:block" />
          </div>
        </div>

      <div className="absolute bottom-0 right-0 z-[15] hidden lg:flex items-end pointer-events-none h-full">
        <img
          src={doctorImg}
          alt="Medical Professional"
          className="h-[95%] w-auto object-contain"
          style={{
            filter: 'drop-shadow(0 12px 30px rgba(0,0,0,0.35))'
          }}
        />
      </div>
      </section>

      {/* SECTION 2: STATISTICS STRIP */}
      <SocialProofBar />

      {/* SECTION 3: WHY STUDENTS CHOOSE GEMS EDUCARE */}
      <section className="bg-section py-20 md:py-28 px-5 md:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Why Choose Us" title="Why Students Choose Gems Educare" description="We make your dream of becoming a doctor accessible, affordable, and achievable." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {[
              { icon: <Banknote size={24} />, title: 'Affordable Fees', desc: 'Quality MBBS at just ₹16 Lakhs total — save up to ₹1 Crore vs Indian private colleges.' },
              { icon: <Award size={24} />, title: '15+ Years Trust', desc: 'Proven track record of successfully guiding 5000+ students to global medical careers.' },
              { icon: <Globe size={24} />, title: 'Global Recognition', desc: 'Degree valid worldwide. Eligible for USMLE, PLAB, NEXT, and medical councils globally.' },
              { icon: <ShieldCheck size={24} />, title: 'End-to-End Support', desc: 'From documentation to travel, we handle everything. You just focus on your studies.' },
            ].map((item, idx) => (
              <RevealOnScroll key={idx} delay={idx * 0.05}>
                <div className="bg-white rounded-2xl border border-border p-6 md:p-8 hover:shadow-lg hover:border-accent/20 transition-all duration-300 group h-full">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-accent/5 text-accent flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-300">{item.icon}</div>
                  <h3 className="text-lg font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: ADAM UNIVERSITY SNAPSHOT */}
      <section className="bg-white py-20 md:py-28 px-5 md:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <RevealOnScroll>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-sm">
                  <img src={universityImg} alt="Adam University Campus" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-white/90 backdrop-blur-sm text-primary text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm">WHO</span>
                  <span className="bg-white/90 backdrop-blur-sm text-primary text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm">NMC</span>
                  <span className="bg-white/90 backdrop-blur-sm text-primary text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm">FAIMER</span>
                </div>
              </div>
            </RevealOnScroll>
            <div className="space-y-6">
              <RevealOnScroll>
                <span className="text-accent font-bold tracking-[0.2em] text-[10px] uppercase">Adam University</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight mt-2">
                  Premier Medical Education in{' '}<span className="text-accent">Kyrgyzstan</span>
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  Adam University is a leading medical institution represented by students from 25+ countries. Ranked among the top medical colleges in Kyrgyzstan, offering a world-class MBBS program taught entirely in English.
                </p>
              </RevealOnScroll>
              <RevealOnScroll delay={0.1}>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { num: '25+', label: 'Countries' },
                    { num: '5000+', label: 'Students' },
                    { num: '15+', label: 'Accreditations' },
                    { num: 'English', label: 'Medium' },
                  ].map((s, i) => (
                    <div key={i} className="bg-section rounded-xl p-4 border border-border">
                      <div className="text-xl font-bold text-accent font-playfair">{s.num}</div>
                      <div className="text-[10px] font-semibold text-text-secondary uppercase tracking-wide mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={0.15}>
                <Link to="/university" className="inline-flex items-center gap-2.5 bg-accent text-white px-7 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wide hover:bg-primary transition-all duration-300 shadow-sm">
                  Explore University <ArrowRight size={16} />
                </Link>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FEE SNAPSHOT */}
      <section className="bg-section py-20 md:py-28 px-5 md:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Transparent Pricing" title="Fee Snapshot" description="Complete MBBS program at Adam University — ₹16 Lakhs total. No hidden charges." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {[
              { title: '1st Year Tuition', amount: '₹5.3L', sub: 'Incl. enrollment & visa' },
              { title: 'Per Semester (Yr 2-5)', amount: '₹1.7L', sub: '8 semesters' },
              { title: 'Hostel & Mess (Yr 1)', amount: '₹1L', sub: 'Mandatory first year' },
              { title: 'Documentation', amount: '₹2.25L', sub: 'One-time processing' },
            ].map((item, idx) => (
              <RevealOnScroll key={idx} delay={idx * 0.05}>
                <div className="bg-white rounded-2xl border border-border p-6 hover:shadow-md hover:border-accent/20 transition-all duration-300 group">
                  <div className="text-[10px] font-bold text-text-secondary uppercase tracking-wider mb-1">{item.title}</div>
                  <div className="text-2xl font-bold text-primary font-playfair">{item.amount}</div>
                  <p className="text-xs text-text-secondary mt-1">{item.sub}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          <RevealOnScroll>
            <div className="mt-6 bg-navy rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-white/50 text-xs font-bold uppercase tracking-wider">Total Program Cost</div>
                <div className="text-3xl md:text-4xl font-bold text-accent font-playfair mt-1">₹16 Lakhs</div>
                <p className="text-white/40 text-xs mt-1">Complete 5.5 year MBBS program</p>
              </div>
              <Link to="/fees" className="bg-white text-primary px-7 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-accent hover:text-white transition-all duration-300 flex-shrink-0">
                View Full Fees <ArrowRight size={15} />
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* SECTION 6: RECOGNITION SNAPSHOT */}
      <section className="bg-white py-20 md:py-28 px-5 md:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Global Recognition" title="Officially Recognized Worldwide" description="Adam University holds accreditations from the world's most prestigious medical bodies." />
          <RevealOnScroll>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { logo: whoLogo, name: 'World Health Organization', short: 'WHO' },
                { logo: nmcLogo, name: 'National Medical Commission', short: 'NMC India' },
                { name: 'IAAR', detail: 'Independent Agency for Accreditation and Rating', logo: iaarLogo },
                { logo: faimerLogo, name: 'FAIMER', short: 'FAIMER' },
              ].map((acc, idx) => (
                <div key={idx} className="bg-section rounded-2xl border border-border p-6 md:p-8 text-center hover:shadow-md hover:border-accent/20 transition-all duration-300 group">
                  <div className="mb-4 group-hover:scale-110 transition-transform flex items-center justify-center min-h-[60px] md:min-h-[70px] lg:min-h-[80px]">
                    {acc.logo ? (
                      <img src={acc.logo} alt={acc.short} className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px] object-contain" />
                    ) : (
                      <span className="text-accent">{acc.icon}</span>
                    )}
                  </div>
                  <div className="font-bold text-primary text-lg">{acc.short}</div>
                  <div className="text-xs text-text-secondary mt-1 leading-tight">{acc.name}</div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="mt-8 text-center">
              <Link to="/accreditations" className="inline-flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-wide hover:text-primary transition-colors group">
                View All Accreditations <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* SECTION 7: TESTIMONIALS */}
      <section className="bg-section py-20 md:py-28 px-5 md:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Student Success Stories" title="What Our Students Say" description="Hear from our alumni about their experience with Gems Educare and Adam University." />
          <TestimonialCarousel />
        </div>
      </section>

      {/* SECTION 8: ADMISSION PROCESS PREVIEW */}
      <section className="bg-white py-20 md:py-28 px-5 md:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Simple Process" title="Admission in 6 Steps" description="We handle the complexity. You focus on your dream of becoming a doctor." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {[
              { step: '01', title: 'Get Passport', desc: 'Apply with SSC marks, Aadhar & address proof' },
              { step: '02', title: 'Submit Documents', desc: '10th/12th marks, TC, NEET scorecard' },
              { step: '03', title: 'Pay Enrollment', desc: '1st semester fee secures your seat' },
              { step: '04', title: 'Visa Processing', desc: 'E-visa with full documentation support' },
              { step: '05', title: 'Book Hostel', desc: 'Separate hostels for boys & girls' },
              { step: '06', title: 'Travel & Settle', desc: 'Flight, pickup & local assistance' },
            ].map((step, idx) => (
              <RevealOnScroll key={idx} delay={idx * 0.05}>
                <div className="bg-section rounded-2xl border border-border p-5 md:p-6 hover:shadow-md hover:border-accent/20 transition-all duration-300 group h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-accent text-white flex items-center justify-center text-sm font-bold">{step.step}</div>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                  <h3 className="font-bold text-primary text-base mb-1.5">{step.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{step.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          <RevealOnScroll>
            <div className="mt-8 text-center">
              <Link to="/admission" className="btn-primary">View Full Admission Process <ArrowRight size={15} /></Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* SECTION 9: FAQ PREVIEW (Top 5) */}
      <section className="bg-section py-20 md:py-28 px-5 md:px-8 lg:px-10">
        <div className="max-w-3xl mx-auto">
          <SectionHeading subtitle="Got Questions?" title="Frequently Asked Questions" description="Find quick answers to common questions about studying MBBS abroad." />
          <RevealOnScroll>
            <FAQ />
          </RevealOnScroll>
        </div>
      </section>

      {/* SECTION 10: FINAL CTA */}
      <section className="relative py-24 md:py-36 px-5 md:px-8 lg:px-10 overflow-hidden bg-navy">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-navy to-navy" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(0, 174, 239, 0.4) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(0, 51, 153, 0.3) 0%, transparent 50%)' }} />
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-10" style={{ filter: 'brightness(0.3)' }}>
          <source src="https://cdn.pixabay.com/video/2021/04/11/70487-539787137_large.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2">
              <HeartPulse size={14} className="text-accent" />
              <span className="text-xs font-semibold text-white/90 tracking-wider uppercase">Begin Your Medical Journey</span>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-playfair leading-tight">
              Your Dream of Becoming a{' '}<span className="text-accent">Doctor</span>{' '}Starts Today
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.15}>
            <p className="text-base md:text-lg text-white/50 max-w-xl mx-auto leading-relaxed">
              Join 5,000+ successful Indian students. Get free counselling and start your MBBS journey abroad.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 pt-4">
              <a href="https://wa.me/919160404666" className="bg-accent text-white px-10 py-5 rounded-xl text-sm font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2.5 hover:bg-white hover:text-primary transition-all duration-300 shadow-lg hover:shadow-xl">
                <MessageSquare size={18} /> Get Free Counselling
              </a>
              <Link to="/contact" className="border-2 border-white/20 text-white px-10 py-5 rounded-xl text-sm font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2.5 hover:bg-white/10 transition-all duration-300">
                Schedule a Meeting
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
};

export default Home;
