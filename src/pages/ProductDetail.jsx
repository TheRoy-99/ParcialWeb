import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles/ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();  // Captura el ID de la URL
    const [product, setProduct] = useState(null);

    // Función para obtener el detalle del producto por ID
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const URL = import.meta.env.VITE_URL_BASE; // Llamada a la URL desde el .env
                const response = await axios.get(`${URL}/productos/listar/${id}`);
                setProduct(response.data.result); // Ajustar si la respuesta viene en un campo result
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        fetchProduct();
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (
        <div className="product-detail">
            <img src={product.image} alt={product.name} className="detail-image" />
            <div className="detail-info">
                <h1 className="detail-name">{product.name}</h1>
                <p className="detail-description">{product.description}</p>
                <p className="detail-price">${product.price}</p>
            </div>
        </div>
    );
};

export default ProductDetail;
