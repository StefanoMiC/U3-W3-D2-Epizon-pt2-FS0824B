import { Alert, Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartIndicator from "./CartIndicator";
import { useSelector } from "react-redux";

const TopBar = () => {
  const bookSelected = useSelector(state => state.bookSelected.content);
  const hasError = useSelector(state => state.books.hasError);
  const errorMessage = useSelector(state => state.books.errorMessage);

  return (
    <Row className="gx-0">
      {hasError && (
        <Col xs={12}>
          <Alert variant="danger" className="mt-3">
            {errorMessage}
          </Alert>
        </Col>
      )}

      <Col sm={12} className="text-center background-div">
        <Link to="/" className="text-decoration-none">
          <h1 className="display-4 d-inline-block align-middle me-3">Epizon Book Store</h1>
        </Link>
        {bookSelected && (
          <>
            <Image src={bookSelected.imageUrl} height={50} />
            <span>{bookSelected.title}</span>
          </>
        )}
      </Col>
      <Col className="d-flex justify-content-end align-items-center">
        <CartIndicator />
      </Col>
    </Row>
  );
};
export default TopBar;
