import React from 'react';
import { render } from '@testing-library/react';
import Main from './Main';

test('renders without errors', () => {
  const { container } = render(<Main />);
  expect(container).toBeInTheDocument();
});
