import { Helmet } from 'react-helmet-async';
import { FileText, CreditCard, Plane, MapPin, CheckCircle, Globe, ShieldCheck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import SectionHeading from '../components/SectionHeading';

const Admission = () => {
  const steps = [
    { num: '01', icon: <Users size={24} />, title: 'Get Your Passport', desc: 'Apply for passport with SSC marks memo, Aadhar card, and police station address verification.' },
    { num: '02', icon: <FileText size={24} />, title: 'Submit Documents', desc: 'Submit passport copy, 10th & 12th marks memos, Transfer Certificate, and NEET scorecard.' },
    { num: '03', icon: <CreditCard size={24} />, title: 'Complete Enrollment', desc: 'Pay the 1st semester tuition fee to secure your official enrollment at Adam University.' },
    { num: '04', icon: <Globe size={24} />, title: 'Visa Processing', desc: 'E-visa facility available. Our team handles all university and ministry documentation for you.' },
    { num: '05', icon: <MapPin size={24} />, title: 'Book Your Hostel', desc: 'Secure accommodation with advance payment. Separate hostels for boys and girls with Indian mess.' },
    { num: '06', icon: <Plane size={24} />, title: 'Travel to Kyrgyzstan', desc: 'Flight tickets booked after processing fee. Airport pickup and local assistance arranged.' },
  ];

  return (
    <>
      <Helmet>
        <title>MBBS Admission Process | Adam University | Step-by-Step Guide | Gems Educare</title>
        <meta name="description" content="Simple 6-step admission process for MBBS at Adam University, Kyrgyzstan. From documentation to visa and travel — we guide you every step." />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-navy py-24 md:py-32 px-5 md:px-8 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-primary/80 to-navy" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <RevealOnScroll>
            <span className="text-accent font-bold tracking-[0.2em] text-[10px] uppercase mb-4 inline-block">Step-by-Step Guide</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-playfair mb-6 leading-tight text-balance">
              Admission{' '}
              <span className="text-accent">Process</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Your journey to becoming a global doctor starts here. Follow these simple steps to begin your MBBS at Adam University.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="bg-white py-20 md:py-28 px-5 md:px-8 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            subtitle="How It Works"
            title="6 Simple Steps to Admission"
            description="We handle the complexity so you can focus on your dream of becoming a doctor."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {steps.map((step, idx) => (
              <RevealOnScroll key={idx} delay={idx * 0.05}>
                <div className="bg-section rounded-2xl border border-border p-6 md:p-8 hover:shadow-md hover:border-accent/20 transition-all duration-300 h-full group">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-accent text-white flex items-center justify-center text-sm font-bold">
                      {step.num}
                    </div>
                    <div className="h-px flex-1 bg-border" />
                    <div className="text-accent/30 group-hover:text-accent transition-colors">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-primary text-lg mb-2">{step.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{step.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="bg-section py-20 md:py-28 px-5 md:px-8 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            subtitle="What You Need"
            title="Documents Required"
            description="Ensure you have these documents ready before starting the admission process."
          />
          <RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: <FileText size={20} />, title: 'Valid Passport', desc: 'Minimum 2 years validity remaining' },
                { icon: <FileText size={20} />, title: '10th Marksheet', desc: 'SSC/10th standard mark sheet' },
                { icon: <FileText size={20} />, title: '12th Marksheet', desc: 'Intermediate/12th standard mark sheet' },
                { icon: <ShieldCheck size={20} />, title: 'Transfer Certificate', desc: 'TC from last attended institution' },
                { icon: <CheckCircle size={20} />, title: 'NEET Scorecard', desc: 'NEET UG scorecard (if appeared)' },
                { icon: <Users size={20} />, title: 'Passport Photos', desc: '6 recent passport size photographs' },
              ].map((doc, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-border p-5 flex items-start gap-4 hover:border-accent/20 hover:shadow-sm transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-accent/5 text-accent flex items-center justify-center flex-shrink-0">
                    {doc.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-sm">{doc.title}</h4>
                    <p className="text-text-secondary text-xs mt-0.5">{doc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Visa & Travel */}
      <section className="bg-white py-20 md:py-28 px-5 md:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <RevealOnScroll>
              <div className="bg-section rounded-2xl border border-border p-8 md:p-10 h-full">
                <Globe size={32} className="text-accent mb-5" />
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">Visa Process</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-5">
                  We provide complete visa assistance for all students. The e-visa facility makes the process quick and hassle-free. Our team handles all documentation with the university and ministry.
                </p>
                <ul className="space-y-2.5">
                  {['E-visa available for Indian students', 'Full documentation support', 'University endorsement letter', 'Ministry clearance handled'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <CheckCircle size={15} className="text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-text-primary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <div className="bg-section rounded-2xl border border-border p-8 md:p-10 h-full">
                <Plane size={32} className="text-accent mb-5" />
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">Travel Assistance</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-5">
                  Once your visa is approved, we handle all travel arrangements. From flight booking to airport pickup, we ensure your journey is smooth and stress-free.
                </p>
                <ul className="space-y-2.5">
                  {['Flight ticket booking', 'Airport pickup service', 'Local transportation', 'Settlement assistance'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <CheckCircle size={15} className="text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-text-primary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 md:py-28 px-5 md:px-8 lg:px-10 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <SectionHeading
            subtitle="Ready to Apply?"
            title="Your Medical Journey Starts Now"
            description="Our counselors are ready to guide you through every step of the admission process. Get started today."
            light
            center
          />
          <RevealOnScroll>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/919160404666"
                className="bg-accent text-white px-10 py-5 rounded-xl text-sm font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 hover:bg-white hover:text-primary transition-all duration-300 shadow-lg"
              >
                Start Application
              </a>
              <Link
                to="/fees"
                className="border-2 border-white/20 text-white px-10 py-5 rounded-xl text-sm font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300"
              >
                Review Fees
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
};

export default Admission;
