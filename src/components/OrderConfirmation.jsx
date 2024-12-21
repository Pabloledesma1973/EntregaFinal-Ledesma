import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

const OrderConfirmation = () => {
  const { orderId } = useParams(); 
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const orderRef = doc(db, 'orders', orderId);
        const orderSnap = await getDoc(orderRef);

        if (orderSnap.exists()) {
          setOrder(orderSnap.data());
        } else {
          console.log("No se encontró la orden");
        }
      } catch (error) {
        console.error("Error al recuperar la orden: ", error);
      }
    };

    fetchOrder();
  }, [orderId]);

  if (!order) {
    return <p>Cargando orden...</p>;
  }

  return (
    <div>
      <h2>Orden Confirmada</h2>
      <p>ID de la Orden: {orderId}</p>
      <h3>Productos comprados:</h3>
      <ul>
        {order.items.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt={item.name} width="50" />
            <h4>{item.name}</h4>
            <p>Precio: ${item.price}</p>
            <p>Cantidad: {item.quantity}</p>
          </li>
        ))}
      </ul>
      <h3>Total: ${order.total}</h3>
      <p>Fecha de la compra: {new Date(order.createdAt.seconds * 1000).toLocaleString()}</p>
    </div>
  );
};

export default OrderConfirmation;
