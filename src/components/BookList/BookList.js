import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Book from '../Book/Book';

const BookList = ({ books = [] }) => (
  <Container className="book-list">
    <Row>
      {books.map(book => (
        <Col xs={6} md={3}>
          <Book {...book} />
        </Col>
      ))}
    </Row>
  </Container>
);

export default BookList;
