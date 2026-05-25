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
      <section className="bg-gray-50 py-24 px-4 text-center border-b border-gray-100">
        <p className="text-primary font-bold tracking-[0.15em] text-[10px] uppercase mb-4">Empowering Future Doctors</p>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 font-playfair mb-6">About Gems Educare</h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">Your trusted partner in navigating international medical education.</p>
      </section>

      {/* WHY GEM EUDCARE */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div>
            <p className="text-primary font-bold tracking-[0.15em] text-[10px] uppercase mb-4">Why Gem Eudcare?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-playfair">Our Goal</h2>
          </div>
          <div className="bg-gray-50 p-12 rounded-2xl border border-gray-100 relative">
            <QuoteIcon className="absolute top-8 left-8 text-primary/10 w-16 h-16" />
            <p className="text-xl md:text-2xl leading-relaxed text-gray-700 italic font-playfair relative z-10">
              "Our goal is to empower every medical aspirant to become a doctor and to enable each and every student to get quality education services affordably, irrespective of caste, creed, religion, age, race, gender, and nationality but respective of equality, inclusion, and humanity."
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-bold tracking-[0.15em] text-[10px] uppercase mb-4">What We Stand For</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-playfair">Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'TRUTHFULNESS',
                desc: 'Truth is the hallmark of all our values, principles, morals, and work ethics. We believe in absolute transparency and honesty in all our dealings.',
                icon: <Shield className="text-primary" size={24} />
              },
              {
                title: 'EQUITY',
                desc: 'We believe education and healthcare are for all. We provide equal opportunities and resources to every student, ensuring no one is left behind.',
                icon: <Users className="text-primary" size={24} />
              },
              {
                title: 'CHANGE',
                desc: 'Change keeps us going, and good change is the focus of our innovation. We embrace constant improvement in our educational services.',
                icon: <Zap className="text-primary" size={24} />
              },
              {
                title: 'COMMITMENT',
                desc: 'When time goes hard, we go harder. Our commitment to student success goes beyond admission; we support them throughout their entire journey.',
                icon: <Heart className="text-primary" size={24} />
              },
              {
                title: 'SUPREMACY',
                desc: 'We do the best we can and chase perfection to achieve excellence. We strive for the highest standards in medical consultancy services.',
                icon: <Award className="text-primary" size={24} />
              },
              {
                title: 'SUSTAINABILITY',
                desc: 'We make sure to keep going economically, financially, environmentally, and socially. We build long-term relationships and sustainable paths.',
                icon: <Target className="text-primary" size={24} />
              }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-gray-100 flex flex-col items-start gap-4 hover:border-primary/30 transition-colors">
                <div className="bg-primary/5 p-3 rounded-lg">{value.icon}</div>
                <h3 className="text-sm font-bold text-gray-900 tracking-wide">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-playfair">Mission & Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-12 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Target size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 font-playfair">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                Adam University is dedicated to advancing healthcare through cutting-edge education, innovative research, and compassionate patient care. Our mission is to cultivate a diverse community of skilled healthcare professionals who excel in their respective fields, contributing to the well-being of individuals and communities worldwide.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                We strive to provide an exceptional and inclusive learning environment that fosters intellectual curiosity, critical thinking, and a commitment to lifelong learning. Our graduates will be empowered with the knowledge, skills, and ethical values necessary to navigate the evolving landscape of healthcare and make meaningful contributions to the advancement of medical science.
              </p>
            </div>
            <div className="bg-gray-50 p-12 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Eye size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 font-playfair">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                Adam University envisions a future where healthcare is transformed by our graduates, who are at the forefront of medical innovation, research, and practice. We aspire to be a global leader in medical education, known for producing visionary healthcare professionals who drive positive change and address the most pressing health challenges of our time.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                Our vision encompasses a collaborative and interdisciplinary approach, where our students, faculty, and alumni work together to push the boundaries of medical knowledge. In realizing our vision, we are committed to creating a culture of excellence, diversity, and inclusivity — a beacon of innovation and compassion, influencing the future of healthcare on a global scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Section */}
      <section className="py-24 px-4 bg-gray-50 border-t border-gray-100 text-center space-y-8">
        <img src={gemsLogo} alt="Gems Educare" className="h-16 mx-auto mb-8" />
        <h2 className="text-3xl font-bold text-gray-900 font-playfair italic">Change Your Future</h2>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-sm">
          Adam University occupies a leading position in national university rankings and is represented by students from more than 25 different countries. Ranked among Top Medical Colleges in Kyrgyzstan.
        </p>
        <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-6 py-8">
          {[
            'Registered Consultancy',
            'ISO 9001:2015 Certified',
            'Verified Adam University Partner',
            '5000+ Students Guided',
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 font-semibold text-gray-900 text-sm">
              <CheckCircle className="text-primary/60" size={16} /> {item}
            </div>
          ))}
        </div>
        <div className="pt-4">
          <a
            href="https://wa.me/919160404666"
            className="inline-block bg-primary text-white px-8 py-4 rounded text-sm font-bold uppercase tracking-wide hover:bg-primary-dark transition-colors"
          >
            Get Free Counselling Today
          </a>
        </div>
        <p className="text-gray-500 text-xs mt-8">
          2nd Floor, BLR Dream Heaven, 1-262/1, Poranki, Vijayawada, Andhra Pradesh 521137<br/>
          <a href="http://www.gemseudtech.com" className="text-primary hover:underline">www.gemseudtech.com</a> | +91 91604 04666
        </p>
      </section>
    </>
  );
};

const QuoteIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

export default About;
