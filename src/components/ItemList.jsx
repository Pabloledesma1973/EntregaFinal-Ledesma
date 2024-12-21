import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id, name, price, image }) => {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '5px', padding: '1rem', textAlign: 'center' }}>
      <img src={image} alt={name} style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }} />
      <h3>{name}</h3>
      <p>Precio: ${price}</p>
      <Link to={`/item/${id}`}>
        <button style={{ padding: '0.5rem 1rem', marginTop: '0.5rem' }}>Ver Detalle</button>
      </Link>
    </div>
  );
};

export default Item; 
