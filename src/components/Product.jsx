import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../store/CartSlice';

const Product = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((result) => setProducts(result))
      .catch((error) => console.error('Fetch error:', error));
  }, []);



  
  const addtocart = (product) =>{
    // dispatch action
    dispatch(add(product))
  }



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
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-4 rounded" onClick={()=>addtocart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  ));

  return (
    <div className="bg-slate-900 text-white py-8">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        <div className="flex flex-wrap -mx-4">{cards}</div>
      </div>
    </div>
  );
};

export default Product;
