import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Procard from '../components/Procard';
import { getAllproducts } from '../actions/productsActions';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { Container, Form } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './home.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import img from '../img/zulfashion2.png';
import img2 from '../img/zulfashion3.png'
import img3 from '../img/zul3.webp'

export default function Homescreen() {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  const productState = useSelector((state) => state.getAllproductsReducer);
  const { loading, error, products } = productState;

  useEffect(() => {
    dispatch(getAllproducts());
  }, [dispatch]);

  const filteredProducts = searchQuery
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products;

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="home">
      <Header />
      <div className="container-home mt-4">
        <div className="carousel-wrapper mt-4">
          <Carousel>
            <Carousel.Item>
              <img
                className="carousel-img d-block w-100 img-fluid"
                src={img}
                alt="First slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-img d-block w-100 img-fluid"
                src={img2}
                alt="Second slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-img d-block w-100 img-fluid"
                src={img3}
                alt="Third slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <Container>
          <div className="search-bar mt-4">
            <Form.Group controlId="searchForm">
              <Form.Control
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search products..."
                className="search-input shadow-sm"
              />
            </Form.Group>
          </div>
        </Container>

        <Container fluid>
          {loading ? (
            <Loading />
          ) : error ? (
            <Error error="Something Went Wrong!" />
          ) : (
            <div className="row">
              {filteredProducts.length === 0 ? (
                <div className="no-results">No results found.</div>
              ) : (
                filteredProducts.map((product) => (
                  <div className="col mb-4" key={product.id}>
                    <Procard product={product} />
                  </div>
                ))
              )}
            </div>
          )}
        </Container>
      </div>
      <Footer />
    </div>
  );
}
