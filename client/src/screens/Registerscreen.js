import React, { useState } from 'react';
import './register.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../actions/userAction';
import Loading from '../components/Loading';
import Success from '../components/Success';
import Error from '../components/Error';
import backgroundImage from '../img/background.png'; // Change the import path to your image file

export default function Registerscreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const registerState = useSelector((state) => state.registerUserReducer);
  const { error, loading, success } = registerState;
  const dispatch = useDispatch();

  const handleRegister = (event) => {
    event.preventDefault();
    if (password !== cpassword) {
      alert('Passwords do not match');
    } else {
      const user = {
        name,
        email,
        password,
      };
      console.log(user);
      dispatch(registerUser(user));
    }
  };

  return (
    <div
      className="wrapper1 d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
      }}
    >
      <div className="login rounded">
        {loading && <Loading />}

        {!loading && success && <Success success="User Registered Successfully" />}
        
        {!loading && error && <Error error="Username and Email Already registered" />}

        {!loading && (!success || error) && (
          <>
            <h3 className="text-center">
              <i className="fa-solid fa-user-plus"></i> Signup
            </h3>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Control
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Username"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Control
                  value={cpassword}
                  required
                  onChange={(e) => setCPassword(e.target.value)}
                  type="password"
                  placeholder="Confirm password"
                />
              </Form.Group>

              <Button
                onClick={handleRegister}
                variant="secondary"
                type="submit"
                className="mt-3 w-100"
              >
                REGISTER
              </Button>
            </Form>
          </>
        )}

          <p className="text-center">
            Already have an account? <Link to="/">Login now</Link>
          </p>
      </div>
    </div>
  );
}
