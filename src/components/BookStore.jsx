import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import BookList from "./BookList";
import BookDetail from "./BookDetail";
import { useDispatch } from "react-redux";
import { getBooksAction } from "../redux/actions";

const BookStore = () => {
  // const [books, setBooks] = useState([]);
  // const [bookSelected, setBookSelected] = useState(null)

  const dispatch = useDispatch();

  useEffect(() => {
    // getBooks();

    dispatch(getBooksAction()); // dispatch({ type: SET_BOOKS, payload: fetchedBooks });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const getBooks = async () => {
  // try {
  //   let resp = await fetch("https://striveschool-api.herokuapp.com/food-books");
  //   if (resp.ok) {
  //     let fetchedBooks = await resp.json();
  //     setBooks(fetchedBooks);
  //   } else {
  //     console.log("error");
  //   }
  // } catch (error) {
  //   console.log(error);
  // }
  // };

  // const changeBook = (book) => setBookSelected(book)

  return (
    <Row className="center-row">
      <Col lg={4}>
        <BookList
        // bookSelected={bookSelected}
        // changeBook={changeBook}
        // books={books}
        />
      </Col>
      <Col lg={8}>
        <BookDetail
        // bookSelected={bookSelected}
        />
      </Col>
    </Row>
  );
};

export default BookStore;
