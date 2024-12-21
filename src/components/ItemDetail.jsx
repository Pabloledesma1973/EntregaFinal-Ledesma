import React, { useContext } from 'react';
import { CartContext } from './context/CartContextProvider';

const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext);

  const handleAddToCart = () => {
    addItem(item, 1);
  };

  return (
    <div>
      <h2>{item.name}</h2>
      <img src={item.image} alt={item.name} />
      <p>{item.description}</p>
      <p>${item.price}</p>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};

export default ItemDetail;
