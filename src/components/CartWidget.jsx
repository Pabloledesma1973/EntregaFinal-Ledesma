import React, { useContext } from 'react';
import { CartContext } from './context/CartContextProvider';

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  const getCartCount = () => {
  return cart.reduce((acc, item) => acc + item.quantity, 0); 
 };


  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <i className="fas fa-shopping-cart" style={{ fontSize: '1.5rem' }}></i>
      {cart.length > 0 && (
        <span
          style={{
            position: 'absolute',
            top: '-10px', 
            right: '-10px', 
            background: 'red',
            color: 'white',
            borderRadius: '50%',
            padding: '0.2rem 0.6rem', 
            fontSize: '0.8rem', 
            fontWeight: 'bold',
            minWidth: '20px', 
            textAlign: 'center',
          }}
        >
          {getCartCount()}
        </span>
      )}
    </div>
  );
};

export default CartWidget;
