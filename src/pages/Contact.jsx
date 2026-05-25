import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, MapPin, Globe, MessageSquare, Clock, Send } from 'lucide-react';

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
        <meta name="description" content="Get free counselling for MBBS in Kyrgyzstan. Visit our Vijayawada office or contact us on WhatsApp." />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary py-20 px-4 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-black mb-6">Contact Us</h1>
        <p className="text-xl text-primary font-bold uppercase tracking-widest">Free Counselling for Medical Aspirants</p>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-border border-t-8 border-t-accent">
            <h2 className="text-3xl font-bold text-primary mb-8">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-text-primary mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    onChange={handleChange}
                    className="w-full bg-primary/5 border-2 border-transparent focus:border-accent rounded-lg p-4 outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-text-primary mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    onChange={handleChange}
                    className="w-full bg-primary/5 border-2 border-transparent focus:border-accent rounded-lg p-4 outline-none transition-all"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-text-primary mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  onChange={handleChange}
                    className="w-full bg-primary/5 border-2 border-transparent focus:border-accent rounded-lg p-4 outline-none transition-all"
                    placeholder="Enter email"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-text-primary mb-2">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  onChange={handleChange}
                    className="w-full bg-primary/5 border-2 border-transparent focus:border-accent rounded-lg p-4 outline-none transition-all"
                    placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white rounded-xl font-black py-4 rounded-lg text-lg flex items-center justify-center gap-2 hover:bg-navy transition-all shadow-lg"
              >
                Submit Inquiry <Send size={20} />
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-border border-t-8 border-t-accent space-y-8">
              <h2 className="text-3xl font-bold text-primary">Office Details</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary flex-shrink-0"><MapPin /></div>
                  <div>
                    <h4 className="font-bold text-primary">Address</h4>
                    <p className="text-text-secondary">
                      2nd Floor, BLR Dream Heaven, 1-262/1, Poranki,<br />
                      Vijayawada, Andhra Pradesh 521137
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary flex-shrink-0"><Phone /></div>
                  <div>
                    <h4 className="font-bold text-primary">Phone</h4>
                    <a href="tel:+919160404666" className="text-text-secondary hover:text-primary font-bold">+91 91604 04666</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary flex-shrink-0"><MessageSquare /></div>
                  <div>
                    <h4 className="font-bold text-primary">WhatsApp</h4>
                    <a href="https://wa.me/919160404666" className="text-text-secondary hover:text-primary font-bold">+91 91604 04666</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary flex-shrink-0"><Globe /></div>
                  <div>
                    <h4 className="font-bold text-primary">Website</h4>
                    <a href="http://www.gemseudtech.com" className="text-text-secondary hover:text-primary font-bold">www.gemseudtech.com</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary flex-shrink-0"><Clock /></div>
                  <div>
                    <h4 className="font-bold text-primary">Office Hours</h4>
                    <p className="text-text-secondary">Mon–Sat 9AM–8PM | Sun 10AM–5PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="rounded-[2rem] overflow-hidden shadow-2xl h-[300px] border-4 border-white border border-border">
              <iframe
                title="Gems Educare Location"
                src="https://maps.google.com/maps?q=Poranki+Vijayawada+Andhra+Pradesh&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
