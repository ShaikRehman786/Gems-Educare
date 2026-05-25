import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, Eye, Shield, Users, Heart, Zap, Award, CheckCircle } from 'lucide-react';
import gemsLogo from '../assets/gems/logo.png';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Gems Educare — Change Your Future | Vijayawada</title>
        <meta name="description" content="Learn about Gems Educare, the leading MBBS consultancy in Vijayawada. Our goal is to empower every medical aspirant to become a doctor." />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary py-20 px-4 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-black mb-6">About Gems Educare</h1>
        <p className="text-xl text-primary font-bold uppercase tracking-widest">Empowering Future Doctors</p>
      </section>

      {/* Why Gems Educare */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-4xl font-bold text-primary uppercase tracking-wider">WHY GEMS EDUCARE?</h2>
          <div className="bg-white p-10 rounded-[3rem] border-t-8 border-primary relative shadow-2xl border border-border">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-white px-8 py-2 rounded-full font-black">OUR GOAL</div>
            <p className="text-xl md:text-2xl leading-relaxed text-text-primary italic">
              "Our goal is to empower every medical aspirant to become a doctor and to enable each and every student to get quality education services affordably, irrespective of caste, creed, religion, age, race, gender, and nationality but respective of equality, inclusion, and humanity."
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary">Core Values</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'TRUTHFULNESS',
                desc: 'We believe in absolute transparency and honesty in all our dealings with students and parents.',
                icon: <Shield className="text-primary" size={32} />
              },
              {
                title: 'EQUITY',
                desc: 'We provide equal opportunities and resources to every student, ensuring no one is left behind.',
                icon: <Users className="text-primary" size={32} />
              },
              {
                title: 'CHANGE',
                desc: 'We embrace innovation and constant improvement in our educational services and support.',
                icon: <Zap className="text-primary" size={32} />
              },
              {
                title: 'COMMITMENT',
                desc: 'Our commitment to student success goes beyond admission; we support them throughout their 6-year journey.',
                icon: <Heart className="text-primary" size={32} />
              },
              {
                title: 'SUPREMACY',
                desc: 'We strive for excellence in everything we do, setting the highest standards for medical consultancy.',
                icon: <Award className="text-primary" size={32} />
              },
              {
                title: 'SUSTAINABILITY',
                desc: 'We build long-term relationships and sustainable educational paths for the future of healthcare.',
                icon: <Target className="text-primary" size={32} />
              }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-primary flex flex-col items-center text-center space-y-4 border border-border">
                <div className="bg-primary/5 p-4 rounded-full">{value.icon}</div>
                <h3 className="text-xl font-black text-primary">{value.title}</h3>
                <p className="text-text-secondary leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-primary-dark p-12 rounded-[3rem] text-white space-y-6 relative border-t-8 border-primary shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary opacity-10 rounded-full translate-x-16 -translate-y-16" />
            <div className="flex items-center gap-4">
              <Target className="text-primary" size={40} />
              <h2 className="text-3xl font-bold">Mission</h2>
            </div>
            <p className="text-lg leading-relaxed opacity-80">
              Our mission is to provide world-class medical education that meets global standards and prepares students 
              for successful medical careers worldwide. We are committed to fostering an environment of academic 
              excellence, research, and professional growth.
            </p>
          </div>
          <div className="bg-primary-dark p-12 rounded-[3rem] text-white space-y-6 relative border-t-8 border-primary shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary opacity-10 rounded-full translate-x-16 -translate-y-16" />
            <div className="flex items-center gap-4">
              <Eye className="text-primary" size={40} />
              <h2 className="text-3xl font-bold">Vision</h2>
            </div>
            <p className="text-lg leading-relaxed opacity-80">
              Our vision is to be a globally recognized leader in medical education, producing highly competent and 
              compassionate medical professionals who contribute to the health and well-being of the global community.
            </p>
          </div>
        </div>
      </section>

      {/* Logo Section */}
      <section className="py-20 px-4 bg-white text-center space-y-8">
        <img src={gemsLogo} alt="Gems Educare" className="h-24 mx-auto" />
        <h2 className="text-4xl font-playfair font-black text-primary">Change Your Future</h2>
        <div className="max-w-2xl mx-auto flex flex-wrap justify-center gap-6 pt-8">
          <div className="flex items-center gap-2 font-bold text-text-primary">
            <CheckCircle className="text-support" size={20} /> Registered Consultancy
          </div>
          <div className="flex items-center gap-2 font-bold text-text-primary">
            <CheckCircle className="text-support" size={20} /> ISO 9001:2015 Certified
          </div>
          <div className="flex items-center gap-2 font-bold text-text-primary">
            <CheckCircle className="text-support" size={20} /> Verified Adam University Partner
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
