import { useState } from 'react';

const FrequentlyAsked = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is your return policy?',
      answer: 'You can return any item within 30 days of purchase as long as it is in its original condition and packaging.'
    },
    {
      question: 'How do I track my order?',
      answer: 'You will receive an email with tracking information once your order has shipped. You can also track your order in the "My Orders" section of our website.'
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship to most countries worldwide. Shipping rates and delivery times vary depending on the destination.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept major credit cards, PayPal, and other secure payment methods.'
    },
    {
      question: 'How can I contact customer service?',
      answer: 'You can contact our customer service team via email at tagslux@gmail.com or through our contact form on the website.'
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Frequently Asked Questions</h2>
      <div className="bg-white shadow-sm rounded-lg p-8">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border-b border-gray-200">
            <button
              onClick={() => toggleFaq(index)}
              className="w-full text-left flex justify-between items-center py-4 px-6 text-gray-800 focus:outline-none"
            >
              <span className="text-xl font-medium">{faq.question}</span>
              <svg
                className={`w-6 h-6 transition-transform duration-200 ${
                  activeIndex === index ? 'transform rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {activeIndex === index && (
              <div className="py-4 px-6 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrequentlyAsked;
