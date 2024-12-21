import React, { useContext } from 'react';
import { CartContext } from './context/CartContextProvider';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, getTotal, setCart } = useContext(CartContext);
  const navigate = useNavigate();

 
  const saveOrderToFirebase = async () => {
    try {
      
      const order = {
        items: cart,
        total: getTotal(),
        createdAt: new Date(),
      };

      
      const docRef = await addDoc(collection(db, 'orders'), order);
      console.log('Orden guardada con ID: ', docRef.id);
      
      
      return docRef.id;
    } catch (error) {
      console.error("Error al guardar la orden: ", error);
      return null;
    }
  };

  const handleCheckout = async () => {
    if (cart.length === 0) {
      alert('Tu carrito está vacío.');
      return;
    }

    
    alert(`Compra realizada. Total: $${getTotal()}`);

    
    const orderId = await saveOrderToFirebase();

    
    if (orderId) {
      navigate(`/order/${orderId}`);
    }

    
    setCart([]);
  };

  return (
    <div>
      <h2>Tu Carrito</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt={item.name} width="50" />
                <h3>{item.name}</h3>
                <p>Precio: ${item.price}</p>
                <p>Cantidad: {item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <h3>Total: ${getTotal()}</h3>
          <button onClick={handleCheckout}>Pagar</button>
        </>
      )}
    </div>
  );
};

export default Cart;
