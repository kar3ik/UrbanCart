import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { remove } from '../store/CartSlice';

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removefromCart = (id) => {
    //dispatch
    dispatch(remove(id));
  };

  const cards = products.map((product) => (
    <div key={product.id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
      <div className="h-full p-4 border border-gray-300 rounded flex flex-col">
        <div className="max-h-full w-full mb-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex-grow">
          <div className="font-bold text-xl mb-2 text-white">{product.title}</div>
          <p className="text-white text-base">{product.description}</p>
        </div>
        <div className="mt-4">
          <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {product.category}
          </span>
          <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            ${product.price}
          </span>
        </div>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold mt-4 py-2 px-4 rounded"
          onClick={() => removefromCart(product.id)}
        >
          remove from Cart
        </button>
      </div>
    </div>
  ));

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <div className='font-bold flex fle'>Cart</div>
      <div className="flex flex-wrap flex-row">{cards}</div>
    </div>
  );
};

export default Cart;
