import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Error 404</h1>
      <p>La página que buscas no existe.</p>
      <Link to="/">
        <button>Volver a la tienda</button>
      </Link>
    </div>
  );
};

export default Error404;
