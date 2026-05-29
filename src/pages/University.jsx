import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, GraduationCap, Globe, BookOpen, Stethoscope, Microscope, Building2, Library, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import SectionHeading from '../components/SectionHeading';
import bgVideo from '../assets/gemsbr/DJI_0895.mp4';

import campusMain from '../assets/gemsbr/university1.png';
import campusBuilding from '../assets/gemsbr/university1.png';
import medLabs from '../assets/gemsbr/university/BIMI 01_page-0006.webp';
import classroom from '../assets/gemsbr/university/BIMI 01_page-0009.webp';
import simulation from '../assets/gemsbr/university/BIMI 01_page-0011.webp';
import library from '../assets/gemsbr/university/BIMI 01_page-0014.webp';
import researchLab from '../assets/gemsbr/university/BIMI 01_page-0018.webp';
import anatomyLab from '../assets/gemsbr/university/BIMI 01_page-0022.webp';
import clinicalSkills from '../assets/gemsbr/university/BIMI 01_page-0027.webp';
import smartClassrooms from '../assets/gemsbr/university/BIMI 01_page-0030.webp';
import studentHostel from '../assets/gemsbr/university/BIMI 01_page-0036.webp';
import lectureHall from '../assets/gemsbr/university/BIMI 01_page-0040.webp';
import hospitalTraining from '../assets/gemsbr/university/BIMI 01_page-0044.webp';
import innovationCenter from '../assets/gemsbr/university/BIMI 01_page-0047.webp';
import campusLife from '../assets/gemsbr/university/BIMI 01_page-0050.webp';

const galleryImages = [
  { src: campusMain, label: 'Adam University Main Campus' },
  { src: medLabs, label: 'Pharmacology Laboratory' },
  { src: simulation, label: 'Clinical Simulation Laboratory' },
  { src: anatomyLab, label: 'Medical Library & Learning Resource Center' },
  { src: library, label: 'Research & Demonstration Laboratory' },
  { src: researchLab, label: 'Computer & Research Laboratory' },
  { src: clinicalSkills, label: 'Clinical Skills Laboratory' },
  { src: smartClassrooms, label: 'Medical Training Classroom' },
  { src: studentHostel, label: 'Student Skills Training Lab' },
  { src: lectureHall, label: 'Immersive Learning Center' },
  { src: hospitalTraining, label: 'Hospital Practice Ward' },
  { src: innovationCenter, label: 'Clinical Examination Room' },
];

const facilities = [
  { title: 'Medical Learning Resource Center', desc: 'Life-size virtual dissection for advanced anatomy learning', img: anatomyLab },
  { title: 'Clinical Simulation Laboratory', desc: 'High-fidelity mannequins for clinical skills training', img: simulation },
  { title: 'Medical Research & Demonstration Lab', desc: 'Digital & physical resources, thousands of journals', img: library },
  { title: 'Microscopy & Research Laboratory', desc: 'Collaborative spaces for group study & research', img: classroom },
  { title: 'Clinical Skills Training Laboratory', desc: 'Smart classrooms with advanced AV teaching aids', img: smartClassrooms },
  { title: 'Computer & Research Laboratory', desc: 'Advanced labs for biomedical research & training', img: researchLab },
];

