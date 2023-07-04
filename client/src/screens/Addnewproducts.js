import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { addProduct } from '../actions/adminActions';
import { Button } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './add.css'
function AddNewProduct({ loading, message, error }) {
  const dispatch = useDispatch();

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [variants, setVariants] = useState('');
  const [price, setPrices] = useState({ small: '', medium: '', large: '' });
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [vendorName, setVendorName] = useState('');
  const [rating, setRating] = useState('');

  const handlePriceChange = (variant, priceValue) => {
    setPrices((prevPrices) => ({
      ...prevPrices,
      [variant]: parseInt(priceValue),
    }));
  }

  const addProductHandle = (e) => {
    e.preventDefault();
    const productData = {
      id,
      name,
      variants: variants.split(','),
      price,
      category,
      image,
      description,
      vendorName,
      rating,
    };
    dispatch(addProduct(productData));

  };
  const handleCancel = () => {
    window.location.href = ('/admin');
  };

  return (
    <div>
      <Header/>
      <div className='add-container p-4'>
      <h2 className="text-center mb-4">Add New Product</h2>
      <div className="row justify-content-center p-3">
        <div className="col-lg-6">
          <form onSubmit={addProductHandle}>
            <div className="mb-3">
              <label htmlFor="id" className="form-label">
                Id
              </label>

              <input onChange={(e) => setId(e.target.value)} type="text" className="form-control" id="id" />
            </div>            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Product Name
              </label>
              <input  onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="variants"  className="form-label">
               <b> Variants  </b>
              Please do not add extra spaces
              </label>
              <input placeholder='eg :small,medium,large' onChange={(e) => setVariants(e.target.value)} type="text" className="form-control" id="variants" />
            </div>
            <label htmlFor="name" className="form-label">
              Price : small
              </label>


            <input
              onChange={(e) => handlePriceChange('small', e.target.value)}
              type="text"
              className="form-control"
              id="priceSmall"
            />
            <label htmlFor="name" className="form-label">
              Price : medium
              </label>

            <input
              onChange={(e) => handlePriceChange('medium', e.target.value)}
              type="text"
              className="form-control"
              id="priceMedium"
            />
            <label htmlFor="name" className="form-label">
              Price : large
              </label>

            <input
              onChange={(e) => handlePriceChange('large', e.target.value)}
              type="text"
              className="form-control"
              id="priceLarge"
            />

            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <input onChange={(e) => setCategory(e.target.value)} type="text" className="form-control" id="category" />
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Image URL
              </label>
              <input onChange={(e) => setImage(e.target.value)} type="text" className="form-control" id="image" />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
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
              <input onChange={(e) => setVendorName(e.target.value)} type="text" className="form-control" id="vendorName" />
            </div>
            <div className="mb-3">
              <label htmlFor="rating" className="form-label">
                Rating
              </label>
              <input onChange={(e) => setRating(e.target.value)} type="text" className="form-control" id="rating" />
            </div>
            <div className="text-center">
              <Button onClick={addProductHandle} type="submit" className="btn btn-primary m-3" disabled={loading}>
                {loading ? 'Adding Product...' : 'Add Product'}
              </Button>
              <Button onClick={handleCancel} type="button" className="btn btn-warning">
                Cancel
              </Button>
            </div>
            {message && <div className="text-success">{message}</div>}
            {error && <div className="text-danger">{error}</div>}
          </form>
        </div>
      </div>
    </div>

    <Footer/>

    </div>
  );
}

const mapStateToProps = (state) => {
  const productState = state.addProductReducer;
  return {
    loading: productState ? productState.loading : false,
    message: productState ? productState.message : '',
    error: productState ? productState.error : null,
  };
};
export default connect(mapStateToProps)(AddNewProduct);
