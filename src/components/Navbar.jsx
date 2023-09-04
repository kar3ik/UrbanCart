import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = () => { 

    const cartProducts = useSelector(state=>state.cart)
  return (
    <nav className="bg-slate-800 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white text-2xl font-semibold  hover:text-blue-300">
          UrbanCart
          </Link>
          <ul className="flex space-x-4">
            <li className="text-white hover:text-blue-300">
              <Link to="/home">Home</Link>
            </li>
            <li className="text-white hover:text-blue-300">
              <Link to="/">Products</Link>
            </li>
            <li className="text-white hover:text-blue-300">
              <Link to="/cart">Cart {cartProducts.length}</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