const University = () => {
  return (
    <>
      <Helmet>
        <title>Adam University School of Medicine | Bishkek, Kyrgyzstan | Gems Educare</title>
        <meta name="description" content="Discover Adam University School of Medicine in Kyrgyzstan. Top-ranked, WHO & NMC approved, students from 25+ countries. World-class medical education at ₹16 Lakhs." />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-navy py-24 md:py-32 px-5 md:px-8 lg:px-10 overflow-hidden">
        <video autoPlay muted loop playsInline preload="metadata"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ filter: 'brightness(1.05) contrast(1.1) saturate(1.05)' }}>
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-[1]" style={{ backgroundColor: 'rgba(0,0,0,0.45)' }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <RevealOnScroll>
            <span className="text-accent font-bold tracking-[0.2em] text-[10px] uppercase mb-4 inline-block">Est. 2010 • Bishkek, Kyrgyzstan</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-playfair mb-6 leading-tight text-balance">
              Adam{' '}
              <span className="text-accent">University</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-playfair italic">School of Medicine — Bishkek, Kyrgyzstan</p>
          </RevealOnScroll>
        </div>
      </section>

      {/* University Overview */}
      <section className="bg-white py-20 md:py-28 px-5 md:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <RevealOnScroll>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-lg">
                <img
                  src={campusBuilding}
                  alt="Adam University Campus"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent rounded-2xl p-4 shadow-xl hidden md:block">
                <GraduationCap size={30} className="text-white" />
              </div>
            </div>
          </RevealOnScroll>
          <div className="space-y-6 md:space-y-8">
            <RevealOnScroll>
              <span className="text-accent font-bold tracking-[0.2em] text-[10px] uppercase">About the University</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                Excellence in{' '}
                <span className="text-accent">Medical Education</span>
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Adam University is a premier institution for medical and dental education, firmly believing in a comprehensive approach to learning. Students flourish when presented with both academic challenges and extracurricular opportunities in a nurturing environment.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Ranked among the top medical colleges in Kyrgyzstan, the university is represented by students from more than <strong className="text-text-primary font-semibold">25 different countries</strong> worldwide.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'WHO & NMC India Approved',
                  'Students from 25+ Countries',
                  'English Medium Curriculum',
                  'International Clinical Exposure',
                  'Advanced Medical Facilities',
                  'Globally Valid Degree',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-accent flex-shrink-0" />
                    <span className="text-text-primary text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Campus Gallery */}
      <section className="bg-section py-20 md:py-28 px-5 md:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="Campus"
            title="University Gallery"
            description="Explore the campus and facilities at Adam University."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {galleryImages.map((img, idx) => (
              <RevealOnScroll key={idx} delay={idx * 0.05}>
                <div className="group relative rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-500">
                  <div className="aspect-[4/3]">
                    <img
                      src={img.src}
                      alt={img.label}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent flex items-end p-4">
                    <span className="text-white text-sm font-semibold drop-shadow-sm">{img.label}</span>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white py-16 px-5 md:px-8 lg:px-10 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { icon: <GraduationCap size={20} />, num: '2010', label: 'Established' },
                { icon: <Globe size={20} />, num: '25+', label: 'Countries' },
                { icon: <Users size={20} />, num: '5000+', label: 'Students' },
                { icon: <Award size={20} />, num: '15+', label: 'Accreditations' },
              ].map((stat, idx) => (
                <div key={idx} className="group">
                  <div className="text-accent mb-3 flex justify-center">
                    <div className="p-2.5 rounded-xl bg-accent/5 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-primary font-playfair">{stat.num}</div>
                  <div className="text-[10px] font-bold text-text-secondary uppercase tracking-[0.15em] mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-white py-20 md:py-28 px-5 md:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="World-Class Infrastructure"
            title="Medical Facilities"
            description="State-of-the-art facilities designed for comprehensive medical training and research."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {facilities.map((facility, idx) => (
              <RevealOnScroll key={idx} delay={idx * 0.05}>
                <div className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:border-accent/20 transition-all duration-500 h-full">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={facility.img}
                      alt={facility.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 md:p-6">
                    <h3 className="font-bold text-primary text-base md:text-lg mb-2">{facility.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{facility.desc}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Student Life & Quick Facts */}
      <section className="bg-section py-20 md:py-28 px-5 md:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <RevealOnScroll>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-lg">
                  <img
                    src={campusLife}
                    alt="Students at Adam University"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </RevealOnScroll>
            <div className="space-y-6">
              <RevealOnScroll>
                <span className="text-accent font-bold tracking-[0.2em] text-[10px] uppercase">Student Life</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                  Modern Medical{' '}
          <span className="text-accent">Campus</span> Life
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  Life at Adam University extends beyond the classroom. With students from 25+ countries, the campus offers a rich multicultural environment that prepares you for a global medical career.
                </p>
              </RevealOnScroll>
              <RevealOnScroll delay={0.1}>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Location', value: 'Bishkek, Kyrgyzstan' },
                    { label: 'Language', value: 'English Medium' },
                    { label: 'Duration', value: '5.5 Years' },
                    { label: 'Total Cost', value: '₹16 Lakhs' },
                  ].map((f, idx) => (
                    <div key={idx} className="bg-white rounded-xl border border-border p-4">
                      <div className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">{f.label}</div>
                      <div className="font-bold text-primary text-sm mt-1">{f.value}</div>
                    </div>
                  ))}
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 md:py-28 px-5 md:px-8 lg:px-10 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <SectionHeading
            subtitle="Next Steps"
            title="Begin Your Journey at Adam University"
            description="Contact our admissions team to learn more about the enrollment process and start your medical career."
            light
            center
          />
          <RevealOnScroll>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/admission"
                className="bg-accent text-white px-10 py-5 rounded-xl text-sm font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 hover:bg-white hover:text-primary transition-all duration-300 shadow-lg"
              >
                View Admission Process <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/919160404666"
                className="border-2 border-white/20 text-white px-10 py-5 rounded-xl text-sm font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300"
              >
                Get Free Counselling
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
};

export default University;
