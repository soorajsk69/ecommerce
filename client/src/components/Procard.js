import React from 'react';
import './procard.css';
import { Link } from 'react-router-dom';

export default function ProCard({ product }) {
  return (
    <div className="container pro mt-5 p-4">
      
      <div className="card">
        <Link to={`/product/${product.id}`} className="card-link">
          <div className="card-content">
            <img src={product.image} className="card-image" alt={product.name} />
            <div className="card-details">
              <h2>{product.name}</h2>
              <p>Rating: {product.rating}</p>
            </div>
          </div>
          <div className="card-actions">
            <button className="btn btn-secondary">CHECKOUT</button>
          </div>
        </Link>
      </div>
    </div>
  );
}
