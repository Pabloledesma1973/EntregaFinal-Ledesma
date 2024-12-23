import React, { useContext } from 'react';
import { CartContext } from './context/CartContextProvider';

const ItemDetail = ({ item }) => {
  const { addToCart } = useContext(CartContext); 

  const handleAddToCart = () => {
    
    const productToAdd = {
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1, 
    };
    addToCart(productToAdd); 
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
