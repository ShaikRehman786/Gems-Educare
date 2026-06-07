import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Globe, MessageSquare, Clock, Send, Mail, ArrowRight } from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi! My name is ${formData.name}. %0APhone: ${formData.phone} %0AEmail: ${formData.email} %0AMessage: ${formData.message} %0AI want to know about MBBS admission at Adam University.`;
    window.open(`https://wa.me/919160404666?text=${text}`, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Contact Gems Educare | MBBS Consultancy Vijayawada | +91 91604 04666</title>
        <meta name="description" content="Get free counselling for MBBS in Kyrgyzstan. Visit our Vijayawada office or contact us on WhatsApp. Expert counselors ready to help you." />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-navy py-24 md:py-32 px-5 md:px-8 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-primary/80 to-navy" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <RevealOnScroll>
            <span className="text-accent font-bold tracking-[0.2em] text-[10px] uppercase mb-4 inline-block">Get In Touch</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-playfair mb-6 leading-tight text-balance">
              Contact{' '}
              <span className="text-accent">Us</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Free counselling for medical aspirants. Reach out and start your journey towards a global medical career.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Form + Office Section */}
      <section className="bg-white py-20 md:py-28 px-5 md:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          <RevealOnScroll>
            <div>
              <span className="text-accent font-bold tracking-[0.2em] text-[10px] uppercase mb-2 inline-block">Send a Message</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary font-playfair mb-8">Drop Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-text-primary mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-section border border-border rounded-xl px-5 py-4 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text-primary mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-section border border-border rounded-xl px-5 py-4 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-text-primary mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-section border border-border rounded-xl px-5 py-4 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-text-primary mb-2">Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-section border border-border rounded-xl px-5 py-4 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent text-white rounded-xl py-4 text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-accent-hover transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  Submit Inquiry <Send size={18} />
                </button>
              </form>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div className="space-y-6 md:space-y-8">
              <div>
                <span className="text-accent font-bold tracking-[0.2em] text-[10px] uppercase mb-2 inline-block">Visit Us</span>
                <h2 className="text-3xl md:text-4xl font-bold text-primary font-playfair mb-8">Our Office</h2>
              </div>
              <div className="space-y-4">
                {[
                  { icon: <MapPin size={20} />, title: 'Address', content: '2nd Floor, BLR Dream Heaven, 1-262/1, Poranki, Vijayawada, Andhra Pradesh 521137' },
                  { icon: <Phone size={20} />, title: 'Phone', content: '+91 91604 04666', href: 'tel:+919160404666' },
                  { icon: <MessageSquare size={20} />, title: 'WhatsApp', content: '+91 91604 04666', href: 'https://wa.me/919160404666' },
                  { icon: <Mail size={20} />, title: 'Email', content: 'info@gemseudtech.com', href: 'mailto:info@gemseudtech.com' },
                  { icon: <Globe size={20} />, title: 'Website', content: 'www.gemseudtech.com', href: 'http://www.gemseudtech.com' },
                  { icon: <Clock size={20} />, title: 'Office Hours', content: 'Mon–Sat 9AM–8PM | Sun 10AM–5PM' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 md:p-5 rounded-2xl bg-section border border-border hover:border-accent/20 transition-all duration-300">
                    <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-accent/5 text-accent flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-sm mb-0.5">{item.title}</h4>
                      {item.href ? (
                        <a href={item.href} className="text-text-secondary text-sm hover:text-accent transition-colors">
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-text-secondary text-sm leading-relaxed">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl overflow-hidden border border-border h-[260px] shadow-sm">
                <iframe
                  title="Gems Educare Location"
                  src="https://maps.google.com/maps?q=Poranki+Vijayawada+Andhra+Pradesh&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="bg-navy py-16 px-5 md:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
              <a
                href="https://wa.me/919160404666"
                className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 text-center hover:bg-white/10 transition-all duration-300 group"
              >
                <MessageSquare size={32} className="text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold text-lg mb-2">Chat on WhatsApp</h3>
                <p className="text-white/40 text-sm">Quick response within minutes</p>
              </a>
              <a
                href="tel:+919160404666"
                className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 text-center hover:bg-white/10 transition-all duration-300 group"
              >
                <Phone size={32} className="text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold text-lg mb-2">Call Us Directly</h3>
                <p className="text-white/40 text-sm">Mon–Sat 9AM–8PM</p>
              </a>
              <Link
                to="/fees"
                className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 text-center hover:bg-white/10 transition-all duration-300 group"
              >
                <ArrowRight size={32} className="text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold text-lg mb-2">View Fee Structure</h3>
                <p className="text-white/40 text-sm">Transparent pricing, no hidden charges</p>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
};

export default Contact;
