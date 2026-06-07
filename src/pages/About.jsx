import { Helmet } from 'react-helmet-async';
import { Target, Eye, Shield, Users, Heart, Zap, Award, CheckCircle, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import SectionHeading from '../components/SectionHeading';

const About = () => {
  const values = [
    { icon: <Shield size={22} />, title: 'Truthfulness', desc: 'Absolute transparency and honesty in all our dealings with students and partner universities worldwide.' },
    { icon: <Users size={22} />, title: 'Equity', desc: 'Equal opportunities for every medical aspirant regardless of background, location, or financial status.' },
    { icon: <Zap size={22} />, title: 'Innovation', desc: 'Constant improvement through embracing positive change and modern educational approaches.' },
    { icon: <Heart size={22} />, title: 'Commitment', desc: 'Supporting students throughout their entire journey — from admission to graduation and beyond.' },
    { icon: <Award size={22} />, title: 'Excellence', desc: 'Maintaining the highest standards in medical education consultancy through continuous improvement.' },
    { icon: <Target size={22} />, title: 'Sustainability', desc: 'Building long-term relationships and creating lasting educational pathways for future generations.' },
  ];

  return (
    <>
      <Helmet>
        <title>About Gems Educare | Trusted MBBS Abroad Consultancy Since 2010</title>
        <meta name="description" content="Learn about Gems Educare — India's leading MBBS abroad consultancy with 15+ years of experience. Guided 5000+ students to global medical careers." />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-navy py-24 md:py-32 px-5 md:px-8 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-primary/80 to-navy" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <RevealOnScroll>
            <span className="text-accent font-bold tracking-[0.2em] text-[10px] uppercase mb-4 inline-block">Empowering Future Doctors Since 2010</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-playfair mb-6 leading-tight text-balance">
              About{' '}<span className="text-accent">Gems Educare</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Your trusted partner in navigating international medical education. We turn dreams of becoming a doctor into reality.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-20 md:py-28 px-5 md:px-8 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <SectionHeading subtitle="Our Story" title="A Legacy of Trust & Excellence" description="For over 15 years, Gems Educare has been the bridge between Indian medical aspirants and world-class international medical education." center />
          <RevealOnScroll>
            <div className="bg-section rounded-2xl border border-border p-8 md:p-12 relative">
              <div className="absolute top-6 right-6 text-accent/5">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
              </div>
              <p className="text-lg md:text-2xl leading-relaxed text-text-secondary italic font-playfair relative z-10">
                &ldquo;Our goal is to empower every medical aspirant to become a doctor and to enable each and every student to get quality education services affordably, irrespective of caste, creed, religion, age, race, gender, and nationality but respective of equality, inclusion, and humanity.&rdquo;
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="bg-section py-20 md:py-28 px-5 md:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <RevealOnScroll>
              <div className="bg-white rounded-2xl border border-border p-8 md:p-12 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent"><Eye size={24} /></div>
                  <h3 className="text-2xl font-bold text-primary font-playfair">Our Vision</h3>
                </div>
                <p className="text-text-secondary leading-relaxed text-sm">
                  We envision a future where healthcare is transformed by our graduates, who are at the forefront of medical innovation, research, and practice. We aspire to be a global leader in medical education guidance, producing visionary healthcare professionals.
                </p>
                <p className="text-text-secondary leading-relaxed text-sm mt-4">
                  A collaborative approach where students, counselors, and university partners work together to push the boundaries of medical education access worldwide.
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <div className="bg-white rounded-2xl border border-border p-8 md:p-12 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent"><Target size={24} /></div>
                  <h3 className="text-2xl font-bold text-primary font-playfair">Our Mission</h3>
                </div>
                <p className="text-text-secondary leading-relaxed text-sm">
                  Dedicated to advancing healthcare through quality medical education guidance. We cultivate a diverse community of skilled healthcare professionals who contribute to the well-being of communities worldwide.
                </p>
                <p className="text-text-secondary leading-relaxed text-sm mt-4">
                  We provide an exceptional and inclusive guidance ecosystem that fosters intellectual curiosity, critical thinking, and ethical values for lifelong learning.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-20 md:py-28 px-5 md:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="What We Stand For" title="Our Core Values" description="The principles that guide everything we do at Gems Educare." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {values.map((value, idx) => (
              <RevealOnScroll key={idx} delay={idx * 0.05}>
                <div className="bg-section rounded-2xl border border-border p-6 md:p-8 hover:shadow-md hover:border-accent/20 transition-all duration-300 h-full group">
                  <div className="w-12 h-12 rounded-xl bg-accent/5 text-accent flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-300">{value.icon}</div>
                  <h3 className="text-lg font-bold text-primary mb-3">{value.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{value.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Why Families Trust Us + Success Numbers */}
      <section className="bg-section py-20 md:py-28 px-5 md:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <RevealOnScroll>
              <div className="space-y-6">
                <span className="text-accent font-bold tracking-[0.2em] text-[10px] uppercase">Why Families Trust Us</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">Your Child's Future Is{' '}<span className="text-accent">Our Priority</span></h2>
                <p className="text-text-secondary leading-relaxed">
                  Parents trust Gems Educare because we treat every student as family. From the first counselling session to graduation day, we are with you every step of the way. Our transparent process, genuine guidance, and proven track record make us the preferred choice for medical education abroad.
                </p>
                <div className="space-y-3">
                  {['Transparent fee structure with no hidden charges', 'Regular progress updates to parents', '24/7 support for students and families', 'Proven track record of 5000+ successful admissions'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3"><CheckCircle size={16} className="text-accent flex-shrink-0" /><span className="text-text-primary text-sm">{item}</span></div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <div className="bg-white rounded-2xl border border-border p-8 md:p-10">
                <h3 className="text-lg font-bold text-primary mb-6 text-center">Our Impact in Numbers</h3>
                <div className="grid grid-cols-2 gap-5">
                  {[
                    { num: '5000+', label: 'Students Guided' },
                    { num: '15+', label: 'Years Experience' },
                    { num: '100%', label: 'Admission Support' },
                    { num: '₹16L', label: 'Total Cost' },
                  ].map((s, i) => (
                    <div key={i} className="text-center p-4 bg-section rounded-xl border border-border">
                      <div className="text-2xl md:text-3xl font-bold text-accent font-playfair">{s.num}</div>
                      <div className="text-[10px] font-bold text-text-secondary uppercase tracking-wide mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Our Working Process */}
      <section className="bg-white py-20 md:py-28 px-5 md:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="How We Work" title="Our Working Process" description="A systematic approach to ensure your admission journey is smooth and stress-free." />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-6">
            {[
              { step: '01', title: 'Initial Counselling', desc: 'Understand your goals, guide you through options, and answer all your questions.' },
              { step: '02', title: 'Documentation', desc: 'Complete assistance with all paperwork — university, ministry, and visa documentation.' },
              { step: '03', title: 'Admission & Visa', desc: 'Secure your seat and process your visa with our expert team handling every step.' },
              { step: '04', title: 'Travel & Support', desc: 'Flight booking, airport pickup, hostel settlement, and ongoing support throughout.' },
            ].map((p, idx) => (
              <RevealOnScroll key={idx} delay={idx * 0.05}>
                <div className="bg-section rounded-2xl border border-border p-6 md:p-8 text-center hover:shadow-md hover:border-accent/20 transition-all duration-300 h-full group">
                  <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-lg font-bold mx-auto mb-4">{p.step}</div>
                  <h3 className="font-bold text-primary text-lg mb-2">{p.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{p.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="bg-navy py-20 md:py-28 px-5 md:px-8 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <RevealOnScroll>
            <div className="text-center space-y-6">
              <GraduationCap size={48} className="text-accent mx-auto" />
              <h2 className="text-3xl md:text-4xl font-bold text-white font-playfair">Our Philosophy</h2>
              <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
                We believe every aspiring doctor deserves a chance to fulfill their dream. Our team is committed to providing genuine guidance, transparent processes, and unwavering support to every student who trusts us with their future.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-20 md:py-28 px-5 md:px-8 lg:px-10 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <SectionHeading subtitle="Start Your Journey" title="Ready to Begin?" description="Take the first step towards your global medical career. Our expert counselors are here to guide you." center />
          <RevealOnScroll>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://wa.me/919160404666" className="bg-accent text-white px-10 py-5 rounded-xl text-sm font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 hover:bg-accent-hover transition-all duration-300 shadow-lg">Get Free Counselling</a>
              <Link to="/contact" className="border-2 border-primary text-primary px-10 py-5 rounded-xl text-sm font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 hover:bg-primary-dark hover:text-white transition-all duration-300">Contact Us</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
};

export default About;
