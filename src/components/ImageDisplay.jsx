import React, { useEffect, useState } from 'react';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebaseConfig';

const ImageDisplay = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const imageRef = ref(storage, 'images/mi-imagen.jpg');

    
    getDownloadURL(imageRef)
      .then((url) => {
        setImageUrl(url); 
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error al obtener la URL de la imagen', err);
        setError('No se pudo cargar la imagen');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Imagen desde Firebase Storage</h1>
      <img src={imageUrl} alt="Imagen de Firebase" />
    </div>
  );
};

export default ImageDisplay;
