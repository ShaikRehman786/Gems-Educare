import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, MessageSquare, Download, AlertCircle } from 'lucide-react';
import FadeInUp from '../components/FadeInUp';

const Fees = () => {
  const feeData = [
    { year: '1st Year', sem: '1st Semester',                tuition: '$3,800',  tuitionInr: '₹3,62,067',  hostel: '$1,150',   hostelInr: '₹1,00,000' },
    { year: '1st Year', sem: '2nd Semester',                tuition: '$1,800',  tuitionInr: '₹1,71,505',  hostel: '$1,150',   hostelInr: '₹1,00,000' },
    { year: '2nd Year', sem: '3rd Semester',                tuition: '$1,800',  tuitionInr: '₹1,71,505',  hostel: 'Optional', hostelInr: 'Optional' },
    { year: '2nd Year', sem: '4th Semester',                tuition: '$1,800',  tuitionInr: '₹1,71,505',  hostel: 'Optional', hostelInr: 'Optional' },
    { year: '3rd Year', sem: '5th Semester',                tuition: '$1,800',  tuitionInr: '₹1,71,505',  hostel: 'Optional', hostelInr: 'Optional' },
    { year: '3rd Year', sem: '6th Semester',                tuition: '$1,800',  tuitionInr: '₹1,71,505',  hostel: 'Optional', hostelInr: 'Optional' },
    { year: '4th Year', sem: '7th Semester',                tuition: '$1,800',  tuitionInr: '₹1,71,505',  hostel: 'Optional', hostelInr: 'Optional' },
    { year: '4th Year', sem: '8th Semester',                tuition: '$1,800',  tuitionInr: '₹1,71,505',  hostel: 'Optional', hostelInr: 'Optional' },
    { year: '5th Year', sem: '9th Semester',                tuition: '$1,800',  tuitionInr: '₹1,71,505',  hostel: 'Optional', hostelInr: 'Optional' },
    { year: '5th Year', sem: '10th Semester (Internship)',  tuition: 'Optional', tuitionInr: 'Optional',   hostel: 'Optional', hostelInr: 'Optional' },
    { year: '5th Year', sem: '11th Semester (Internship)',  tuition: 'Optional', tuitionInr: 'Optional',   hostel: 'Optional', hostelInr: 'Optional' },
  ];

  return (
    <>
      <Helmet>
        <title>MBBS Fee Structure Adam University 2025-26 | ₹18L | Gems Educare</title>
        <meta name="description" content="Detailed fee structure for MBBS at Adam University, Kyrgyzstan. Total package around ₹18L including tuition and admission. Transparent, no hidden charges." />
      </Helmet>

      {/* Hero */}
      <section className="bg-gray-50 py-24 px-4 text-center border-b border-gray-100">
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-primary font-bold tracking-[0.15em] text-[10px] uppercase">Adam University School of Medicine</p>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 font-playfair">Fee Structure 2025–2026</h1>
          <div className="text-6xl md:text-8xl font-bold text-gray-900 font-playfair py-4">₹17–18<span className="text-4xl text-gray-400">L</span></div>
          <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Approx Total Cost (5.5 Years)</p>
          <div className="mt-8 inline-block bg-white px-6 py-2 rounded border border-gray-200 text-xs font-bold uppercase tracking-widest text-primary">
            Transparent & No Hidden Charges
          </div>
        </div>
      </section>

      {/* Quick Fee Cards */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-bold tracking-[0.15em] text-[10px] uppercase mb-4">Initial Costs</p>
            <h2 className="text-3xl font-bold text-gray-900">Documentation & Processing</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-10 rounded-xl border border-gray-100 hover:border-primary transition-colors">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Documentation & Consulting Fee</h3>
              <div className="text-4xl font-bold text-gray-900 font-playfair mb-8">₹1,50,000</div>
              <ul className="text-sm text-gray-600 space-y-3">
                {['Translation of documents', 'University documentation', 'Ministry documentation', 'Visa documentation', 'Document attestation', 'Police registration & clearance'].map((i, idx) => (
                  <li key={idx} className="flex items-start gap-3"><CheckCircle size={16} className="text-primary/60 flex-shrink-0 mt-0.5" />{i}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-10 rounded-xl border border-gray-100 hover:border-primary transition-colors">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Processing & Travelling Fee</h3>
              <div className="text-4xl font-bold text-gray-900 font-playfair mb-8">₹75,000</div>
              <ul className="text-sm text-gray-600 space-y-3">
                {['One-way flight ticket', 'Immigration clearance', 'Pickup & drop (airport to hostel)', 'Residential permissions'].map((i, idx) => (
                  <li key={idx} className="flex items-start gap-3"><CheckCircle size={16} className="text-primary/60 flex-shrink-0 mt-0.5" />{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Main Table — Semester Wise */}
      <section className="py-24 px-4 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-bold tracking-[0.15em] text-[10px] uppercase mb-4">Detailed Breakdown</p>
            <h2 className="text-3xl font-bold text-gray-900">Semester Wise Fee Structure</h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[800px]">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="p-6 text-xs font-bold text-gray-500 uppercase tracking-wider bg-gray-50/50">Duration</th>
                    <th className="p-6 text-xs font-bold text-gray-500 uppercase tracking-wider bg-gray-50/50">Semester</th>
                    <th className="p-6 text-xs font-bold text-gray-500 uppercase tracking-wider bg-gray-50/50">Tuition (USD)</th>
                    <th className="p-6 text-xs font-bold text-gray-500 uppercase tracking-wider bg-gray-50/50">Approx (INR)</th>
                    <th className="p-6 text-xs font-bold text-gray-500 uppercase tracking-wider bg-gray-50/50">Hostel Fees</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800">
                  {feeData.map((row, idx) => (
                    <tr key={idx} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                      <td className="p-6 font-semibold text-gray-900 text-sm">{row.year}</td>
                      <td className="p-6 font-medium text-gray-600 text-sm">{row.sem}</td>
                      <td className="p-6 font-bold text-gray-900 text-sm">{row.tuition}</td>
                      <td className="p-6 text-gray-500 text-sm">{row.tuitionInr}</td>
                      <td className={`p-6 text-sm font-medium ${row.hostel === 'Optional' ? 'text-gray-400 italic' : 'text-primary font-bold bg-primary/[0.02]'}`}>
                        {row.hostel === 'Optional' ? 'Optional' : `${row.hostel} / ${row.hostelInr}`}
                      </td>
                    </tr>
                  ))}
                  {/* Total Row */}
                  <tr className="bg-gray-900 text-white font-bold border-t border-gray-900">
                    <td className="p-6 text-sm" colSpan={2}>Total (5.5 Years — 11 Semesters)</td>
                    <td className="p-6 text-sm text-primary">USD 18,200</td>
                    <td className="p-6 text-sm text-primary">Approx. ₹17,34,000</td>
                    <td className="p-6 text-sm text-primary">USD 2,300 / ₹2,19,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-white p-10 rounded-xl border border-gray-100 flex gap-6 items-start">
            <AlertCircle className="text-primary flex-shrink-0" size={24} />
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6 font-playfair">Important Notes</h3>
              <ul className="space-y-4 text-gray-600 text-sm">
                <li className="flex items-start gap-3"><CheckCircle size={16} className="text-primary/60 mt-0.5 flex-shrink-0" /> Medical Assistance: $100 mandatory per year</li>
                <li className="flex items-start gap-3"><CheckCircle size={16} className="text-primary/60 mt-0.5 flex-shrink-0" /> 1st Semester fee includes entry, extension & conversion to student visa</li>
                <li className="flex items-start gap-3"><CheckCircle size={16} className="text-primary/60 mt-0.5 flex-shrink-0" /> First year hostel is <strong className="text-gray-900">mandatory</strong> — Food/Mess: $150 USD/month | Accommodation: $50 USD/month</li>
                <li className="flex items-start gap-3"><CheckCircle size={16} className="text-primary/60 mt-0.5 flex-shrink-0" /> Visa renewal fees applicable as per immigration authorities</li>
                <li className="flex items-start gap-3"><CheckCircle size={16} className="text-primary/60 mt-0.5 flex-shrink-0" /> USD to INR exchange rates on day of transaction apply</li>
                <li className="flex items-start gap-3 font-semibold text-gray-900"><CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" /> Education Loan Assistance Available — ABSOLUTELY NO HIDDEN CHARGES</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Loan */}
      <section className="py-24 px-4 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto bg-gray-50 rounded-2xl p-12 flex flex-col md:flex-row items-center justify-between gap-12 border border-gray-100">
          <div className="flex-1 space-y-6">
            <p className="text-primary font-bold tracking-[0.15em] text-[10px] uppercase">Financial Support</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-playfair">Education Loan Assistance</h2>
            <p className="text-gray-600 leading-relaxed max-w-xl">
              Gems Educare helps students in securing Education Loans from leading banks. 
              We provide all necessary documents required for the loan process including University Admission Letters.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <span className="text-sm font-semibold text-gray-900 flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Bank Documentation</span>
              <span className="text-sm font-semibold text-gray-900 flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> 100% Genuine Guidance</span>
            </div>
          </div>
          <div className="flex-shrink-0">
            <a
              href="https://wa.me/919160404666?text=I%20want%20to%20know%20about%20Education%20Loan%20for%20MBBS"
              className="bg-primary text-white px-8 py-4 rounded text-sm font-bold uppercase tracking-wide hover:bg-primary-dark transition-colors inline-block"
            >
              Get Loan Assistance
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-24 px-4 text-center border-t border-gray-100">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-gray-900 font-playfair">Get Your Fee Structure PDF</h2>
          <p className="text-gray-500">Download the detailed fee breakdown for Adam University.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/919160404666"
              className="bg-[#25D366] text-white px-8 py-4 rounded text-sm font-bold uppercase tracking-wide flex items-center justify-center gap-2 hover:bg-[#1ebe5d] transition-colors"
            >
              <MessageSquare size={18} /> Request Fee PDF
            </a>
            <button
              onClick={() => window.print()}
              className="border border-gray-200 text-gray-900 px-8 py-4 rounded text-sm font-bold uppercase tracking-wide flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
            >
              <Download size={18} /> Print Table
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Fees;
