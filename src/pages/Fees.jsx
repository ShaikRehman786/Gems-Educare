import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Info, MessageSquare, Download } from 'lucide-react';
import FadeInUp from '../components/FadeInUp';

const Fees = () => {
  const feeData = [
    { sem: '1st Semester', tuition: '$3,800', tuitionInr: '₹3,23,000', hostel: '$1,150', hostelInr: '₹97,750' },
    { sem: '2nd Semester', tuition: '$1,800', tuitionInr: '₹1,53,000', hostel: '$1,150', hostelInr: '₹97,750' },
    { sem: '3rd Semester', tuition: '$1,800', tuitionInr: '₹1,53,000', hostel: 'Optional', hostelInr: '-' },
    { sem: '4th Semester', tuition: '$1,800', tuitionInr: '₹1,53,000', hostel: 'Optional', hostelInr: '-' },
    { sem: '5th Semester', tuition: '$1,800', tuitionInr: '₹1,53,000', hostel: 'Optional', hostelInr: '-' },
    { sem: '6th Semester', tuition: '$1,800', tuitionInr: '₹1,53,000', hostel: 'Optional', hostelInr: '-' },
    { sem: '7th Semester', tuition: '$1,800', tuitionInr: '₹1,53,000', hostel: 'Optional', hostelInr: '-' },
    { sem: '8th Semester', tuition: '$1,800', tuitionInr: '₹1,53,000', hostel: 'Optional', hostelInr: '-' },
    { sem: '9th Semester', tuition: '$1,800', tuitionInr: '₹1,53,000', hostel: 'Optional', hostelInr: '-' },
    { sem: '10th Semester', tuition: '$1,800', tuitionInr: '₹1,53,000', hostel: 'Optional', hostelInr: '-' },
  ];

  return (
    <>
      <Helmet>
        <title>MBBS Fee Structure Adam University 2025-26 | ₹18L | Gems Educare</title>
        <meta name="description" content="Detailed fee structure for MBBS at Adam University, Kyrgyzstan. Total package around ₹18L including tuition and admission." />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary py-20 px-4 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-6">Fee Structure 2025-2026</h1>
          <div className="text-6xl md:text-8xl font-black text-primary font-playfair mb-4">₹17–18L</div>
          <p className="text-xl text-primary font-bold uppercase tracking-widest">Approx Total Cost</p>
          <div className="mt-6 inline-block bg-white/10 px-6 py-2 rounded-full border border-white/20 text-sm font-bold uppercase tracking-widest">
            No Hidden Charges Statement
          </div>
        </div>
      </section>

      {/* Main Table */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="overflow-x-auto rounded-xl shadow-2xl border-t-8 border-primary border border-border">
            <table className="w-full text-left bg-white min-w-[800px]">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-6">Semester</th>
                  <th className="p-6">Tuition Fee (USD)</th>
                  <th className="p-6">Tuition Fee (INR approx)</th>
                  <th className="p-6">Hostel & Food (USD)</th>
                  <th className="p-6">Hostel & Food (INR approx)</th>
                </tr>
              </thead>
              <tbody className="text-text-primary">
                {feeData.map((row, idx) => (
                  <tr key={idx} className="border-b border-border hover:bg-primary/5 transition-colors">
                    <td className="p-6 font-bold">{row.sem}</td>
                    <td className="p-6">{row.tuition}</td>
                    <td className="p-6 text-text-secondary">{row.tuitionInr}</td>
                    <td className="p-6">{row.hostel}</td>
                    <td className="p-6 text-text-secondary">{row.hostelInr}</td>
                  </tr>
                ))}
                <tr className="bg-primary-dark text-white font-bold">
                  <td className="p-6 text-xl">Total Package</td>
                  <td className="p-6 text-xl" colSpan={4}>Approx ₹17,00,000 – ₹18,00,000 (Based on USD Rate)</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-12 bg-white p-8 rounded-2xl border-l-8 border-primary border border-border shadow-lg">
            <div className="flex gap-4 items-start">
              <Info className="text-primary flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Fee Policy:</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-center gap-2 font-medium"><CheckCircle size={16} className="text-primary" /> USD calculated at indicative rates. Actual rate at time of payment will apply.</li>
                  <li className="flex items-center gap-2 font-medium"><CheckCircle size={16} className="text-primary" /> Hostel and Food charges include separate Boys & Girls hostels with Indian Mess.</li>
                  <li className="flex items-center gap-2 font-medium"><CheckCircle size={16} className="text-primary" /> Pay on Arrival option available for semester fees.</li>
                  <li className="flex items-center gap-2 font-medium font-bold text-primary italic"><CheckCircle size={16} className="text-primary" /> ABSOLUTELY NO HIDDEN CHARGES / NO DONATIONS.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Costs */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary">Admission & Processing Fees</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-lg border-t-8 border-primary text-center transform hover:-translate-y-2 transition-transform border border-border">
              <h3 className="text-xl font-bold text-primary uppercase mb-4">Documentation Fee</h3>
              <div className="text-4xl font-black text-primary mb-6">₹1,50,000</div>
              <p className="text-text-secondary text-sm">One-time payment for complete documentation and attestation.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-lg border-t-8 border-primary text-center transform hover:-translate-y-2 transition-transform border border-border">
              <h3 className="text-xl font-bold text-primary uppercase mb-4">Processing Fee</h3>
              <div className="text-4xl font-black text-primary mb-6">₹75,000</div>
              <p className="text-text-secondary text-sm">One-time payment for visa processing and university enrollment.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-lg border-t-8 border-primary text-center transform hover:-translate-y-2 transition-transform border border-border">
              <h3 className="text-xl font-bold text-primary uppercase mb-4">Travelling Fee</h3>
              <div className="text-4xl font-black text-primary mb-6">Flight Dependent</div>
              <p className="text-text-secondary text-sm">Includes flight tickets and organized group departure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Loan */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-12 text-white flex flex-col md:flex-row items-center gap-12 overflow-hidden relative shadow-2xl border-t-8 border-primary">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-10 rounded-full translate-x-32 -translate-y-32" />
          <div className="flex-1 space-y-6 relative z-10">
            <h2 className="text-4xl font-bold">Education Loan Support</h2>
            <p className="text-lg opacity-80">
              Gems Educare helps students in securing Education Loans from leading banks. 
              We provide all necessary documents required for the loan process including University Admission Letters.
            </p>
            <div className="flex items-center gap-4">
              <div className="bg-white/10 px-6 py-3 rounded-full font-bold">Bank Documentation Support</div>
              <div className="bg-white/10 px-6 py-3 rounded-full font-bold">100% Genuine Guidance</div>
            </div>
          </div>
          <div className="flex-shrink-0 relative z-10">
            <a
              href="https://wa.me/919160404666?text=I%20want%20to%20know%20about%20Education%20Loan%20for%20MBBS"
              className="bg-primary text-white px-8 py-4 rounded-md font-bold text-lg hover:scale-105 transition-transform inline-block"
            >
              Loan Assistance
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold text-primary">Get Your Fee Structure PDF</h2>
          <p className="text-lg text-text-secondary">Download the detailed fee breakdown for Adam University.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/919160404666"
              className="bg-[#25D366] text-white px-10 py-4 rounded-md font-bold text-xl flex items-center justify-center gap-3 hover:shadow-xl transition-shadow shadow-lg"
            >
              <MessageSquare /> Request Fee PDF
            </a>
            <button
              onClick={() => window.print()}
              className="bg-primary text-white px-10 py-4 rounded-md font-bold text-xl flex items-center justify-center gap-3 hover:bg-primary-dark transition-colors shadow-lg"
            >
              <Download size={20} /> Print Table
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Fees;
