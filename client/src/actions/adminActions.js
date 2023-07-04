import axios from 'axios';

export const deleteProduct = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete('/deleteproduct/' + id);
      alert(response.data.message);

      dispatch({ type: 'DELETE_PRODUCT_SUCCESS', payload: id });
    } catch (error) {
      console.error(error);
      alert('Error deleting product');
      dispatch({ type: 'DELETE_PRODUCT_FAILURE', payload: error.message });
    }
  };
};




export const addProduct = (productData) => async (dispatch) => {
  dispatch({ type: 'ADD_PRODUCT_REQUEST' });

  try {
    const response = await axios.post('/addproduct', productData);
    alert(response.data.message);

    dispatch({
      type: 'ADD_PRODUCT_SUCCESS',
      payload: response.data.message,
    });

    window.location.href = '/admin' // Navigate to the admin page
  } catch (error) {
    alert('Product Already Exists');
    
    dispatch({
      type: 'ADD_PRODUCT_FAIL',
      payload: error.message,
    });
  }
};


export const update = (updatedProduct) => async (dispatch) => {
  dispatch({ type: 'ADD_PRODUCT_REQUEST' });

  try {
    const response = await axios.post('/update', updatedProduct);
    alert(response.data.message);

    dispatch({
      type: 'ADD_PRODUCT_SUCCESS',
      payload: response.data.message,
    });

    window.location.href = '/admin'; // Navigate to the admin page
  } catch (error) {
    alert('Product Already Exists');

    dispatch({
      type: 'ADD_PRODUCT_FAIL',
      payload: error.message,
    });
  }
};







