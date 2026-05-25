import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight,
  ShieldCheck,
  Globe,
  Quote,
  Building2,
  Library,
  Users2,
  HeartPulse,
  Scale,
  Zap,
  BookOpen,
  MapPin,
  Utensils,
  Wifi,
  Star
} from 'lucide-react';
import FadeInUp from '../components/FadeInUp';
import gemsLogo from '../assets/gems/logo.png';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>MBBS in Kyrgyzstan for Indian Students | Gems Educare</title>
        <meta name="description" content="Study MBBS at Adam University, Kyrgyzstan with Gems Educare. Lowest fee structure, NMC approved, WHO accredited. Join 5000+ successful students." />
      </Helmet>

      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[85vh] flex items-center bg-white overflow-hidden py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <FadeInUp>
            <div className="space-y-8">
              <span className="inline-block text-primary font-bold tracking-[0.15em] text-[10px] uppercase">
                WHO • ECFMG • NMC INDIA • 15+ INT'L COUNCILS
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-gray-900 leading-[1.1]">
                Study <span className="text-primary italic font-normal">MBBS/MD</span> <br />Program Abroad.
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">
                Join a leading international medical university. Get a globally recognized degree with world-class clinical exposure at an affordable cost.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://wa.me/919160404666"
                  className="bg-primary text-white px-8 py-4 rounded text-sm font-bold uppercase tracking-wide flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors"
                >
                  Get Free Counselling <ArrowRight size={16} />
                </a>
                <Link
                  to="/fees"
                  className="border border-gray-200 text-gray-800 px-8 py-4 rounded text-sm font-bold uppercase tracking-wide flex items-center justify-center hover:border-gray-900 hover:text-gray-900 transition-colors"
                >
                  View Fee Structure
                </Link>
              </div>

              <div className="flex items-center gap-6 pt-8 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" />
                    ))}
                  </div>
                  <div className="text-xs font-semibold text-gray-600">
                    <span className="text-gray-900 font-bold block text-sm">5000+</span> Students Enrolled
                  </div>
                </div>
                <div className="h-10 w-px bg-gray-200"></div>
                <div className="text-xs font-semibold text-gray-600">
                  <span className="text-gray-900 font-bold block text-sm">4.9/5</span> Google Rating
                </div>
              </div>
            </div>
          </FadeInUp>
          <div className="relative hidden lg:block">
            <FadeInUp delay={0.2}>
              <div className="aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden relative">
                {/* Placeholder for Hero Image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-playfair italic text-2xl">
                  [ Hero Image ]
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* SECTION 2 — STATS BAR */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-gray-200">
            {[
              { num: '5000+', label: 'Students Enrolled' },
              { num: '4.5+1 Yr', label: 'Course Duration' },
              { num: '7+', label: 'Accreditations' },
              { num: '₹18L', label: 'Approx Total Cost' },
            ].map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-primary font-playfair">{stat.num}</div>
                <div className="text-[10px] md:text-xs font-bold text-gray-500 tracking-[0.15em] uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — ABOUT ADAM UNIVERSITY */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-square bg-gray-50 rounded-2xl relative overflow-hidden flex items-center justify-center">
             <div className="text-gray-400 font-playfair italic text-2xl">[ Adam University Building ]</div>
          </div>
          <div>
            <p className="text-primary font-bold tracking-[0.15em] text-[10px] uppercase mb-4">Why Study in Adam University?</p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              A premier institution for <span className="italic font-normal">medical excellence</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Adam University occupies a leading position in national university rankings and is represented by students from more than <strong className="text-gray-900 font-semibold">25 different countries</strong>. Ranked among the Top Medical Colleges in Kyrgyzstan.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {[
                "WHO & ECFMG Approved",
                "Students from 25+ countries",
                "International curriculum",
                "Approved by 15+ councils",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={18} />
                  <span className="text-gray-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link to="/university" className="text-primary font-bold text-sm uppercase tracking-wide flex items-center gap-2 hover:text-primary-dark transition-colors">
                Discover the University <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — INDIA VS KYRGYZSTAN TABLE */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-bold tracking-[0.15em] text-[10px] uppercase mb-4">Make an Informed Decision</p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">India vs Kyrgyzstan</h2>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="p-6 text-xs font-bold text-gray-500 uppercase tracking-wider bg-gray-50/50">Parameters</th>
                  <th className="p-6 text-xs font-bold text-gray-500 uppercase tracking-wider bg-gray-50/50">India (Private)</th>
                  <th className="p-6 text-xs font-bold text-primary uppercase tracking-wider bg-primary/5">Kyrgyzstan (Adam)</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {[
                  { label: 'Total Course Duration', india: '5.6 Years', kyg: '5.6 Years' },
                  { label: 'Total College Fees', india: '₹70–90 Lakhs', kyg: '₹15–17 Lakhs' },
                  { label: 'Exit Test (NEXT/NMC)', india: 'Yes', kyg: 'Yes' },
                  { label: 'MCI/WHO/FAIMER Listed', india: 'Yes', kyg: 'Yes' },
                  { label: 'Total Cost (Approx)', india: '₹1.25 Crore', kyg: '₹25 Lakhs' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                    <td className="p-6 font-semibold text-sm text-gray-900">{row.label}</td>
                    <td className="p-6 text-sm text-gray-500">{row.india}</td>
                    <td className="p-6 font-bold text-primary text-sm bg-primary/[0.02]">{row.kyg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            Save up to <strong className="text-gray-900">₹1 Crore</strong> on your MBBS Degree by choosing Kyrgyzstan.
          </p>
        </div>
      </section>

      {/* SECTION 5 — FEE SNAPSHOT */}
      <section className="bg-white py-24 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="text-primary font-bold tracking-[0.15em] text-[10px] uppercase">Transparent & No Hidden Charges</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Fee Structure 2025–2026</h2>
          
          <div className="py-8">
            <div className="text-6xl md:text-8xl font-bold text-gray-900 font-playfair">₹18<span className="text-4xl text-gray-400">L</span></div>
            <p className="text-sm text-gray-500 font-medium tracking-wide uppercase mt-4">Approx. Total Cost (5.5 Years)</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left border-t border-gray-100 pt-12">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">1st Year Tuition</p>
              <p className="text-xl font-bold text-gray-900">$5,600 <span className="text-sm font-normal text-gray-500">(~₹5.3L)</span></p>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Per Semester (Yr 2-5)</p>
              <p className="text-xl font-bold text-gray-900">$1,800 <span className="text-sm font-normal text-gray-500">(~₹1.7L)</span></p>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Hostel (1st Year)</p>
              <p className="text-xl font-bold text-gray-900">$1,150 <span className="text-sm font-normal text-gray-500">(~₹1L)</span></p>
            </div>
          </div>

          <div className="pt-12">
            <Link 
              to="/fees" 
              className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wide hover:text-primary-dark transition-colors"
            >
              View Detailed Breakdown <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6 — FACILITIES */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-bold tracking-[0.15em] text-[10px] uppercase mb-4">World-Class Infrastructure</p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Medical Facilities</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: '3D Anatomage Table', icon: <Scale size={20} /> },
              { title: 'Simulation Center', icon: <HeartPulse size={20} /> },
              { title: 'Interactive Classrooms', icon: <BookOpen size={20} /> },
              { title: 'Advanced Research Lab', icon: <Zap size={20} /> },
            ].map((facility, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-gray-100 flex flex-col items-center text-center gap-4 hover:border-primary transition-colors">
                <div className="text-primary">{facility.icon}</div>
                <h4 className="font-semibold text-gray-900 text-sm">{facility.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — TESTIMONIALS */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-bold tracking-[0.15em] text-[10px] uppercase mb-4">Success Stories</p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">What Our Students Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Dr. Rahul Sharma', text: 'Choosing Gems Educare was the best decision for my career. They handled everything seamlessly.' },
              { name: 'Dr. Sneha Reddy', text: 'Adam University provides amazing clinical exposure. The Indian food makes it feel like home.' },
              { name: 'Dr. Arjun Varma', text: 'The faculty is very supportive and the English medium curriculum is perfect for Indian students.' },
            ].map((t, idx) => (
              <div key={idx} className="p-8 rounded-xl border border-gray-100 bg-gray-50/50 relative">
                <Quote className="text-primary/20 absolute top-6 right-6" size={40} />
                <div className="flex text-primary mb-6">
                  {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 italic mb-8 text-sm leading-relaxed">"{t.text}"</p>
                <div className="font-bold text-gray-900 text-sm">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — CTA */}
      <section className="bg-gray-900 py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <p className="text-primary font-bold tracking-[0.15em] text-[10px] uppercase">Begin Your Medical Journey</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white font-playfair italic">
            Your White Coat is Waiting
          </h2>
          <p className="text-gray-400 text-sm md:text-base pb-8">
            Join over 5000+ Indian students who have trusted Gems Educare to guide them to Adam University.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/919160404666"
              className="bg-primary text-white px-8 py-4 rounded text-sm font-bold uppercase tracking-wide hover:bg-primary-dark transition-colors"
            >
              Get Free Counselling
            </a>
            <Link
              to="/contact"
              className="bg-white text-gray-900 px-8 py-4 rounded text-sm font-bold uppercase tracking-wide hover:bg-gray-100 transition-colors"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
