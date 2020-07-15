import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Search from './Search';

const searchBar = '.search-bar';

test('renders without errors', () => {
  const { container } = render(<Search />);
  const el = container.querySelector(searchBar);
  expect(el).toBeTruthy();
});

test('fires onChange events', () => {
  const props = { onChange: jest.fn() };
  const ev = {
    target: {
      value: 'search'
    }
  };
  const { getByLabelText } = render(<Search {...props} />);
  fireEvent.change(getByLabelText('Search'), ev);

  expect(props.onChange).toHaveBeenCalledWith('search');
});
