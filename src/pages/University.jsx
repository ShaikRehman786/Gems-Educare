import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, GraduationCap, Building2, Library, Stethoscope, Globe, FlaskConical } from 'lucide-react';
import { Link } from 'react-router-dom';

const University = () => {
  return (
    <>
      <Helmet>
        <title>Adam University School of Medicine | Bishkek | Gems Educare</title>
        <meta name="description" content="Discover Adam University School of Medicine in Kyrgyzstan. Top-ranked university with students from 25+ countries and international clinical exposure." />
      </Helmet>

      {/* Hero */}
      <section className="bg-gray-50 py-24 px-4 text-center border-b border-gray-100">
        <p className="text-primary font-bold tracking-[0.15em] text-[10px] uppercase mb-4">Established Excellence</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 font-playfair mb-6">Adam University</h1>
        <p className="text-gray-500 text-lg font-playfair italic max-w-2xl mx-auto">School of Medicine</p>
      </section>

      {/* Overview */}
      <section className="py-24 px-4 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-playfair leading-tight">
              A Legacy of <span className="italic font-normal text-primary">Medical Education</span>
            </h2>
            <p className="text-sm leading-relaxed text-gray-600">
              Adam University isn't just a premier institution for medical and dental education — we are firm believers in a comprehensive approach to learning. Students flourish when presented with both academic challenges and extracurricular opportunities in a nurturing environment.
            </p>
            <p className="text-sm leading-relaxed text-gray-600">
              We occupy a leading position in national university rankings and are represented by students from more than <strong className="text-gray-900">25 different countries</strong>. Ranked among Top Medical Colleges in Kyrgyzstan.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
              {[
                "Top-ranked university",
                "Students from 25+ countries",
                "International curriculum",
                "Comprehensive learning approach",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="text-primary/60 flex-shrink-0" size={18} />
                  <span className="text-gray-900 text-sm font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-square bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100">
             <div className="text-gray-400 font-playfair italic text-xl">[ University Campus Image ]</div>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-bold tracking-[0.15em] text-[10px] uppercase mb-4">World's Most Advanced</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-playfair">Medical Facilities in College</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: '3D Anatomage Table System', icon: <FlaskConical size={24} /> },
              { title: 'Simulated Mannequin Stations', icon: <Stethoscope size={24} /> },
              { title: 'Ultra Modern Library', icon: <Library size={24} /> },
              { title: 'Team Learning Center (TLC)', icon: <Globe size={24} /> },
              { title: 'Simulation Center', icon: <Building2 size={24} /> },
              { title: 'Advanced Interactive Classrooms', icon: <GraduationCap size={24} /> },
            ].map((facility, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-gray-100 flex items-center gap-4 hover:border-primary transition-colors">
                <div className="text-primary flex-shrink-0">{facility.icon}</div>
                <h4 className="font-semibold text-gray-900 text-sm">{facility.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 px-4 text-center border-t border-gray-100">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-playfair">Begin Your Journey at Adam</h2>
          <p className="text-gray-500">Contact our admissions team to learn more about the enrollment process.</p>
          <div className="flex justify-center pt-4">
            <Link
              to="/admission"
              className="bg-primary text-white px-8 py-4 rounded text-sm font-bold uppercase tracking-wide flex items-center gap-2 hover:bg-primary-dark transition-colors"
            >
              View Admission Process <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default University;
