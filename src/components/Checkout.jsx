import React, { useContext, useState } from 'react';
import { CartContext } from './context/CartContextProvider';
import { db } from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);

  const handleCheckout = async () => {
    const order = {
      items: cart.map(({ id, name, quantity, price }) => ({ id, name, quantity, price })),
      total: totalPrice(),
      date: serverTimestamp(),
    };

    try {
      const docRef = await addDoc(collection(db, 'orders'), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error('Error al procesar la orden:', error);
    }
  };

  if (orderId) {
    return (
      <div>
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu número de orden es: {orderId}</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Resumen de Compra</h2>
      <p>Total: ${totalPrice()}</p>
      <button onClick={handleCheckout}>Finalizar Compra</button>
    </div>
  );
};

export default Checkout;
