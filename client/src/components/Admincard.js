import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './admin.css';
import { deleteProduct } from '../actions/adminActions';
import { useDispatch } from 'react-redux';
export default function Admincard({ product }) {
  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    try {
      dispatch(deleteProduct(id));
       window.location.reload(); // Refresh the page

    } catch (error) {
      console.error(error);
      alert('Error deleting product');
    }
  };
  return (
    <div className="container mt-5 p-5">
      <div className="card">
        <img className="card-image" src={product.image} alt={product.name} />
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <p className="card-text">Rating: {product.rating}</p>
        </div>
        <div className="card-footer">
          <Link to={`/edit/${product.id}`}>
            <Button className="edit-btn" variant="secondary">
              Edit
            </Button>
          </Link>
          <Button onClick={() => handleDelete(product.id)} className="delete-btn" variant="danger">
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
