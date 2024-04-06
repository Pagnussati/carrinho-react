import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

import './CartButton.css';  

function CartButton() {

  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

  return (
    <button 
      type="button" 
      className="cart-button" 
      onClick={ () => setIsCartVisible(!isCartVisible) }
    >
      <FaShoppingCart />
      { cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span>}
    </button>
  );
} 

export default CartButton;
