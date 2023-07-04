import axios from "axios";

export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: 'USER_REGISTER_REQUEST' });

  try {
    const response = await axios.post('/api/users/register', user);
    console.log(response);
    dispatch({ type: 'USER_REGISTER_SUCCESS' });
    window.location.href = '/';
  } catch (error) {
    dispatch({ type: 'USER_REGISTER_FAILED', payload: error });
  }
};

export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: 'USER_LOGIN_REQUEST' });
  try {
    const response = await axios.post('/api/users/login', user);
    console.log(response);
    if (response.data.isAdmin) {
      // Admin login successful
      dispatch({ type: 'USER_LOGIN_SUCCESS', payload: response.data });
      localStorage.setItem('currentUser', JSON.stringify(response.data));
      window.location.href = '/admin'; // Redirect to the admin page
      alert('Welcome Admin')

    } else {
      // Regular user login
      dispatch({ type: 'USER_LOGIN_SUCCESS', payload: response.data });
      localStorage.setItem('currentUser', JSON.stringify(response.data));
      window.location.href = '/home'; // Redirect to the regular user page
      alert('login Successfull')
    }
  } catch (error) {
    dispatch({ type: 'USER_LOGIN_FAILED', payload: error });
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('currentUser');
  window.location.href = '/';
};
