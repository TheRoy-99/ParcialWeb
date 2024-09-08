import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/Products.css';

export const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_URL_BASE}/productos/listar`);
                setProducts(response.data.result);
            } catch (error) {
                console.error('Error fetching products', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="products-grid">
            {products.map(product => (
                <div key={product._id} className="product-card">
                    <img src={product.image} alt={product.name} className="product-image" />
                    <div className="product-info">
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-price">${product.price}</p>
                        <Link to={`/productos/${product._id}`} className="product-link">
                            Ver Detalles
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};
