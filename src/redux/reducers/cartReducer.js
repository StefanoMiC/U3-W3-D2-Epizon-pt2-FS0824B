import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions";

const initialState = {
  // qui ci portebbero essere altre proprietà di stato, vale la pena darci la possibilità di metterle in futuro
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  content: [] // questo rappresenta il contenuto, ora vuoto, del carrello. acquisirà oggetti di libro.
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      //   console.log("ACTION", action);
      return {
        ...state,
        updatedAt: new Date().toISOString(),
        // content: state.cart.content.push()  // ❌ VIETATO USARE METODI CHE MUTANO L'ARRAY DI PARTENZA!
        // content: state.cart.content.concat(action.payload) // ✅l'operazione di .concat() restituisce un nuovo array senza mutare l'originale
        content: [...state.content, action.payload] // ✅l'operazione tramite spread operator non va a mutare l'array originario, quindi è permessa
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        // content: state.cart.content.splice(action.payload, 1) // ❌ splice muta l'array originale
        // content: state.cart.content.slice(0, action.payload).concat(state.cart.slice(action.payload + 1)) // ✅
        // content: [...state.cart.content.slice(0, action.payload), ...state.cart.content.slice(action.payload + 1)] // ✅
        content: state.content.filter((_, i) => i !== action.payload) // ✅ filter è un altro metodo che non muta l'array originale e ritorna
        // un nuovo array, perfetto per quello che serve a noi
      };

    default:
      return state;
  }
};

export default cartReducer;
