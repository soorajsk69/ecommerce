import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, deleteFromCart } from '../actions/cartActions';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Cartscreen.css'
export default function Cartscreen() {
  const cartstate = useSelector(state => state.cartReducer);
  const cartItems = cartstate.cartItems;
  const subtotal = cartItems.reduce((x, item) => x + item.prices, 0);
  const dispatch = useDispatch();

  return (
    <div>
      <Header/>
      <div className="row justify-content-center p-4 carth mt-4">
        <div className="col-md-6">
          <h1 className="text-center  mb-4 mt-4">My Cart</h1>
          {cartItems.map(item => (
            <div className="flex-container " key={item.id}>
              <div className="text-left m-1">
                <h3>{item.name}[{item.varient}]</h3>
                <h3>Price: {item.quantity} * {item.price[0][item.varient]} = {item.prices}</h3>
                <h3 style={{ display: 'inline' }}>Quantity: </h3>
                <i
                  className="fa-solid fa-plus ms-2"
                  onClick={() => dispatch(addToCart(item, item.quantity + 1, item.varient))}
                ></i>
                <b>{item.quantity}</b>
                <i
                  className="fa-solid fa-minus ms-2"
                  onClick={() => dispatch(addToCart(item, item.quantity - 1, item.varient))}
                ></i>
                <div className="m-1 w-100 text-end">
                  <img
                    src={item.image}
                    alt="Product"
                    style={{ height: '100px', width: '100px' }}
                  />
                  <div className="mt-2">
                    <i
                      className="fa-solid fa-trash-can text-end"
                      onClick={() => dispatch(deleteFromCart(item))}
                    ></i>
                  </div>
                </div>

                <hr />
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-4 mt-3">
          <h1 style={{ fontSize: '40px' }}>SubTotal: {subtotal}/-</h1>
        </div>
      </div>
      <Footer  />
      </div>
  );
}
