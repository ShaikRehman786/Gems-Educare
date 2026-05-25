import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ChevronRight, 
  Star, 
  Users, 
  Award, 
  CreditCard, 
  ArrowRight,
  Stethoscope,
  ShieldCheck,
  Zap,
  GraduationCap,
  Globe,
  MessageSquare,
  Phone,
  Quote,
  Building2,
  Hotel,
  Bus,
  Library,
  Wifi,
  Users2,
  HeartPulse,
  Scale
} from 'lucide-react';
import FadeInUp from '../components/FadeInUp';
import heroDoctor from '../assets/gems/hero_doctor.png';
import gemsLogo from '../assets/gems/logo.png';
import adamLogo from '../assets/gems/adam_logo.png';
import bishkekCity from '../assets/gems/bishkek_city.png';
import hostelBuilding from '../assets/gems/hostel_building.png';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>MBBS in Kyrgyzstan for Indian Students | Gems Educare Vijayawada</title>
        <meta name="description" content="Study MBBS at Adam University, Kyrgyzstan with Gems Educare. Lowest fee structure, NMC approved, WHO accredited. Join 5000+ successful students." />
      </Helmet>

      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[90vh] flex items-center bg-primary overflow-hidden pt-12 md:pt-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-[-20deg] transform translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <FadeInUp>
            <div className="space-y-6">
              <span className="inline-block text-primary font-bold tracking-widest text-sm uppercase border-b-2 border-primary pb-1">
                WHO | ECFMG | NMC INDIA | 15+ INT'L COUNCILS
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                STUDY <span className="text-primary">MBBS / MD</span> PROGRAM
              </h1>
              <p className="text-xl text-white/80 max-w-xl leading-relaxed">
                Leading International Medical University. <br />
                <span className="text-primary font-bold">Your White Coat is Waiting.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://wa.me/919160404666"
                  className="bg-white text-primary px-8 py-4 rounded-md font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary transition-all transform hover:-translate-y-1"
                >
                  Get Free Counselling <ArrowRight size={20} />
                </a>
                <Link
                  to="/fees"
                  className="border-2 border-white text-white px-8 py-4 rounded-md font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
                >
                  Request Fee Structure
                </Link>
              </div>
            </div>
          </FadeInUp>
          <div className="relative hidden lg:block">
            <FadeInUp delay={0.2}>
              <img 
                src={heroDoctor} 
                alt="Medical Student" 
                className="w-full h-auto drop-shadow-2xl rounded-2xl"
              />
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* SECTION 2 — STATS BAR */}
      <section className="bg-white border-t-4 border-primary py-12 px-4 shadow-xl relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: '5000+', label: 'Students Enrolled' },
              { num: '4.5+1 Year', label: 'Course Duration' },
              { num: '7+', label: 'Accreditations' },
              { num: '₹18L', label: 'Approx Total Cost' },
            ].map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <div className="text-4xl font-black text-primary font-playfair">{stat.num}</div>
                <div className="text-[10px] md:text-xs font-bold text-text-secondary tracking-tighter uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — BENEFITS SECTION */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Top Medical Colleges in Kyrgyzstan</h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "No Entry Tests Required", "No IELTS / TOEFL", "No Donations", "No Language Course",
              "No Hidden Charges", "No Age Limit", "MBBS in 5.5 Years", "ECFMG Approved",
              "WHO Approved", "100% Confirmed Admission", "100% Visa Support", "Attached Teaching Hospital",
              "Low Tuition Fee", "Pay on Arrival", "International Faculty", "3 Meals Daily"
            ].map((benefit, idx) => (
              <FadeInUp key={idx} delay={idx * 0.05}>
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg border border-border shadow-sm hover:border-primary transition-colors">
                  <CheckCircle className="text-support flex-shrink-0" size={18} />
                  <span className="text-text-primary font-medium text-sm">{benefit}</span>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHY ADAM UNIVERSITY? */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Why Adam University?</h2>
            <p className="text-lg text-text-secondary mb-8 italic">
              "Trusted by 5000+ Students | NMC India Approved"
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Top-ranked university",
                "Students from 25+ countries",
                "WHO approved",
                "ECFMG approved",
                "International curriculum",
                "Comprehensive learning approach",
                "Academic + extracurricular development",
                "Top Medical Colleges in Kyrgyzstan"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={18} />
                  <span className="text-text-primary font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-primary-dark p-12 rounded-3xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary opacity-10 rounded-full -translate-y-16 translate-x-16" />
            <div className="relative z-10 space-y-8">
              <div className="flex items-center gap-4">
                <img src={adamLogo} alt="Adam University" className="h-16 w-16 bg-white p-2 rounded-full" />
                <div>
                  <h3 className="text-2xl font-bold">Adam University</h3>
                  <p className="text-primary font-medium uppercase text-sm tracking-widest">School of Medicine</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed opacity-90">
                Founded in 1994, Adam University is one of the most prestigious medical universities in Kyrgyzstan, 
                dedicated to providing world-class medical education to international students.
              </p>
              <div className="flex flex-col gap-4">
                <div className="bg-white/10 p-4 rounded-lg flex items-center justify-between">
                  <span className="font-bold">Total Students</span>
                  <span className="text-primary font-bold">5000+</span>
                </div>
                <div className="bg-white/10 p-4 rounded-lg flex items-center justify-between">
                  <span className="font-bold">Course Duration</span>
                  <span className="text-primary font-bold">4.5+1 Years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — INDIA VS KYRGYZSTAN TABLE */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-2xl border border-border">
          <table className="w-full text-left border-collapse bg-white">
            <thead>
              <tr className="bg-primary text-white">
                <th className="p-6 text-xl">Comparison</th>
                <th className="p-6 text-xl">India (Private)</th>
                <th className="p-6 text-xl text-primary">Kyrgyzstan (Adam)</th>
              </tr>
            </thead>
            <tbody className="text-text-primary">
              {[
                { label: 'Total Budget', india: '₹60 Lakhs - ₹1.2 Cr', kyg: '₹18 Lakhs' },
                { label: 'Entrance Exam', india: 'NEET (High Rank)', kyg: 'NEET (Qualify Only)' },
                { label: 'Donation', india: 'Huge Capitation', kyg: 'Zero Donation' },
                { label: 'Admission', india: 'Extremely Hard', kyg: 'Direct & Simple' },
                { label: 'Infrastructure', india: 'Varies', kyg: 'Modern & Global' },
                { label: 'Living Cost', india: 'High', kyg: 'Affordable' },
              ].map((row, idx) => (
                <tr key={idx} className="border-b border-border hover:bg-primary/5 transition-colors">
                  <td className="p-6 font-bold">{row.label}</td>
                  <td className="p-6 text-text-secondary">{row.india}</td>
                  <td className="p-6 font-bold text-primary flex items-center gap-2">
                    <CheckCircle size={18} className="text-support" /> {row.kyg}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="bg-primary-dark p-6 text-center text-white">
            <p className="text-xl">
              Save over <span className="text-primary font-black">₹40,00,000</span> and get a Global Degree!
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6 — FEE SNAPSHOT */}
      <section className="bg-primary py-20 px-4 text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold">Complete Package</h2>
          <div className="text-7xl md:text-9xl font-black text-primary font-playfair animate-pulse">₹18L</div>
          <p className="text-xl opacity-80 uppercase tracking-widest">Full 6 Years Tuition + Admission</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto pt-8">
            <div className="bg-white/5 p-4 rounded-lg flex justify-between border-l-2 border-primary">
              <span>Tuition Fees</span>
              <span className="text-primary font-bold">$18,200</span>
            </div>
            <div className="bg-white/5 p-4 rounded-lg flex justify-between border-l-2 border-primary">
              <span>Hostel (1 Year)</span>
              <span className="text-primary font-bold">$1,150</span>
            </div>
            <div className="bg-white/5 p-4 rounded-lg flex justify-between border-l-2 border-primary">
              <span>Food (Indian)</span>
              <span className="text-primary font-bold">$1,150</span>
            </div>
            <div className="bg-white/5 p-4 rounded-lg flex justify-between border-l-2 border-primary">
              <span>Degree & Processing</span>
              <span className="text-primary font-bold">Included</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            <div className="bg-white p-6 rounded-xl text-text-primary">
              <h4 className="font-bold text-sm uppercase text-text-secondary mb-2">Documentation</h4>
              <div className="text-2xl font-black text-primary">₹1,50,000</div>
            </div>
            <div className="bg-white p-6 rounded-xl text-text-primary">
              <h4 className="font-bold text-sm uppercase text-text-secondary mb-2">Processing</h4>
              <div className="text-2xl font-black text-primary">₹75,000</div>
            </div>
            <div className="bg-white p-6 rounded-xl text-text-primary">
              <h4 className="font-bold text-sm uppercase text-text-secondary mb-2">Medical Ins.</h4>
              <div className="text-2xl font-black text-primary">$100/yr</div>
            </div>
          </div>

          <div className="pt-10">
            <Link 
              to="/fees" 
              className="bg-primary text-white px-10 py-4 rounded-md font-bold text-xl hover:bg-primary-light transition-all inline-block"
            >
              View Full Fee Structure
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7 — ACCREDITATIONS */}
      <section className="bg-white py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
          <h2 className="text-3xl font-bold text-primary">Global Accreditations</h2>
        </div>
        <div className="flex space-x-12 animate-marquee whitespace-nowrap mb-12">
          {[
            "WHO - World Health Organization",
            "NMC - National Medical Commission",
            "ECFMG - USA",
            "FAIMER",
            "IAAR - Kyrgyzstan",
            "Ministry of Health",
            "Pakistan Medical Council",
            "Bangladesh Medical Council",
            "Nepal Medical Council"
          ].map((item, idx) => (
            <div key={idx} className="inline-block bg-white px-8 py-4 rounded-lg border-2 border-primary text-primary font-bold shadow-sm">
              {item}
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link 
            to="/accreditations" 
            className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-md font-bold hover:bg-primary hover:text-white transition-colors"
          >
            View All Accreditations
          </Link>
        </div>
      </section>

      {/* SECTION 8 — FACILITIES */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">University Facilities</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { title: 'Simulation Center', icon: <HeartPulse size={24} /> },
              { title: 'Anatomage Table', icon: <Scale size={24} /> },
              { title: 'Medical Skills Labs', icon: <Stethoscope size={24} /> },
              { title: 'Interactive Classrooms', icon: <Users size={24} /> },
              { title: 'Advanced Research Center', icon: <Globe size={24} /> },
              { title: 'Modern Library', icon: <Library size={24} /> },
              { title: 'Computer Labs', icon: <Zap size={24} /> },
              { title: 'VR/AR Learning', icon: <Globe size={24} /> },
              { title: 'Reading Rooms', icon: <Library size={24} /> },
              { title: 'Anatomy Museum', icon: <Building2 size={24} /> },
              { title: '24/7 Security', icon: <ShieldCheck size={24} /> },
              { title: 'Indian Mess', icon: <Bus size={24} /> },
            ].map((facility, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border-l-4 border-primary flex items-center gap-4 shadow-sm hover:translate-y-[-5px] transition-transform border border-border">
                <div className="text-primary">{facility.icon}</div>
                <h4 className="font-bold text-text-primary">{facility.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — HOSTEL & LIFE */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="h-64 bg-primary/5 rounded-2xl border-4 border-primary flex items-center justify-center font-bold text-primary italic">Hostel Building</div>
              <div className="h-64 bg-primary/5 rounded-2xl border-4 border-primary mt-8 flex items-center justify-center font-bold text-primary italic">Indian Mess</div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-4xl font-bold text-primary">Hostel & Food</h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              Gems Educare ensures students focus on their studies while we handle their comfort with premium accommodation and authentic food.
            </p>
            <div className="space-y-4">
              {[
                "Separate Boys Hostel", "Separate Girls Hostel", "Indian Warden", "24/7 Security",
                "24/7 CCTV", "High Speed WiFi", "North Indian Food", "South Indian Food",
                "Vegetarian Food", "Non-Vegetarian Food", "Secure Accommodation"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="text-primary" size={20} />
                  <span className="font-medium text-text-primary">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — ADMISSION PROCESS */}
      <section className="bg-primary-dark py-20 px-4 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Admission Process</h2>
            <p className="mt-4 text-white/60">Simple step-by-step journey to your medical career</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { step: '01', title: 'Passport', desc: 'Passport Application' },
              { step: '02', title: 'Documents', desc: 'Documentation' },
              { step: '03', title: 'Enrollment', desc: 'University Enrollment' },
              { step: '04', title: 'Visa', desc: 'Visa Application' },
              { step: '05', title: 'Hostel', desc: 'Hostel Reservation' },
              { step: '06', title: 'Travel', desc: 'Processing & Travel' },
            ].map((step, idx) => (
              <div key={idx} className="text-center space-y-4 relative">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-black mx-auto shadow-lg shadow-primary/20">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-primary">{step.title}</h3>
                <p className="text-sm text-white/70">{step.desc}</p>
                {idx < 5 && <div className="hidden lg:block absolute top-8 -right-4 w-8 h-[2px] bg-white/20" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11 — BISHKEK HIGHLIGHT */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-bold text-primary">Bishkek City</h2>
            <p className="text-lg leading-relaxed text-text-secondary">
              Bishkek, the capital of Kyrgyzstan, is a safe, student-friendly environment with affordable living and modern infrastructure.
            </p>
            <ul className="grid grid-cols-2 gap-4">
              <li className="flex items-center gap-2 font-bold"><CheckCircle size={16} className="text-primary" /> Safe Environment</li>
              <li className="flex items-center gap-2 font-bold"><CheckCircle size={16} className="text-primary" /> Affordable Living</li>
              <li className="flex items-center gap-2 font-bold"><CheckCircle size={16} className="text-primary" /> Modern Infrastructure</li>
              <li className="flex items-center gap-2 font-bold"><CheckCircle size={16} className="text-primary" /> Green Spaces</li>
            </ul>
            <Link 
              to="/kyrgyzstan" 
              className="inline-block bg-primary text-white px-8 py-3 rounded-md font-bold hover:bg-primary-dark transition-colors"
            >
              Learn More About Kyrgyzstan
            </Link>
          </div>
          <div className="flex-1 w-full h-80 bg-primary/5 rounded-3xl border-8 border-white shadow-2xl overflow-hidden font-black text-primary/10 italic flex items-center justify-center text-4xl">
            Bishkek City View
          </div>
        </div>
      </section>

      {/* SECTION 12 — TESTIMONIALS */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Student Success Stories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Dr. Rahul Sharma', year: 'Final Year Student', text: 'Choosing Gems Educare was the best decision for my career. They handled everything from admission to visa seamlessly.' },
              { name: 'Dr. Sneha Reddy', year: '3rd Year Student', text: 'Adam University provides amazing clinical exposure. The Indian food in the hostel makes it feel like home.' },
              { name: 'Dr. Arjun Varma', year: 'Graduate', text: 'The faculty is very supportive and the English medium curriculum is perfect for Indian students.' },
            ].map((t, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl relative border border-border shadow-sm">
                <Quote className="text-primary/10 absolute top-4 right-4" size={60} />
                <div className="flex text-primary mb-4">
                  {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                </div>
                <p className="text-text-primary italic mb-6">"{t.text}"</p>
                <div className="font-bold text-primary">{t.name}</div>
                <div className="text-sm text-text-secondary">{t.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 13 — FINAL CTA BANNER */}
      <section className="bg-primary py-16 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Reserve Your White Coat Today
          </h2>
          <p className="text-2xl font-bold text-primary">
            Your White Coat Is Waiting. Speak With Our Counsellor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919160404666"
              className="bg-primary text-white px-10 py-4 rounded-md font-bold text-xl hover:scale-105 transition-transform shadow-xl"
            >
              Get Free Counselling
            </a>
            <Link
              to="/contact"
              className="bg-secondary text-white px-10 py-4 rounded-md font-bold text-xl hover:bg-secondary-dark transition-all shadow-xl"
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
