import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { loginFailure, registerFailure } from '../../redux/actions';

const ErrorHandler = () => {
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error,
      }).then(() => {
        // Clear the error state after the alert is closed
        dispatch(loginFailure(null));
        dispatch(registerFailure(null));
      });
    }
  }, [error, dispatch]);

  return null;
};

export default ErrorHandler;
