import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Is the MBBS degree from Adam University valid in India?',
    a: 'Yes. Adam University is recognized by the National Medical Commission (NMC) India, WHO, and FAIMER. Graduates are eligible to appear for the FMGE/NEXT exam to practice in India.',
  },
  {
    q: 'What is the total cost of MBBS at Adam University?',
    a: 'The total approximate cost for the complete 5.5-year MBBS program is ₹16 Lakhs, including tuition fees, hostel, and documentation. This is significantly lower than private medical colleges in India.',
  },
  {
    q: 'Is there an Indian mess facility available?',
    a: 'Yes. Adam University has a dedicated Indian mess with experienced Indian chefs preparing both North Indian and South Indian cuisine. Vegetarian and non-vegetarian options are available with separate preparation areas.',
  },
  {
    q: 'Do I need to take an IELTS or TOEFL exam?',
    a: 'No. IELTS or TOEFL is not required for admission to Adam University. The entire MBBS curriculum is taught in English, and your 12th standard English qualification is sufficient.',
  },
  {
    q: 'Is NEET qualification mandatory for MBBS abroad?',
    a: 'Yes, as per NMC guidelines, NEET qualification is mandatory for Indian students seeking MBBS abroad. We assist you with the complete admission process including NEET documentation.',
  },
  {
    q: 'What is the duration of the MBBS program?',
    a: 'The MBBS program at Adam University is 5.5 years, which includes 5 years of academic study plus 1 year of compulsory internship. The curriculum follows international medical education standards.',
  },
  {
    q: 'Are separate hostels available for boys and girls?',
    a: 'Yes. Adam University provides separate hostel facilities for boys and girls with 24/7 security, CCTV surveillance, Indian wardens, high-speed WiFi, and all modern amenities.',
  },
  {
    q: 'What is the admission process timeline?',
    a: 'The admission process typically takes 4-6 weeks from document submission to visa approval. Our team handles all documentation, university enrollment, ministry procedures, and travel arrangements.',
  },
  {
    q: 'Can I get an education loan for studying MBBS abroad?',
    a: 'Yes. Gems Educare provides complete education loan assistance. We help with bank documentation, university admission letters, and all required paperwork to secure loans from leading Indian banks.',
  },
  {
    q: 'Is Kyrgyzstan safe for Indian students?',
    a: 'Kyrgyzstan is extremely safe for international students. Bishkek has a low crime rate and a welcoming environment. There is a growing Indian community and cultural familiarity for Indian students.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-border rounded-xl overflow-hidden bg-white hover:border-accent/20 transition-colors"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between p-5 md:p-6 text-left transition-colors"
          >
            <span className="font-semibold text-text-primary text-sm md:text-base pr-4">{faq.q}</span>
            <ChevronDown
              size={18}
              className={`text-accent flex-shrink-0 transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className="accordion-content"
            style={{
              maxHeight: openIndex === index ? '300px' : '0px',
              opacity: openIndex === index ? 1 : 0,
            }}
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0 border-t border-border mt-0">
              <p className="text-text-secondary text-sm leading-relaxed pt-4">{faq.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
