import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase';
import { CartContext } from './context/CartContextProvider';
import '../components/ItemListContainer.css';

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true); 

  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData);
        setLoading(false); 
      } catch (error) {
        console.error("Error al obtener productos: ", error);
        setLoading(false); 
      }
    };
    fetchProducts();
  }, []);

  
  useEffect(() => {
    if (categoryId) {
      const filtered = products.filter(product => product.category === categoryId);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [categoryId, products]);

  
  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div className="product-list">
      {filteredProducts.length === 0 ? (
        <p>No se encontraron productos.</p>
      ) : (
        filteredProducts.map(product => (
          <div key={product.id} className="product-item">
            <Link to={`/item/${product.id}`}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </Link>
            <button onClick={() => addToCart(product)}>Agregar al carrito</button>
          </div>
        ))
      )}
    </div>
  );
};

export default ItemListContainer;
