import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import './SearchBar.css';

function SearchBar() {

  const [searchValue, setSearchValue] = useState('');

  return ( 

    <form className="search-bar">
      <input 
        type="search" 
        value={searchValue}
        placeholder="Pesquisar Produtos" 
        className="search-input" 
        onChange={( { target } ) => { setSearchValue(target.value); } }
        required 
      />
      
      <button type="submit" className="search-button">
        <FaSearch />
      </button>
    </form>
    
  );
}

export default SearchBar;
