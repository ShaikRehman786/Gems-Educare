import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, ArrowRight, UserCheck, CreditCard, Plane, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Admission = () => {
  const steps = [
    { num: '01', icon: <UserCheck size={24} />, title: 'Passport', desc: 'Apply for passport with SSC marks, Aadhar & police station address.' },
    { num: '02', icon: <FileText size={24} />, title: 'Documents', desc: 'Submit passport, 10th/12th marks memos, TC & NEET marksheet.' },
    { num: '03', icon: <CreditCard size={24} />, title: 'Enrollment', desc: 'Pay 1st semester fee for official university enrollment.' },
    { num: '04', icon: <FileText size={24} />, title: 'Visa', desc: 'E-visa available. Submit university & ministry documents.' },
    { num: '05', icon: <MapPin size={24} />, title: 'Hostel', desc: 'Pay 6 months hostel fee in advance ($200–$250/month).' },
    { num: '06', icon: <Plane size={24} />, title: 'Travel', desc: 'Flight tickets booked after processing fee; airport pickup arranged.' },
  ];

  return (
    <>
      <Helmet>
        <title>Admission Process | MBBS at Adam University | Gems Educare</title>
        <meta name="description" content="Simple step-by-step admission process for MBBS at Adam University. From documentation to visa and travel." />
      </Helmet>

      {/* Hero */}
      <section className="bg-gray-50 py-24 px-4 text-center border-b border-gray-100">
        <p className="text-primary font-bold tracking-[0.15em] text-[10px] uppercase mb-4">Step-by-Step Guide</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-playfair mb-6">Admission Process</h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">Your journey to becoming a global doctor starts here.</p>
      </section>

      {/* Steps */}
      <section className="py-24 px-4 bg-white relative">
        <div className="max-w-5xl mx-auto">
          <div className="hidden lg:block absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-px h-full bg-gray-100" />
          <div className="space-y-12 relative">
            {steps.map((step, idx) => (
              <div key={idx} className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${idx % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`flex-1 w-full lg:w-1/2 ${idx % 2 === 0 ? 'lg:text-left' : 'lg:text-right'}`}>
                  <h3 className="text-2xl font-bold text-gray-900 font-playfair mb-3">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{step.desc}</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-white border-2 border-primary flex items-center justify-center text-primary font-bold relative z-10 flex-shrink-0 shadow-sm">
                  {step.num}
                </div>
                <div className={`flex-1 w-full lg:w-1/2 flex ${idx % 2 === 0 ? 'justify-end lg:justify-start' : 'justify-end'} opacity-20`}>
                  {step.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-playfair italic">Ready to Apply?</h2>
          <p className="text-gray-400">Our counselors are ready to guide you through every step.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/919160404666"
              className="bg-primary text-white px-8 py-4 rounded text-sm font-bold uppercase tracking-wide hover:bg-primary-dark transition-colors"
            >
              Start Application
            </a>
            <Link
              to="/fees"
              className="border border-gray-600 text-white px-8 py-4 rounded text-sm font-bold uppercase tracking-wide hover:bg-gray-800 transition-colors"
            >
              Review Fees
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admission;
