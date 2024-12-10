// Qui dentro definiremo i TYPE come COSTANTI

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SELECT_BOOK = "SELECT_BOOK";
export const SET_USER = "SET_USER";
export const SET_BOOKS = "SET_BOOKS";
export const SET_BOOKS_LOADING_ON = "SET_BOOKS_LOADING_ON";
export const SET_BOOKS_LOADING_OFF = "SET_BOOKS_LOADING_OFF";
export const SET_BOOKS_ERROR_ON = "SET_BOOKS_ERROR_ON";
export const SET_BOOKS_ERROR_OFF = "SET_BOOKS_ERROR_OFF";

// ACTION CREATORS => funzioni che ritornano l'azione (l'oggetto)

// export const addToCartAction = (bookSelected) => {
//     return { type: ADD_TO_CART, payload: bookSelected }
// }

// versione condensata della precedente, le tonde servono a definire che
// stiamo tornando un oggetto evitando che le graffe vengano intese come contesto della funzione
export const addToCartAction = bookSelected => ({ type: ADD_TO_CART, payload: bookSelected });

export const addToCartActionWithThunk = bookSelected => {
  return (dispatch, getState) => {
    const currentState = getState();
    const userName = currentState.user.content;

    const foundIndex = currentState.cart.content.findIndex(book => book.id === bookSelected.id);
    const bookNotAlreadyInCart = foundIndex === -1;

    if (bookNotAlreadyInCart) {
      dispatch({ type: ADD_TO_CART, payload: bookSelected });
    } else {
      alert(userName + ", guarda che il libro è già nel carrello!");
    }
  };
};
export const removeFromCartAction = i => ({ type: REMOVE_FROM_CART, payload: i });
export const selectUserNameAction = inputValue => ({ type: SET_USER, payload: inputValue });
export const selectBookAction = book => ({ type: SELECT_BOOK, payload: book });

export const getBooksAction = () => {
  // grazie a redux-thunk, già integrato come middleware nel nostro configureStore() di redux toolkit,
  // abbiamo la facoltà di poter ritornare dal nostro action creator, non direttamente un oggetto, ma una FUNZIONE che può gestire logica all'interno
  // ANCHE ASINCRONA!

  // eslint-disable-next-line no-unused-vars
  return async (dispatch, getState) => {
    // il primo parametro contiene la funzione dispatch, il secondo contiene una funzione che ci ricava l'oggetto di stato globale aggiornato

    const currentState = getState(); // getState va chiamato per restituirci l'oggetto di stato aggiornato nel momento in cui la chiamo
    console.log("CURRENT STATE", currentState);

    try {
      dispatch({ type: SET_BOOKS_LOADING_ON });
      let resp = await fetch("https://striveschool-api.herokuapp.com/food-books");
      if (resp.ok) {
        let fetchedBooks = await resp.json();
        dispatch({ type: SET_BOOKS, payload: fetchedBooks }); // [{}, {}]
      } else {
        console.log("error");
        throw new Error("Errore nella fetch");
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: SET_BOOKS_ERROR_ON, payload: error.message });
    } finally {
      dispatch({ type: SET_BOOKS_LOADING_OFF });
    }
  };
};
