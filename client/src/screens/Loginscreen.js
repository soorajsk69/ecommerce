import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './login.css';
import { loginUser } from '../actions/userAction';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Success from '../components/Success';
import backgroundImage from '../img/background.png'; // Change the import path to your image file

export default function Loginscreen() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const loginstate = useSelector((state) => state.loginUserReducer);
  const { loading, error, success } = loginstate;
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('currentUser')) {
      window.location.href = '/home';
    }
  }, []);

  function login(event) {
    event.preventDefault();
    const user = { email, password };
    dispatch(loginUser(user));
  }

  return (
    <div
      className="wrapper d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
      }}
    >
      <div className="login rounded ">
        {loading ? (
          <>
            <Loading />
          </>
        ) : (
          <>
            <h4 className="text-center">
              <i className="fa-solid fa-user"></i> Login
            </h4>
            {success && <Success success="loggin successfull" />}
            {error && <Error error="Invalid Credentials" />}
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  value={email}
                  required
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  value={password}
                  required
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>

              <p className="text-center">
                Don't have an account? <Link to="/register">Sign up</Link>
              </p>

              <Button
                onClick={login}
                className="mt-2 w-100"
                variant="secondary"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </>
        )}
      </div>
    </div>
  );
}
