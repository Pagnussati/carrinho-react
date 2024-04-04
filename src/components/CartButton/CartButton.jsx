import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

import './CartButton.css';  

function CartButton() {
  return (
    <button type="button" className="cart-button">
      <FaShoppingCart />
      <span className="cart-status">1</span>
    </button>
  );
} 

export default CartButton;
