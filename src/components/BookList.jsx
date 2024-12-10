import { useSelector } from "react-redux";
import Book from "./Book";
import { Spinner } from "react-bootstrap";

const BookList = () =>
  // {
  // books
  // changeBook,
  // bookSelected
  // }
  {
    const books = useSelector(state => state.books.content);
    const isBooksLoading = useSelector(state => state.books.isLoading);
    return (
      <div className="mb-3">
        {isBooksLoading ? (
          <Spinner animation="border" variant="primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          books.map(book => (
            <Book
              key={book.id}
              book={book}
              // changeBook={changeBook}
              // bookSelected={bookSelected}
            />
          ))
        )}
      </div>
    );
  };

export default BookList;
