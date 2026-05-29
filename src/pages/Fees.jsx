import { Helmet } from 'react-helmet-async';
import { CheckCircle, Download, AlertCircle, ArrowRight, Banknote, GraduationCap, Building2, ShieldCheck } from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll';
import SectionHeading from '../components/SectionHeading';
import feePdf from "../assets/gemsbr.pdf";

const Fees = () => {
  const feeData = [
    { year: '1st Year', sem: '1st Semester', tuition: '$3,800', tuitionInr: '₹3,62,067', hostel: '$1,150', hostelInr: '₹1,00,000' },
    { year: '1st Year', sem: '2nd Semester', tuition: '$1,800', tuitionInr: '₹1,71,505', hostel: '$1,150', hostelInr: '₹1,00,000' },
    { year: '2nd Year', sem: '3rd Semester', tuition: '$1,800', tuitionInr: '₹1,71,505', hostel: 'Optional', hostelInr: 'Optional' },
    { year: '2nd Year', sem: '4th Semester', tuition: '$1,800', tuitionInr: '₹1,71,505', hostel: 'Optional', hostelInr: 'Optional' },
    { year: '3rd Year', sem: '5th Semester', tuition: '$1,800', tuitionInr: '₹1,71,505', hostel: 'Optional', hostelInr: 'Optional' },
    { year: '3rd Year', sem: '6th Semester', tuition: '$1,800', tuitionInr: '₹1,71,505', hostel: 'Optional', hostelInr: 'Optional' },
    { year: '4th Year', sem: '7th Semester', tuition: '$1,800', tuitionInr: '₹1,71,505', hostel: 'Optional', hostelInr: 'Optional' },
    { year: '4th Year', sem: '8th Semester', tuition: '$1,800', tuitionInr: '₹1,71,505', hostel: 'Optional', hostelInr: 'Optional' },
    { year: '5th Year', sem: '9th Semester', tuition: '$1,800', tuitionInr: '₹1,71,505', hostel: 'Optional', hostelInr: 'Optional' },
    { year: '5th Year', sem: '10th Semester (Internship)', tuition: 'Optional', tuitionInr: 'Optional', hostel: 'Optional', hostelInr: 'Optional' },
    { year: '5th Year', sem: '11th Semester (Internship)', tuition: 'Optional', tuitionInr: 'Optional', hostel: 'Optional', hostelInr: 'Optional' },
  ];

  return (
    <>
      <Helmet>
        <title>MBBS Fee Structure Adam University 2025-26 | ₹16 Lakhs | Gems Educare</title>
        <meta name="description" content="Complete fee structure for MBBS at Adam University, Kyrgyzstan. Total package ₹16 Lakhs. Transparent pricing, no hidden charges. Education loan assistance available." />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-navy py-24 md:py-32 px-5 md:px-8 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-primary/80 to-navy" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <RevealOnScroll>
            <span className="text-accent font-bold tracking-[0.2em] text-[10px] uppercase mb-4 inline-block">Adam University • 2025–2026</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-playfair mb-6 leading-tight text-balance">
              Fee{' '}
              <span className="text-accent">Structure</span>
            </h1>
          </RevealOnScroll>
        </div>
      </section>

      {/* Cost Summary */}
      <section className="bg-white py-20 md:py-28 px-5 md:px-8 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            subtitle="Total Investment"
            title="Complete Program Cost: ₹16 Lakhs"
            description="Everything included — tuition, hostel, documentation, and processing. Absolutely no hidden charges."
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5">
            {[
              { icon: <GraduationCap size={22} />, label: 'Total Tuition', value: '₹16 Lakhs', sub: '11 semesters' },
              { icon: <Building2 size={22} />, label: 'Hostel (Year 1)', value: '₹2 Lakhs', sub: 'Mandatory first year' },
              { icon: <ShieldCheck size={22} />, label: 'Documentation', value: '₹2.25 Lakhs', sub: 'One-time fee' },
              { icon: <Banknote size={22} />, label: 'Education Loan', value: 'Available', sub: 'Bank assistance' },
            ].map((item, idx) => (
              <RevealOnScroll key={idx} delay={idx * 0.05}>
                <div className="bg-section rounded-2xl border border-border p-6 text-center hover:shadow-md hover:border-accent/20 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-accent/5 text-accent flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="text-[10px] font-bold text-text-secondary uppercase tracking-wider mb-1">{item.label}</div>
                  <div className="text-xl md:text-2xl font-bold text-primary font-playfair">{item.value}</div>
                  <div className="text-xs text-text-secondary mt-1">{item.sub}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Breakdown */}
      <section className="bg-section py-20 md:py-28 px-5 md:px-8 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            subtitle="Detailed Breakdown"
            title="Semester Wise Fee Structure"
            description="Complete transparent breakdown of tuition and hostel fees across all semesters."
          />
          <RevealOnScroll>
            <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left min-w-[750px]">
                  <thead>
                    <tr className="bg-navy">
                      <th className="p-5 text-xs font-bold text-white uppercase tracking-wider">Duration</th>
                      <th className="p-5 text-xs font-bold text-white uppercase tracking-wider">Semester</th>
                      <th className="p-5 text-xs font-bold text-white uppercase tracking-wider">Tuition (USD)</th>
                      <th className="p-5 text-xs font-bold text-white uppercase tracking-wider">Approx (INR)</th>
                      <th className="p-5 text-xs font-bold text-white uppercase tracking-wider">Hostel</th>
                    </tr>
                  </thead>
                  <tbody className="text-text-primary">
                    {feeData.map((row, idx) => (
                      <tr key={idx} className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors">
                        <td className="p-5 font-semibold text-sm">{row.year}</td>
                        <td className="p-5 text-text-secondary text-sm">{row.sem}</td>
                        <td className="p-5 font-semibold text-sm">{row.tuition}</td>
                        <td className="p-5 text-text-secondary text-sm">{row.tuitionInr}</td>
                        <td className={`p-5 text-sm font-medium ${row.hostel === 'Optional' ? 'text-text-secondary italic' : 'text-primary font-bold'}`}>
                          {row.hostel === 'Optional' ? 'Optional' : `${row.hostel}`}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-navy text-white font-bold">
                      <td className="p-5 text-sm" colSpan={2}>Total (5.5 Years — 11 Semesters)</td>
                      <td className="p-5 text-sm text-accent">USD 18,200</td>
                      <td className="p-5 text-sm text-accent">Approx. ₹16,00,000</td>
                      <td className="p-5 text-sm text-accent">Optional after Yr 1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="bg-white rounded-2xl border border-border p-6 md:p-8 mt-6 flex gap-4 md:gap-6 items-start">
              <AlertCircle size={22} className="text-accent flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-base md:text-lg font-bold text-primary mb-3 font-playfair">Important Notes</h3>
                <ul className="space-y-2.5 text-text-secondary text-sm">
                  <li className="flex items-start gap-3"><CheckCircle size={15} className="text-accent mt-0.5 flex-shrink-0" /> Medical Insurance: $100 mandatory per year</li>
                  <li className="flex items-start gap-3"><CheckCircle size={15} className="text-accent mt-0.5 flex-shrink-0" /> 1st Semester fee includes entry, extension & conversion to student visa</li>
                  <li className="flex items-start gap-3"><CheckCircle size={15} className="text-accent mt-0.5 flex-shrink-0" /> First year hostel is <strong className="text-text-primary">mandatory</strong> — Food/Mess: $150/month | Accommodation: $50/month</li>
                  <li className="flex items-start gap-3"><CheckCircle size={15} className="text-accent mt-0.5 flex-shrink-0" /> USD to INR exchange rates on day of transaction apply</li>
                  <li className="flex items-start gap-3 font-semibold text-primary"><CheckCircle size={15} className="text-accent mt-0.5 flex-shrink-0" /> Education Loan Assistance Available — ABSOLUTELY NO HIDDEN CHARGES</li>
                </ul>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-white py-20 md:py-28 px-5 md:px-8 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            subtitle="Included Services"
            title="What's Included in Your Fee"
            description="Our comprehensive package covers everything you need for a smooth transition."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            <RevealOnScroll>
              <div className="bg-section rounded-2xl border border-border p-6 md:p-8 hover:shadow-md hover:border-accent/20 transition-all duration-300 h-full">
                <h3 className="text-xs font-bold text-accent uppercase tracking-wider mb-5">Documentation & Consulting — ₹1,50,000</h3>
                <ul className="space-y-3">
                  {['Translation of documents', 'University documentation', 'Ministry documentation', 'Visa documentation', 'Document attestation', 'Police registration & clearance'].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <CheckCircle size={15} className="text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <div className="bg-section rounded-2xl border border-border p-6 md:p-8 hover:shadow-md hover:border-accent/20 transition-all duration-300 h-full">
                <h3 className="text-xs font-bold text-accent uppercase tracking-wider mb-5">Processing & Travelling — ₹75,000</h3>
                <ul className="space-y-3">
                  {['One-way flight ticket', 'Immigration clearance', 'Pickup & drop (airport to hostel)', 'Residential permits'].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <CheckCircle size={15} className="text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Education Loan */}
      <section className="bg-section py-20 md:py-28 px-5 md:px-8 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <RevealOnScroll>
            <div className="bg-white rounded-2xl border border-border p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
              <div className="space-y-4 flex-1">
                <div className="flex items-center gap-3">
                  <Banknote size={22} className="text-accent" />
                  <span className="text-accent font-bold tracking-[0.2em] text-[10px] uppercase">Financial Support</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary font-playfair">Education Loan Assistance</h2>
                <p className="text-text-secondary leading-relaxed max-w-xl text-sm">
                  Gems Educare helps students secure education loans from leading banks. We provide all necessary documents required for the loan process, including University Admission Letters.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="text-sm font-semibold text-text-primary flex items-center gap-2">
                    <CheckCircle size={15} className="text-accent" /> Bank Documentation
                  </span>
                  <span className="text-sm font-semibold text-text-primary flex items-center gap-2">
                    <CheckCircle size={15} className="text-accent" /> 100% Genuine Guidance
                  </span>
                </div>
              </div>
              <a
                href="https://wa.me/919160404666?text=I%20want%20to%20know%20about%20Education%20Loan%20for%20MBBS"
                className="bg-accent text-white px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-primary transition-all duration-300 inline-flex items-center gap-2 flex-shrink-0 shadow-sm whitespace-nowrap"
              >
                Get Loan Assistance <ArrowRight size={15} />
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 md:py-28 px-5 md:px-8 lg:px-10 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <SectionHeading
            subtitle="Need More Details?"
            title="Get Your Fee Structure PDF"
            description="Download the complete, detailed fee breakdown for Adam University's MBBS program."
            light
            center
          />
     <RevealOnScroll>
  <div className="flex flex-col sm:flex-row justify-center gap-4">
    
    <a
      href="https://wa.me/919160404666"
      className="bg-accent text-white px-10 py-5 rounded-xl text-sm font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 hover:bg-white hover:text-primary transition-all duration-300 shadow-lg"
    >
      Request Fee PDF
    </a>

    <a
      href={feePdf}
      download
      className="border-2 border-white/20 text-white px-10 py-5 rounded-xl text-sm font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300"
    >
      <Download size={18} />
      Download PDF
    </a>

  </div>
</RevealOnScroll>
        </div>
      </section>
    </>
  );
};

export default Fees;
