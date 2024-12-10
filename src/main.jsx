import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/store/index.js";

createRoot(document.getElementById("root")).render(
  // Provider è un HOC - Higher Order Component, che riceve lo stato globale (store) e si occuperà di fornire le logiche
  // per leggere e scrivere in questo Stato globale e per aggiornare i nostri componenti interni ad App ad ogni cambiamento di stato
  <Provider store={store}>
    <App />
  </Provider>
);
