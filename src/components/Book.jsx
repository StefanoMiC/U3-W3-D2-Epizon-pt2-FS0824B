import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const Book = ({
  book
  // changeBook,
  // bookSelected
}) => {
  const dispatch = useDispatch();
  const bookSelected = useSelector(state => state.bookSelected.content);
  return (
    <Card
      className={bookSelected?.id === book.id ? "border-2 border-primary mt-3" : "border-2 mt-3"}
      onClick={() => {
        // changeBook(book)
        dispatch({ type: "SELECT_BOOK", payload: book });
      }}
      style={{ cursor: "pointer" }}
    >
      <Card.Body className="d-flex">
        <img className="book-image" src={book.imageUrl} alt="book cover" />
        <div>
          <Card.Text className="font-weight-bold">{book.title}</Card.Text>
          <p>{book.price}€</p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Book;
