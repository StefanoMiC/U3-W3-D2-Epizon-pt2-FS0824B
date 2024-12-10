// questo file si occuperà di creare il nostro Redux Store all'avvio dell'applicazione

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducers/cartReducer";
import booksReducer from "../reducers/booksReducer";
import bookSelectedReducer from "../reducers/bookSelectedReducer";
import userReducer from "../reducers/userReducer";
// import mainReducer from "../reducers";

// questa funzione si occuperà di creare lo Store grazie ad una funzione esportata dal pacchetto @reduxjs/toolkit,
// la funzione ci chiede delle opzioni (oggetto), nel quale inseriremo il riferimento al nostro primo reducer (funzione)
// il configureStore restituirà quindi un oggetto di Stato globale che sarà poi contenuto nella variabile store che abbiamo esportato

// tra le altre cose che fa configureStore ci abilita anche i redux dev tools

// non avremo più un singolo reducer principale, ma singoli reducer che gestiranno la loro porzione di stato (slice) e verranno combinati assieme
// prima di essere forniti allo Store

const rootReducer = combineReducers({
  cart: cartReducer,
  books: booksReducer,
  bookSelected: bookSelectedReducer,
  user: userReducer
});

const store = configureStore({
  // reducer: mainReducer
  reducer: rootReducer
});

export default store;
