import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Book = ({ id, author, title, year, country, city, pages }) => (
  // todo: add react-int to handle pluralization
  <Card className="book-card">
    <Card.Body>
      <Card.Title className="book-card--title">Title: {title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted book-card--id">
        Id: {id}
      </Card.Subtitle>
      <Card.Subtitle className="mb-2 text-muted book-card--author">
        Author: {author}
      </Card.Subtitle>
      <Card.Subtitle className="mb-2 text-muted book-card--city">
        City: {city}
      </Card.Subtitle>
      <Card.Subtitle className="mb-2 text-muted book-card--country">
        Country: {country}
      </Card.Subtitle>
      <Card.Subtitle className="mb-2 text-muted book-card--year">
        Year: {year}
      </Card.Subtitle>
      <Card.Subtitle className="mb-2 text-muted book-card--pages">
        Pages: {pages}
      </Card.Subtitle>
    </Card.Body>
  </Card>
);

export default Book;
