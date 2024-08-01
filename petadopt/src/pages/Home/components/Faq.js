import React, { useState } from 'react';

const Accord = ({ p }) => {
  const [show, setShow] = useState(false);
  const { que, description } = p;

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setShow(!show)}
        className="flex items-center justify-between w-full py-4 px-5 text-left text-gray-800 hover:bg-purple-50 transition-colors duration-300"
      >
        <span className="font-medium">{que}</span>
        <svg
          className={`w-5 h-5 text-purple-600 transform transition-transform duration-300 ${show ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {show && (
        <div className="p-5 bg-white">
          <p className="text-gray-600">{description}</p>
        </div>
      )}
    </div>
  );
};

export const Faq = () => {
  const faqs = [
    {
      id: 1,
      que: 'How do I adopt a pet?',
      description: 'To adopt a pet, browse our available pets online, visit our shelter, and fill out an adoption application.'
    },
    {
      id: 2,
      que: 'Can I adopt if I live in an apartment?',
      description: 'Yes, you can adopt a pet if you live in an apartment. Some pets may require more space and outdoor time than others. We can help you find a pet that fits your living situation.'
    },
    {
      id: 3,
      que: 'What are the adoption fees?',
      description: 'Adoption fees vary depending on the type of pet and its age. Typically, adoption fees range from $50 to $200, which covers vaccinations, spaying/neutering, and a health check-up. Please check our website for specific fee details.'
    },
    {
      id: 4,
      que: 'What should I prepare before adopting a pet?',
      description: 'Before adopting a pet, prepare your home by setting up a designated space for the pet with a bed, food and water bowls, and toys. Make sure you have a supply of pet food, a collar and leash for dogs, and a litter box for cats. Pet-proof your home by removing hazards.'
    }
  ];

  return (
    <div className="bg-gradient-to-r from-purple-100 to-blue-100 py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-center mb-12 text-4xl font-bold text-gray-800 md:text-5xl">
          Frequently Asked Questions
        </h1>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {faqs.map((faq) => (
            <Accord key={faq.id} p={faq} />
          ))}
        </div>
      </div>
    </div>
  );
};