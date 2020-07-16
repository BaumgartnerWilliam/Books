import React from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import Book from '../Book/Book';

const BookList = ({ books = [], loading }) => (
  <Container className="book-list pt-5">
    {loading && (
      <Col className="d-flex justify-content-center align-items-center flex-column mt-5">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Col>
    )}
    <Row>
      {books.map((book, id) => (
        <Col key={id} xs={12} md={6} className="mb-2">
          <Book {...book} />
        </Col>
      ))}
    </Row>
  </Container>
);

export default BookList;
