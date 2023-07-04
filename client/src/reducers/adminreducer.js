const initialState = {
    products: [],
    error: null,
  };
  
  export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'DELETE_PRODUCT_SUCCESS':
        return {
          ...state,
          products: state.products.filter((product) => product.id !== action.payload),
          error: null,
        };
      case 'DELETE_PRODUCT_FAILURE':
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };


