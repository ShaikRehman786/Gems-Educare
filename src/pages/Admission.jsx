import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, FileText, Send, BookOpen, CreditCard, Plane } from 'lucide-react';

const Admission = () => {
  const steps = [
    {
      title: '01 Passport Application',
      desc: 'Apply for your passport if not already available. This is the first step towards your international medical education.',
      docs: ['10th Marksheet', 'Identity Proof', 'Address Proof'],
      icon: <FileText size={40} className="text-primary" />
    },
    {
      title: '02 Documentation',
      desc: 'Submit your original documents for verification and processing. This includes academic records and identification.',
      docs: ['10th Marksheet', '12th Marksheet', 'Aadhar Card', 'NEET Qualification Certificate'],
      icon: <BookOpen size={40} className="text-primary" />
    },
    {
      title: '03 Enrollment',
      desc: 'Get officially enrolled in the university. You will receive your official Admission Letter after verification.',
      docs: ['Admission Fee Payment Receipt', 'Passport Copy'],
      icon: <Send size={40} className="text-primary" />
    },
    {
      title: '04 Visa Application',
      desc: 'We handle your visa application through the Ministry of Education & Science of Kyrgyzstan.',
      docs: ['Valid Passport (Original)', 'Invitation Letter', 'Medical Fitness Certificate'],
      icon: <CreditCard size={40} className="text-primary" />
    },
    {
      title: '05 Hostel Reservation',
      desc: 'Secure your accommodation in our separate Boys & Girls hostels. We ensure comfortable living from day one.',
      docs: ['Hostel Reservation Form', 'Accommodation Fee'],
      icon: <CheckCircle size={40} className="text-primary" />
    },
    {
      title: '06 Processing & Travel',
      desc: 'Final processing, travel arrangements, and pre-departure briefing. We accompany you to Bishkek.',
      docs: ['Visa Stamp', 'Flight Tickets', 'All Original Documents'],
      icon: <Plane size={40} className="text-primary" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Apply for MBBS in Kyrgyzstan 2025 | Step by Step | Gems Educare</title>
        <meta name="description" content="Simple 6-step admission process for MBBS at Adam University. Get complete document list and visa assistance with Gems Educare." />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary py-20 px-4 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-black mb-6">Admission Process</h1>
        <p className="text-xl text-primary font-bold uppercase tracking-widest">Your Path to Becoming a Doctor</p>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto space-y-12">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row gap-8 relative overflow-hidden border border-border border-t-8 border-t-primary">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full" />
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-primary-dark rounded-2xl flex items-center justify-center shadow-lg">
                  {step.icon}
                </div>
              </div>
              <div className="flex-grow space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-primary">{step.title}</h2>
                <p className="text-text-secondary leading-relaxed text-lg">{step.desc}</p>
                <div className="bg-primary/5 p-6 rounded-xl border border-border">
                  <h4 className="font-bold text-primary mb-4 uppercase text-sm tracking-widest">Required Documents:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {step.docs.map((doc, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-text-primary">
                        <CheckCircle size={16} className="text-primary" />
                        <span>{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* E-Visa Callout */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto bg-primary p-10 rounded-[2rem] text-white text-center space-y-6 shadow-2xl border-t-8 border-primary">
          <h2 className="text-3xl font-bold">100% Visa Success Rate</h2>
          <p className="text-xl opacity-90">
            Gems Educare uses the latest E-Visa system which ensures 100% success rate for Indian students. 
            Reliable and efficient visa processing for your peace of mind.
          </p>
          <div className="flex justify-center gap-8 pt-4">
            <div className="text-center">
              <div className="text-4xl font-black text-primary">7-10</div>
              <div className="text-sm uppercase font-bold text-white/80">Days Processing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-primary">5000+</div>
              <div className="text-sm uppercase font-bold text-white/80">Visas Issued</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold text-primary">Start Your Application Today</h2>
          <p className="text-lg text-text-secondary">Our experts will guide you through the entire document collection process.</p>
          <a
            href="https://wa.me/919160404666?text=I%20want%20to%20start%20my%20MBBS%20admission%20process"
            className="bg-primary text-white px-12 py-4 rounded-md font-bold text-xl hover:scale-105 transition-transform inline-block shadow-lg"
          >
            Apply for 2025 Intake
          </a>
        </div>
      </section>
    </>
  );
};

export default Admission;
