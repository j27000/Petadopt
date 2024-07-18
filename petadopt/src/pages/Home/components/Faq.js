import React from 'react';

import { Accord } from './Accord';

export const Faq = () => {
  const faqs = [
    {
      id: 1,
      que: 'How do I adopt a pet?',
      description: 'To adopt a pet, browse our available pets online, visit our sheln, fill out an adoption application'

    },
    {
      id: 2,
      que: 'Can I adopt if I live in an apartment?',
      description: 'Adoption fees vary depending on the type of pet and its age. Typically, adoption fees range from $50 to $200, which covers vaccinations, spaying/neutering, and a health check-up. Please check our website for specific fee details',

    },
    {
      id: 3,
      que: 'What are the adoption fees?',
      description: 'Yes, you can adopt a pet if you live in an apartment. However, Some pets may require more space and outdoor time than others. We can help you find a pet that fits your living situation.',

    },
    {
      id: 4,
      que: 'What should I prepare before adopting a pet?',
      description: 'Before adopting a pet, prepare your home by setting up a designated space for the pet with a bed, food and water bowls, and toys. Make sure you have a supply of pet food, a collar and leash for dogs, and a litter box for cats. Pet-proof your home by removing hazards.',

    }
  ];







  return (
    <div className="nam">
      <h1 className="text-center mb-4 text-4xl leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-black">We invest in the world’s potential</h1>
      {faqs.map((pet) => (
        <div className="p-5" key={pet.id}>
          <Accord p={pet} />
        </div>
      ))}


    </div>
  );
};
