import React from 'react';
import { InputGroup, FormControl, Button, Container } from 'react-bootstrap';

const Search = ({ onChange, children, initialValue }) => (
  <Container>
    <InputGroup className="search-bar">
      <InputGroup.Prepend>
        <InputGroup.Text>Search</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-input"
        defaultValue={initialValue}
        onChange={e => onChange(e.target.value)}
      />
      {children}
    </InputGroup>
  </Container>
);

Search.Previous = ({onClick}) => <Button onClick={onClick}>Previous Page</Button>;
Search.Next = ({onClick}) => <Button onClick={onClick}>Next Page</Button>;

export default Search;
