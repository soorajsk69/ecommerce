import React, { useEffect, useState } from 'react';
import './singleproduct.css';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllproducts } from '../actions/productsActions';
import { addToCart } from '../actions/cartActions';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function SingleProduct() {
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('small');
  const [price, setPrice] = useState(0);

  const params = useParams();
  const { products } = useSelector((state) => state.getAllproductsReducer);
  const productId = params.id;
  const product = products.find((product) => product.id === productId);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllproducts());
  }, [dispatch]);

  useEffect(() => {
    if (product) {
      const newPrice = product.price[0][variant] * quantity;
      setPrice(newPrice);
    }
  }, [quantity, variant, product]);

  function handleQuantityChange(e) {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
    if (product) {
      const newPrice = product.price[0][variant] * newQuantity;
      setPrice(newPrice);
    }
  }

  function addtocart() {
    if (product) {
      dispatch(addToCart(product, quantity, variant));
    }
  }

  if (!product) {
    return (
      <div>
        <Header />
        <div>Product not found</div>
      </div>
    );
  }

  return (
    <>
      <div className='container p-3'>
        <Header />
        <div className="single  mb-5"> 
          <div className="row ms-2">
            <div className="col-md-6">
              <div className="image-container">
                <img src={product.image} alt="Product" className="product-image mt-3" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-content">
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <h6>Detail: {product.description}</h6>
                </div>
                <div className="product-options">
                  <div>
                    <p>Variant</p>
                    <select
                      className="variant-selector"
                      value={variant}
                      onChange={(e) => setVariant(e.target.value)}
                    >
                      {product.variants.map((variant, index) => (
                        <option key={index} value={variant}>
                          {variant}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <p>Quantity</p>
                    <select
                      className="quantity-selector"
                      value={quantity}
                      onChange={handleQuantityChange}
                    >
                      {[...Array(10).keys()].map((i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="product-price">
                  <h1>PRICE: {price} /-</h1>
                </div>
                <div className="product-action">
                  <button className="btn btn-secondary" onClick={addtocart}>
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
