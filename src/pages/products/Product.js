import React, { useState, useEffect } from 'react';

import ProducttList from './ProductList';
const Product = () => {
  const [products, setProducts] = useState([]);
  const APIURL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    console.log(process.env);
    fetch(`${APIURL}api/products`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <ProducttList products={products} />
    </div>
  );
};

export default Product;
