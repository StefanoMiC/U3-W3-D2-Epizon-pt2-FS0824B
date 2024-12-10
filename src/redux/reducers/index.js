// Questo sarà il nostro primo Reducer! (il nostro ufficio postale di smistamento richieste)
// un reducer dev'essere una funzione PURA, che prenderà lo STATO CORRENTE nel momento della "dispatch" e l'action inviata
// grazie a queste due informazioni computerà SEMPRE un NUOVO STATO (senza ambiguità)

// OGNI VOLTA che verrà "risvegliato" (ad ogni dispatch) avrà bisogno di leggere dalla nostra action il suo TYPE (per questo il type è obbligatorio)
// in più opzionalmente ci potrebbe essere anche un payload da dover leggere

// da dove cominciare quindi?
// si comincia col creare uno stato iniziale (default) per il primo avvio dell'applicazione:

const initialState = {
  bookSelected: {
    content: null
  },
  cart: {
    // qui ci portebbero essere altre proprietà di stato, vale la pena darci la possibilità di metterle in futuro
    createdAt: new Date().toISOString(),
    content: [] // questo rappresenta il contenuto, ora vuoto, del carrello. acquisirà oggetti di libro.
  },
  user: {
    content: ""
  }
};

// Questo stato iniziale è quello che si genera automaticamente ad ogni refresh del browser (è la condizione iniziale della nostra App)
// potremo modificarlo seguendo il principio dell'IMMUTABILITA' - creando SEMPRE un NUOVO OGGETTO nella sua interezza,
// partendo dalla condizione di stato precedente, insieme ai dati nuovi derivanti da un eventuale payload della nostra ACTION

// il reducer è una funzione PURA e quindi non modifica/manipola MAI direttamente i suoi parametri (state, action). Li legge solamente!
// in base alle operazioni matematiche prevedibili, computerà il NUOVO STATO di ritorno dalla sua funzione.
// questo stato ritornato è DI FATTO il nuovo STORE AGGIORNATO!

// per il primo e soltato il primo avvio ci dobbiamo premurare di fornire uno stato di default al nostro reducer,
// altrimenti l'App si troverebbe con uno stato undefined durante il caricamento iniziale dei componenti

// applichiamo il default con = initialState perché non possiamo permettere che il nostro state sia undefined inizialmente
const mainReducer = (state = initialState, action) => {
  // da qui, IN OGNI CASO o SITUAZIONE, si dovrà PER FORZA ritornare UN NUOVO STATO, quindi quantomeno ritorneremo il precedente facendo sì che
  // il funzionamento del Redux Store sia mantenuto. Bisogna evitare a tutti i costi che questa funzione ritorni un undefined.
  // Per farlo creeremo uno switch con case default che farà il return dello stato attuale, così da mantenerlo sempre funzionante
  //   console.log("state", state);

  switch (action.type) {
    case "ADD_TO_CART":
      //   console.log("ACTION", action);
      return {
        ...state,
        cart: {
          ...state.cart,
          // content: state.cart.content.push()  // ❌ VIETATO USARE METODI CHE MUTANO L'ARRAY DI PARTENZA!
          // content: state.cart.content.concat(action.payload) // ✅l'operazione di .concat() restituisce un nuovo array senza mutare l'originale
          content: [...state.cart.content, action.payload] // ✅l'operazione tramite spread operator non va a mutare l'array originario, quindi è permessa
        }
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: {
          ...state.cart,
          // content: state.cart.content.splice(action.payload, 1) // ❌ splice muta l'array originale
          // content: state.cart.content.slice(0, action.payload).concat(state.cart.slice(action.payload + 1)) // ✅
          // content: [...state.cart.content.slice(0, action.payload), ...state.cart.content.slice(action.payload + 1)] // ✅
          content: state.cart.content.filter((_, i) => i !== action.payload) // ✅ filter è un altro metodo che non muta l'array originale e ritorna
          // un nuovo array, perfetto per quello che serve a noi
        }
      };

    case "SELECT_BOOK":
      return {
        ...state,
        bookSelected: {
          ...state.bookSelected,
          content: action.payload
        }
      };

    case "SET_USER":
      return {
        ...state,
        user: {
          ...state.user,
          content: action.payload
        }
      };
    default:
      return state;
  }
};

export default mainReducer;
