// questo file si occuperà di creare il nostro Redux Store all'avvio dell'applicazione

import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers";

// questa funzione si occuperà di creare lo Store grazie ad una funzione esportata dal pacchetto @reduxjs/toolkit,
// la funzione ci chiede delle opzioni (oggetto), nel quale inseriremo il riferimento al nostro primo reducer (funzione)
// il configureStore restituirà quindi un oggetto di Stato globale che sarà poi contenuto nella variabile store che abbiamo esportato

// tra le altre cose che fa configureStore ci abilita anche i redux dev tools
const store = configureStore({
  reducer: mainReducer
});

export default store;
