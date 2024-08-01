import React, { useState } from 'react'
import logo from "../../assets/logo.png"
import { Link, useNavigate } from 'react-router-dom'
import { Search } from '../Sections/Search'
import { useCart } from '../../Context'
import { DropdownLogin } from '../Elements/DropdownLogin'
import { Dropdownlogout } from '../Elements/Dropdownlogout'
import { useAuth } from '../../Context/AuthContext'
import { Dropdownadmin } from '../Elements/Dropdownadmin'

export const Header = () => {
  const { user } = useAuth();
  const [show, setshow] = useState(false);
  const { petList } = useCart();
  const [showLogin, setshowLogin] = useState(false);
  const navigate = useNavigate();

  const canAccessCart = user && !user.isAdmin;

  const handleCartClick = (e) => {
    e.preventDefault();
    if (canAccessCart) {
      navigate('/Cart');
    } else {
      navigate('/Login');
    }
  };

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-blue-600 fixed w-full z-20 top-0 start-0 shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-10 rounded-full shadow-md" alt="PetAdopt Logo" />
          <span className="self-center text-2xl font-bold text-white">PetAdopt</span>
        </Link>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button onClick={() => setshow(!show)} className="text-white hover:text-yellow-300 transition-colors duration-300 mr-5">
            <i className="bi bi-search text-2xl"></i>
          </button>
          <Link to={"/Cart"}
            onClick={handleCartClick}
            className="text-white hover:text-yellow-300 transition-colors duration-300 "
          >
            <span className="text-2xl bi bi-cart-fill relative">
              {petList.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {petList.length}
                </span>
              )}
            </span>
          </Link>
          <button onClick={() => setshowLogin(!showLogin)} className="text-white hover:text-yellow-300 transition-colors duration-300 p-2">
            <i className="bi bi-person-circle text-2xl"></i>
          </button>
          <Link to={"/Ai"}>
            <button className="text-white hover:text-yellow-300 transition-colors duration-300 p-2"  >
              <i className="bi bi-google-play"></i>
            </button>
          </Link>
          <div className="relative">
            {showLogin && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                {user ? (
                  user.isAdmin ? (
                    <Dropdownadmin setShowLogin={setshowLogin} />
                  ) : (
                    <DropdownLogin setshowLogin={setshowLogin} />
                  )
                ) : (
                  <Dropdownlogout setshowLogin={setshowLogin} />
                )}
              </div>
            )}
          </div>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            {['Explore', 'Doggs/puppies', 'Cats/kittens', 'Others', 'Dashboard'].map((item, index) => (
              <li key={index}>
                <Link
                  to={item === 'Doggs/puppies' ? '/Doggs/puppies' : `/${item.toLowerCase()}`}
                  className="block py-2 px-3 text-white rounded hover:bg-white hover:text-purple-600 transition-colors duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {show && <Search setshow={setshow} />}
    </nav>
  )
}