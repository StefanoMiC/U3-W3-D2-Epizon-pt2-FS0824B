import { Component } from "react";
import { connect } from "react-redux";
import { selectUserNameAction } from "../redux/actions";
// la funzione connect è una funzinoe di alto livello HOF - Higher Order Function, che connette il nostro Componente allo Store,
// questa funzione vuole due parametri (mapStateToProps, mapDispatchToProps)

// questi due parametri "mapperanno" cioè applicheranno delle prop sul nostro componente a classe
// il nostro componente avrà sia le prop riguardanti la porzione di stato che vogliamo leggere,
// sia la funzione dispatch che sarà in grado di aggiornare lo stato con l'azione corrispondente

// 1) definiamo mapStateToProps

const mapStateToProps = state => {
  // questa funzione viene chiamata dalla connect, ci regala lo stato globale nel suo unico parametro,
  // questo ci permette di estrarre i valori che ci interessano dallo stato globale e mapparli (applicarli) come prop del componente

  // le proprietà che creiamo in questo oggetto diventano il nome della nostra prop, che avrà un qualche valore derivante dal nostro Redux Store
  return {
    user: state.user.content,
    cartLength: state.cart.content.length,
    books: state.books.content
  };
};

// 2) definiamo mapDispatchToProps
const mapDispatchToProps = dispatch => {
  // questa funzione ci regala la dispatch come parametro, regalatoci dalla connect

  // anche qui ritorneremo sempre un oggetto che rappresenterà le props che verranno applicate al componente, in questo caso avermo una prop chiamata
  // this.props.setUser()
  return {
    // nel caso in cui volessimo poter passare un parametro alla nostra funzione setUser, lo dobbiamo specificare nella sua definizione qua sotto,
    // per poi passare il valore come argomento durante la chiamata di this.props.setUser("stringa del nome")
    // chiamando setUser implicitamente stiamo anche eseguendo la dispatch di un'azione
    setUser: name => {
      // dispatch({ type: SET_USER, payload: name });
      dispatch(selectUserNameAction(name));
    }
  };
};

class Footer extends Component {
  render() {
    return (
      <footer className="epizon-footer" onClick={() => this.props.setUser("Epicode")}>
        <span className="text-muted">
          Epizon {new Date().getFullYear()}©, {this.props.user}, il tuo carrello contiene: {this.props.cartLength} prodotti
        </span>
        <ul>
          {this.props.books.map(book => (
            <li key={book.id}>{book.title}</li>
          ))}
        </ul>
      </footer>
    );
  }
}

// connect prende il componente Footer e lo aumenta di funzionalità nelle sue props
// gli passerà valori presi dallo stato globale come singole prop user e cartLength, inoltre aggiunge anche una prop setUser che,
// se chiamata, attiva il processo di modifica dello Store tramite la chiamata alla dispatch interna
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
