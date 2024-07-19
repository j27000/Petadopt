import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../Context';

export const PetCard = ({ pet }) => {
  const { addToCart, petList } = useCart();

  function handleClick(pet) {
    console.log('Before adding to cart:', petList);
    addToCart(pet);
    console.log('After adding to cart:', petList);
  }

  return (
    <div className="flex flex-col justify-between m-3 max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to={`${pet.id}`} className="relative block">
        <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">Best Seller</span>
        <div className="w-full h-60">
          <img className="rounded-t-lg w-full h-full object-cover" src={pet.imageUrl} alt={pet.name} />
        </div>
      </Link>
      <div className="p-5 flex-grow">
        <Link to={`${pet.id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{pet.name}</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{pet.description}</p>
      </div>
      <div className="p-5 pt-0">
        <button onClick={() => handleClick(pet)}
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          aria-label={`Add ${pet.name} to cart`}
        >
          Add To Cart <i className="ml-1 bi bi-plus-lg"></i>
        </button>
      </div>
    </div>
  );
};
