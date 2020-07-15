import React from 'react';
import { Card } from 'react-bootstrap';

const Book = ({ id, author, title, year, country, city, pages }) => (
  <Card border="primary" className="book-card w-100 h-100 mt-5">
    <Card.Body>
      <Card.Title className="book-card--title">Title: {title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted book-card--id">
        <strong>Id:</strong> {id}
      </Card.Subtitle>
      <Card.Subtitle className="mb-2 text-muted book-card--author">
        <strong>Author:</strong> {author}
      </Card.Subtitle>
      <Card.Subtitle className="mb-2 text-muted book-card--city">
        <strong>City:</strong> {city}
      </Card.Subtitle>
      <Card.Subtitle className="mb-2 text-muted book-card--country">
        <strong>Country:</strong> {country}
      </Card.Subtitle>
      <Card.Subtitle className="mb-2 text-muted book-card--year">
        <strong>Year:</strong> {year}
      </Card.Subtitle>
      <Card.Subtitle className="mb-2 text-muted book-card--pages">
        <strong>Pages:</strong> {pages}
      </Card.Subtitle>
    </Card.Body>
  </Card>
);

export default Book;
