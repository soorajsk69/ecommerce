import React from 'react';
import Alert from 'react-bootstrap/Alert';

export default function Success({ success }) {
  return (
    <div>
      <div>
        {['success'].map((variant) => (
          <Alert key={variant} variant={variant}>
            {success}
          </Alert>
        ))}
      </div>
    </div>
  );
}
