import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

export default function Loading() {
  return (
    <div className="loader-container text-center">
      <div className="loader">
        <Spinner animation="border" />
      </div>
    </div>
  );
}
