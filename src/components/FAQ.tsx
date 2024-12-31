import React, { useState } from 'react';
import { ChevronDown, PackageSearch, Truck, DollarSign, Clock, ShieldCheck, Building } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  icon: React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    question: "What is the minimum order quantity (MOQ)?",
    answer: "Our MOQ varies by product: Wheat (1000 kg), Asafoetida (100 kg), Sugar (1000 kg), Rice (500 kg), and Chickpea (500 kg). Contact us for custom quantities.",
    icon: <PackageSearch className="w-5 h-5 text-amber-600" />
  },
  {
    question: "Do you offer product samples?",
    answer: "Yes, we provide samples for bulk orders. Sample quantities and charges may vary by product. Please contact our sales team for sample requests.",
    icon: <ShieldCheck className="w-5 h-5 text-amber-600" />
  },
  {
    question: "What are your delivery terms?",
    answer: "We offer door-step delivery across India. Delivery time typically ranges from 3-7 business days depending on location. We also support ex-factory pickup.",
    icon: <Truck className="w-5 h-5 text-amber-600" />
  },
  {
    question: "What are your payment terms?",
    answer: "We accept NEFT/RTGS, Letter of Credit (LC) for bulk orders, and advance payment. Credit terms are available for regular customers after verification.",
    icon: <DollarSign className="w-5 h-5 text-amber-600" />
  },
  {
    question: "How long does order processing take?",
    answer: "Standard orders are processed within 24-48 hours. Bulk orders may require 3-5 business days depending on quantity and current stock levels.",
    icon: <Clock className="w-5 h-5 text-amber-600" />
  },
  {
    question: "Do you serve B2B clients?",
    answer: "Yes, we specialize in B2B supply. We serve restaurants, food manufacturers, distributors, and retail chains with customized packaging and delivery options.",
    icon: <Building className="w-5 h-5 text-amber-600" />
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our products, services, and business terms.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  {faq.icon}
                  <span className="text-left font-semibold text-gray-800">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 
                    ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 bg-white rounded-b-xl shadow-md
                  ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="p-6 text-gray-600">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 