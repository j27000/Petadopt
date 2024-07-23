import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../Context/Contextpet';

export const PetCard = ({ pet }) => {
  const { addToCart, petList, removeFromCart } = useCart();
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    const productInCart = petList.find(item => item.id === pet.id);
    setInCart(!!productInCart);
  }, [petList, pet.id]);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
      <Link to={`${pet.id}`} className="relative block">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50"></div>
        <img className="w-full h-64 object-cover" src={pet.imageUrl} alt={pet.name} />
        <span className="absolute top-4 left-4 px-2 py-1 bg-yellow-400 text-gray-900 text-xs font-bold rounded-full">
          Best Seller
        </span>
        <div className="absolute bottom-4 left-4 text-white">
          <h5 className="text-2xl font-bold">{pet.name}</h5>
          <p className="text-sm">{pet.breed}</p>
        </div>
      </Link>
      <div className="p-6">
        <p className="text-gray-600 text-sm mb-4">{pet.description}</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-gray-500 text-xs">{pet.age}</span>
            <span className="mx-2 text-gray-300">|</span>
            <span className="text-gray-500 text-xs">{pet.size}</span>
          </div>
          {!inCart ? (
            <button
              onClick={() => addToCart(pet)}
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium rounded-md hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-300"
            >
              Adopt Me
            </button>
          ) : (
            <button
              onClick={() => removeFromCart(pet)}
              className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 transition-colors duration-300"
            >
              Remove
            </button>
          )}
        </div>
      </div>
    </div>
  );
};