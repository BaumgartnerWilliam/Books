import React from 'react';
import { Container } from 'react-bootstrap';
import { Search, BookList } from '../../components/';

const Main = ({ onPrevious, onNext, onSearchChange, books, search, loading }) => (
  <Container className="mt-5">
    <Search onChange={onSearchChange} initialValue={search}>
      <Search.Previous onClick={onPrevious} />
      <Search.Next onClick={onNext} />
    </Search>
    <BookList books={books} loading={loading} />
  </Container>
);

export default Main;
