import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';
import { logoutUser } from '../actions/userAction';

export default function Header() {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

  return (
    <div >
      <Navbar bg="black" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/home">
            <i className="fa-brands fa-wizards-of-the-coast"></i> ZulFashion
          </Navbar.Brand>
          <Nav>
            {currentUser ? (
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  {currentUser.name} {currentUser.isAdmin && 'Admin'}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/cart">Orders</Dropdown.Item>
                  <Dropdown.Item href="#" onClick={() => dispatch(logoutUser())}>
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Nav.Link href="/">Login</Nav.Link>
            )}
            <div className='me-2'>
              <Nav.Link href="/cart">
                <i className="fa-solid fa-cart-shopping m-1"></i>
                {cartState.cartItems.length}
              </Nav.Link>
              </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
