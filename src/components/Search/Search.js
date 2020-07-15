import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

const Search = ({ onChange }) => (
  <InputGroup className="search-bar">
    <InputGroup.Prepend>
      <InputGroup.Text>Search</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      placeholder="Search"
      aria-label="Search"
      aria-describedby="search-input"
      onChange={e => onChange(e.target.value)}
    />
  </InputGroup>
);

export default Search;
