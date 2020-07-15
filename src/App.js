import './App.scss';

import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import queryString from 'query-string';
import Main from './container/Main/Main';
import fetchBooksApi from './services/BookApi/FetchBooks.service';
import dataTransform from './services/BookTransform/BookTransform.service';

// so we delay a bit user input
// todo: move to a hook
const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    const context = this;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, wait);
  };
};

const DEFAULT_DEBOUNCE_VALUE = 1000;

// todo: move to env config & file
const fetchBooks = fetchBooksApi({
  fetch: axios.post,
  baseUrl: 'http://nyx.vima.ekt.gr:3000/api/books'
});

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
  const onSearchChange = searchValue => {
    // reset page
    setPage(1);
    setSearch(searchValue);
  };

  const mainProps = {
    onNext: () => setPage(page + 1),
    onPrevious: () => setPage(page - 1),
    onSearchChange: debounce(onSearchChange, DEFAULT_DEBOUNCE_VALUE),
    search,
    loading,
    books
  };

  //todo: negative pages on user input
  useEffect(() => {
    history.push(`${path}?page=${page}&search=${search}`);
  }, [page, search, history, path]);

  useEffect(() => {
    setLoading(true);
    fetchBooks({ page, search }).then(response => {
      setLoading(false);
      setBooks(response.data.books.map(dataTransform));
    }).catch(() => {
      setLoading(false);
      setBooks(undefined);
    })
  }, [page, search]);

  return (
    <div className="App">
      <Main {...mainProps} />
    </div>
  );
}

export default App;
