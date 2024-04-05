import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard.jsx';
import fetchProducts from '../../api/fetchProducts';

import './Products.css';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts('notebook gamer').then((response) => {
      setProducts(response);
    });
  }, []);

  return(
    <section className="products container">
      {
        products.map((product) => <ProductCard data={product} key={product.id}/>)
      }
    </section>
  );
}

export default Products;
