import React from 'react';
import { render } from '@testing-library/react';
import Book from './Book';

const bookCardClass = '.book-card';
const fields = ['id', 'author', 'title', 'year', 'country', 'city', 'pages'];

const mockData = {
  id: 2,
  author: 'book, authors',
  title: 'book title',
  year: 2020,
  country: 'country',
  city: 'london',
  pages: 99
};

test('renders without errors', () => {
  const { container } = render(<Book />);
  const el = container.querySelector(bookCardClass);
  expect(el).toBeTruthy();
});

fields.forEach(field => {
  test(`renders ${field} properly`, () => {
    const { container } = render(<Book {...mockData} />);
    const fieldEl = container.querySelector(`${bookCardClass}--${field}`);
    expect(fieldEl.textContent).toContain(mockData[field]);
  });
});
