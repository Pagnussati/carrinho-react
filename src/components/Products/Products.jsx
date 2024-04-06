import React, { useEffect, useContext } from 'react';
import ProductCard from '../ProductCard/ProductCard.jsx';
import fetchProducts from '../../api/fetchProducts';
import Loading from '../Loading/Loading.jsx';
import AppContext from '../../context/AppContext';

import './Products.css';

function Products() {

  const { products, setProducts, loading, setLoading } = useContext(AppContext);
  
  useEffect(() => {
    fetchProducts('notebook gamer').then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, []);

  return(
    <section className="products container">
      { loading ? <Loading/> : products.map((product) => <ProductCard data={product} key={product.id}/>) }
    </section>
  );
}

export default Products;
