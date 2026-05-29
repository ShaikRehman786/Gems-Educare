import { Users, Award, CheckCircle, Globe, ShieldCheck, MapPin } from 'lucide-react';
import CountUp from './CountUp';
import RevealOnScroll from './RevealOnScroll';

const stats = [
  { icon: <Users size={22} />, end: '5000+', label: 'Students Guided', color: 'text-primary' },
  { icon: <Award size={22} />, end: '15+', label: 'Years Experience', color: 'text-accent' },
  { icon: <CheckCircle size={22} />, end: '100', suffix: '%', label: 'Admission Support', color: 'text-secondary' },
  { icon: <Globe size={22} />, end: 'WHO', label: 'Recognized University', color: 'text-primary' },
  { icon: <ShieldCheck size={22} />, end: 'NMC', label: 'Approved Pathway', color: 'text-accent' },
  { icon: <MapPin size={22} />, end: '25+', label: 'Countries', color: 'text-secondary' },
];

const SocialProofBar = () => {
  return (
    <section className="bg-white border-b border-border">
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-px bg-border">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white py-8 md:py-10 px-4 text-center group">
                <div className="flex justify-center mb-3">
                  <div className="p-2.5 rounded-xl bg-gray-50 group-hover:bg-gray-100 transition-colors">
                    <span className={stat.color}>{stat.icon}</span>
                  </div>
                </div>
                <div className={`text-xl md:text-2xl lg:text-3xl font-bold font-playfair ${stat.color} leading-none`}>
                  <CountUp end={stat.end} suffix={stat.suffix || ''} />
                </div>
                <div className="text-[9px] md:text-[10px] lg:text-xs font-bold text-text-secondary uppercase tracking-[0.15em] mt-2 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default SocialProofBar;
