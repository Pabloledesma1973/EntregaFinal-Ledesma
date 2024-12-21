import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget'; 

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#f4f4f4', alignItems: 'center' }}>
      <Link to="/" style={{ textDecoration: 'none', fontSize: '1.5rem', fontWeight: 'bold' }}>ROMVAL STORE</Link>
      <div>
        <Link to="/category/hombres" style={{ margin: '0 1rem' }}>Hombres</Link>
        <Link to="/category/mujeres" style={{ margin: '0 1rem' }}>Mujeres</Link>
        <Link to="/category/niños" style={{ margin: '0 1rem' }}>Niños</Link>
      </div>
      
      <Link to="/cart" style={{ display: 'flex', alignItems: 'center' }}>
        <CartWidget />
      </Link>
    </nav>
  );
};

export default NavBar;
