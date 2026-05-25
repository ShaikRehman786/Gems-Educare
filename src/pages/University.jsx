import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Award, Users, BookOpen, Globe, GraduationCap, Building2, ShieldCheck, Zap, Stethoscope, Library, Wifi, Bus, HeartPulse, Scale } from 'lucide-react';
import adamBuilding from '../assets/gems/adam_building.png';

const University = () => {
  return (
    <>
      <Helmet>
        <title>Adam University Kyrgyzstan MBBS 2025 | Gems Educare</title>
        <meta name="description" content="Discover Adam University School of Medicine, Bishkek. World-class medical education, global recognition, and excellent facilities for Indian students." />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary py-20 px-4 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-black mb-6">Adam University</h1>
        <p className="text-xl text-primary font-bold uppercase tracking-widest">School of Medicine | Bishkek, Kyrgyzstan</p>
      </section>

      {/* Stats Bar */}
      <section className="bg-white py-12 px-4 shadow-xl border-b border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-black text-primary font-playfair">5000+</div>
            <div className="text-sm font-bold text-text-secondary uppercase">Students Enrolled</div>
          </div>
          <div>
            <div className="text-4xl font-black text-primary font-playfair">4.5+1 Year</div>
            <div className="text-sm font-bold text-text-secondary uppercase">Course Duration</div>
          </div>
          <div>
            <div className="text-4xl font-black text-primary font-playfair">7+</div>
            <div className="text-sm font-bold text-text-secondary uppercase">Accreditations</div>
          </div>
          <div>
            <div className="text-4xl font-black text-primary font-playfair">25+</div>
            <div className="text-sm font-bold text-text-secondary uppercase">Countries</div>
          </div>
        </div>
      </section>

      {/* Why Study at Adam */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-6">
            <div className="bg-primary/5 border-l-4 border-primary p-4 text-primary font-bold text-lg inline-block border border-border">
              Top Ranked Medical University in Kyrgyzstan
            </div>
            <h2 className="text-4xl font-bold text-primary">Why Study Adam University?</h2>
            <p className="text-lg leading-relaxed text-text-secondary">
              Adam University, established in 1994, is a prestigious institution offering an international curriculum and a comprehensive learning approach. It focuses on both academic and extracurricular development, ensuring students receive a well-rounded medical education.
            </p>
            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-primary flex items-center gap-6 border border-border">
              <Award className="text-primary" size={48} />
              <div>
                <h4 className="font-bold text-primary text-xl">International Exposure</h4>
                <p className="text-sm text-text-secondary uppercase font-bold tracking-widest">Global Medical Standards</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img src={adamBuilding} alt="University Campus" className="rounded-3xl shadow-2xl border-8 border-white" />
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary">Medical Infrastructure & Facilities</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: 'Simulation Center', icon: <HeartPulse size={32} /> },
              { title: 'Anatomage Table', icon: <Scale size={32} /> },
              { title: 'Medical Skills Labs', icon: <Stethoscope size={32} /> },
              { title: 'Interactive Classrooms', icon: <Users size={32} /> },
              { title: 'Advanced Research Center', icon: <Globe size={32} /> },
              { title: 'Modern Library', icon: <Library size={32} /> },
              { title: 'Computer Labs', icon: <Zap size={32} /> },
              { title: 'VR/AR Learning', icon: <Globe size={32} /> },
              { title: 'Reading Rooms', icon: <Library size={32} /> },
              { title: 'Anatomy Museum', icon: <Building2 size={32} /> },
            ].map((facility, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-md border border-border text-center space-y-4 hover:border-primary transition-colors">
                <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto text-primary">
                  {facility.icon}
                </div>
                <h4 className="font-bold text-text-primary text-sm">{facility.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Exposure */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-primary-dark p-12 rounded-[3rem] text-white space-y-6 relative border-t-8 border-primary shadow-xl">
            <h3 className="text-2xl font-bold">Research Environment</h3>
            <p className="opacity-80">
              Adam University provides a robust research environment with advanced laboratories and centers dedicated to medical innovation and scientific inquiry.
            </p>
          </div>
          <div className="bg-primary-dark p-12 rounded-[3rem] text-white space-y-6 relative border-t-8 border-primary shadow-xl">
            <h3 className="text-2xl font-bold">International Exposure</h3>
            <p className="opacity-80">
              Students benefit from international faculty and a diverse student community from 25+ countries, preparing them for global medical careers.
            </p>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary uppercase tracking-widest">Recognitions & Accreditations</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "WHO", "FAIMER", "Ministry of Health", "Pakistan Medical Council", 
              "Bangladesh Medical Council", "Nepal Medical Council", "IAAR", "NMC India"
            ].map((body, idx) => (
              <div key={idx} className="bg-white border-2 border-primary rounded-2xl p-8 flex items-center justify-center text-xl font-black text-primary hover:bg-primary hover:text-white transition-all cursor-default shadow-md">
                {body}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-20 px-4 text-white text-center shadow-2xl border-t-8 border-primary">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto">
            <GraduationCap className="text-white" size={40} />
          </div>
          <h2 className="text-4xl font-bold">Start Your Journey at Adam University</h2>
          <p className="text-xl leading-relaxed opacity-90 italic">
            "Your medical career begins here. Get world-class education at an affordable cost."
          </p>
          <div className="pt-8">
            <a
              href="https://wa.me/919160404666"
              className="bg-primary text-white px-10 py-4 rounded-md font-bold text-xl hover:scale-105 transition-transform inline-block shadow-lg"
            >
              Apply for Admission
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default University;

