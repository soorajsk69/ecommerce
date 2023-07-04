import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './footer.css';

export default function Footer() {
  return (
    <div className='foot '>
        <Row>
          <Col className='text-center bg-black text-white ' xs={12}>
            <h6 className='mt-3'> All rights reserved &copy; - Find The Best Men's Fashion</h6>
            <p>Contact us:</p>
            <p>090338294783</p>
            <p>zulFashion@gmail.com</p>
          </Col>
        </Row>
    </div>
  );
}
