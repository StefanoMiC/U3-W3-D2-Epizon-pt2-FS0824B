import { Button, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { selectUserNameAction } from "../redux/actions";

const CartIndicator = () => {
  const navigate = useNavigate();

  // useSelector è un hook regalatoci dallo Store e quindi anche dal Provider
  // ci chiede una funzione per descrivergli cosa vogliamo ottenere, in lettura, dallo stato globale
  // quello che la funzione ritornerà sarà il valore che troveremo nella variabile associata
  const cartLength = useSelector(state => state.cart.content.length);
  const user = useSelector(state => state.user.content);

  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");

  return (
    <div className="ms-auto text-end mt-3 mb-4">
      {user ? (
        <div className="d-flex align-items-center">
          <span className="me-2">
            Ciao <strong>{user}</strong>, ben tornato!
          </span>
          <Button color="primary" onClick={() => navigate("/cart")}>
            <FaShoppingCart />
            <span className="ms-2">{cartLength}</span>
          </Button>
        </div>
      ) : (
        <div className="d-flex align-items-center">
          <FormControl placeholder="Inserisci il tuo nome" value={inputValue} onChange={e => setInputValue(e.target.value)} />
          <Button
            variant="info"
            className="flex-shrink-0"
            onClick={() =>
              // dispatch({ type: SET_USER, payload: inputValue })
              dispatch(selectUserNameAction(inputValue))
            }
          >
            Log in
          </Button>
        </div>
      )}
    </div>
  );
};

export default CartIndicator;
