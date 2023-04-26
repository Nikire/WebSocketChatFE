import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT,
  GET_MESSAGES,
  SET_LOADING,
} from '../actionTypes';

const initialState = {
  isAuthenticated: false,
  loading: true,
  user: null,
  error: null,
  messages: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case GET_MESSAGES:
      return { ...state, messages: [...action.payload] };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        error: null,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: null,
      };
    default:
      return state;
  }
};

export default rootReducer;
