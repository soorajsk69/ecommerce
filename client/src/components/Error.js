import React from 'react';
import Alert from 'react-bootstrap/Alert';

export default function Error({ error }) {
  return (
    <div>
      <div >
        {['danger'].map((variant) => (
          <Alert key={variant} variant={variant}>
            {error}
          </Alert>
        ))}
      </div>
    </div>
  );
}
