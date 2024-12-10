import { SET_BOOKS, SET_BOOKS_ERROR_OFF, SET_BOOKS_ERROR_ON, SET_BOOKS_LOADING_OFF, SET_BOOKS_LOADING_ON } from "../actions";

const initialState = {
  isLoading: false,
  hasError: false,
  errorMessage: "",
  content: []
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return {
        ...state,
        content: action.payload
      };

    case SET_BOOKS_LOADING_ON:
      return {
        ...state,
        isLoading: true
      };

    case SET_BOOKS_LOADING_OFF:
      return {
        ...state,
        isLoading: false
      };

    case SET_BOOKS_ERROR_ON:
      return {
        ...state,
        hasError: true,
        errorMessage: action.payload
      };

    case SET_BOOKS_ERROR_OFF:
      return {
        ...state,
        hasError: false,
        errorMessage: ""
      };

    default:
      return state;
  }
};

export default booksReducer;
