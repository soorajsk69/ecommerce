const initialState = {
  loading: false,
  message: '',
  error: '',
};

const updateproductReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_REQUEST':
      return { ...state, loading: true };
    case 'ADD_PRODUCT_SUCCESS':
      return { ...state, loading: false, message: action.payload, error: '' };
    case 'ADD_PRODUCT_FAILURE':
      return { ...state, loading: false, message: '', error: action.payload };
    default:
      return state;
  }
};

export default updateproductReducer;
