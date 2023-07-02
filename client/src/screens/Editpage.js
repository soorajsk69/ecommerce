import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { update } from '../actions/adminActions';
import { getAllproducts } from '../actions/productsActions';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './edit.css'

export default function Editpage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [variants, setVariants] = useState('');
  const [price, setPrices] = useState({ small: '', medium: '', large: '' });
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [vendorName, setVendorName] = useState('');
  const [rating, setRating] = useState('');

  const { id } = useParams();
  const { products } = useSelector((state) => state.getAllproductsReducer);
  const product = products.find((product) => product.id === id);

  useEffect(() => {
    dispatch(getAllproducts());
  }, [dispatch]);

  useEffect(() => {
    if (product) {
      setName(product.name);
      setVariants(product.variants.join(', '));
      setPrices(product.price[0]);
      setCategory(product.category);
      setImage(product.image);
      setDescription(product.description);
      setVendorName(product.vendorName);
      setRating(product.rating);
    }
  }, [product]);

  const handleCancel = () => {
    window.location.href = '/admin';
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedProduct = {
      id,
      name,
      variants: variants.split(',').map((variant) => variant.trim()),
      price,
      category,
      image,
      description,
      vendorName,
      rating,
    };
    dispatch(update(updatedProduct));
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Header />
      <div className='edit-container p-4'>

        <h2 className="text-center mb-4">Edit Product</h2>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Product Name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="form-control"
                  id="name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="variants" className="form-label">
                  Variants
                </label>
                <input
                  placeholder="e.g. small,medium,large"
                  value={variants}
                  onChange={(e) => setVariants(e.target.value)}
                  type="text"
                  className="form-control"
                  id="variants"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="priceSmall" className="form-label">
                  Price - Small
                </label>
                <input
                  value={price.small}
                  onChange={(e) => setPrices({ ...price, small: e.target.value })}
                  type="text"
                  className="form-control"
                  id="priceSmall"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="priceMedium" className="form-label">
                  Price - Medium
                </label>
                <input
                  value={price.medium}
                  onChange={(e) => setPrices({ ...price, medium: e.target.value })}
                  type="text"
                  className="form-control"
                  id="priceMedium"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="priceLarge" className="form-label">
                  Price - Large
                </label>
                <input
                  value={price.large}
                  onChange={(e) => setPrices({ ...price, large: e.target.value })}
                  type="text"
                  className="form-control"
                  id="priceLarge"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <input
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  type="text"
                  className="form-control"
                  id="category"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="image" className="form-label">
                  Image URL
                </label>
                <input
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  type="text"
                  className="form-control"
                  id="image"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="form-control"
                  id="description"
                  rows="3"
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="vendorName" className="form-label">
                  Vendor Name
                </label>
                <input
                  value={vendorName}
                  onChange={(e) => setVendorName(e.target.value)}
                  type="text"
                  className="form-control"
                  id="vendorName"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="rating" className="form-label">
                  Rating
                </label>
                <input
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  type="text"
                  className="form-control"
                  id="rating"
                />
              </div>
              <div className="text-center">
                <Button onClick={handleUpdate} type="submit" className="btn btn-primary m-3">
                  Update
                </Button>
                <Button onClick={handleCancel} type="button" className="btn btn-warning">
                  Cancel
                </Button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}
