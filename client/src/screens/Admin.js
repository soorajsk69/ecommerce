import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllproducts } from '../actions/productsActions';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Admincard from '../components/Admincard';
import { Button, Col, Row } from 'react-bootstrap';
import './adminstyle.css';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Admin() {
  const dispatch = useDispatch();

  const productstate = useSelector((state) => state.getAllproductsReducer);
  const { products, error, loading } = productstate;

  useEffect(() => {
    dispatch(getAllproducts());
  }, [dispatch]);

  return (
    <div >
            <Header />

    <div className='admin-panel'>
      <div className='admin-Container'>
        <p className=' text-center hed'>
          ADMIN SETTING PANEL <span className='settings-icon'>⚙️</span>
        </p>
        <hr />
        <Row className='p-3'>
          <Col xs={12} md={8} className='mb-3'>
            <p>About admin.</p>
            <p>
              Website administrators help a company by maintaining its website and enhancing its online presence. Working in website administration can offer stable employment and competitive pay. You might enjoy a career as a website administrator if you like working in an office setting and have an interest in technology and the internet. In this article, we explore what a website administrator is, including what they do, how to become one.
            </p>
          </Col>
          <Col xs={12} md={4} className='mb-3 d-flex align-items-center justify-content-md-end'>
            <Link to='/addnewproduct'>
              <Button variant='success'>ADD NEW PRODUCTS</Button>
            </Link>
          </Col>
        </Row>

        <Row className='justify-content-center'>
          {loading ? (
            <Loading />
          ) : error ? (
            <Error error='Something Went Wrong!' />
          ) : (
            products.map((product, index) => (
              <Col lg={4} md={6} key={product._id || `${product.id}-${index}`} className='mb-4'>
                <Admincard product={product} />
              </Col>
            ))
          )}
        </Row>
      </div>

      <Footer />
    </div>
    </div>
  );
}
