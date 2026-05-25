import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Wifi, ShieldCheck, Bus, Hotel } from 'lucide-react';
import hostelBuilding from '../assets/gems/hostel_building.png';

const HostelFood = () => {
  return (
    <>
      <Helmet>
        <title>Hostel & Food Facilities | Adam University | Gems Educare</title>
        <meta name="description" content="Discover premium hostel and authentic Indian food facilities at Adam University, Kyrgyzstan. Safe and comfortable stay for international students." />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary py-20 px-4 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-black mb-6">Hostel & Food</h1>
        <p className="text-xl font-bold uppercase tracking-widest text-white/80">Your Home Away From Home</p>
      </section>

      {/* Details */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img src={hostelBuilding} alt="Hostel Building" className="rounded-3xl shadow-2xl border-4 border-white" />
              <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-2xl shadow-xl hidden md:block border border-border">
                <p className="text-white font-black text-xl italic">Separate Boys & Girls</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-4xl font-bold text-primary">Premium Accommodation</h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              Gems Educare ensures students focus on their studies while we handle their comfort. Our partner hostels are designed specifically for international medical students, offering a secure, comfortable, and study-friendly environment.
            </p>
            <div className="space-y-4">
              {[
                "Separate Boys Hostel", "Separate Girls Hostel", "Indian Warden", "24/7 Security",
                "24/7 CCTV Monitoring", "High Speed WiFi", "Secure Accommodation"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="text-primary" size={20} />
                  <span className="font-medium text-text-primary">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Food Section */}
      <section className="bg-primary/5 py-20 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Authentic Indian Mess</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-10 rounded-2xl shadow-md border border-border transition-transform hover:-translate-y-2">
              <Bus className="mx-auto text-primary mb-4" size={48} />
              <h3 className="text-2xl font-bold text-primary mb-4">Indian Chefs</h3>
              <p className="text-text-secondary">Experienced Indian chefs preparing fresh, hygienic, and authentic meals daily.</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-md border border-border transition-transform hover:-translate-y-2">
              <Hotel className="mx-auto text-primary mb-4" size={48} />
              <h3 className="text-2xl font-bold text-primary mb-4">North & South Indian</h3>
              <p className="text-text-secondary">Dedicated menus for both North Indian and South Indian cuisines to suit every palate.</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-md border border-border transition-transform hover:-translate-y-2">
              <ShieldCheck className="mx-auto text-primary mb-4" size={48} />
              <h3 className="text-2xl font-bold text-primary mb-4">Veg & Non-Veg</h3>
              <p className="text-text-secondary">Separate preparation areas for vegetarian and non-vegetarian food ensuring strict hygiene.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HostelFood;
