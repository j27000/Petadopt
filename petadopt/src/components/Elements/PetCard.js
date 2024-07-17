import React from 'react';
import { Link } from 'react-router-dom';

export const PetCard = ({ pet }) => {
  return (
    <div className="m-3 max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to={`${pet.id}`} className="relative">
        <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">Best Seller</span>
        <img className="rounded-t w-full h-45 object-auto" src={pet.imageUrl} alt={pet.name} />
      </Link>
      <div className="p-5">
        <Link to={`${pet.id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{pet.name}</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{pet.description}</p>
      </div>
    </div>
  );
};
