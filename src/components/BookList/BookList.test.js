import React from 'react';
import { render } from '@testing-library/react';
import BookList from './BookList';

const bookCardClass = '.book-list';

test('renders without errors', () => {
  const { container } = render(<BookList />);
  const el = container.querySelector(bookCardClass);
  expect(el).toBeTruthy();
});
