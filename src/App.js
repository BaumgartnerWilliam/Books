import './App.scss';

import React, { useCallback, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import queryString from 'query-string';
import { useHistory, useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './container/Main/Main';
import { mockData } from './services/BookApi/FetchBooks.service';
import dataTransform from './services/BookTransform/BookTransform.service';

function App() {
  const location = useLocation();
  const history = useHistory();
  const path = window.location.pathname;
  const params = queryString.parse(location.search);
  const initialPage = Number(params.page) || 1;
  const initialSearch = params.search || '';

  const [books, setBooks] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(initialPage);
  const [search, setSearch] = useState(initialSearch);

  const mainProps = {
    onNext: () => setPage(page + 1),
    onPrevious: () => setPage(page - 1),
    onSearchChange: setSearch,
    search,
    loading,
    books
  };

  useEffect(() => {
    history.push(`${path}?page=${page}&search=${search}`);
  }, [page, search]);

  useEffect(() => {
    setLoading(true);
    Promise.resolve(mockData).then(response => {
      setLoading(false);
      setBooks(response.books.map(dataTransform));
    });
  }, [page, search]);

  return (
    <div className="App">
      <Main {...mainProps} />
    </div>
  );
}

export default App;
