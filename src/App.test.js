import React from 'react';
import { MemoryRouter as Router, Route, Switch } from 'react-router-dom';
import { render } from '@testing-library/react';
import App from './App';

const setupApp = () => (

  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <App />
    </Switch>
  </Router>
);

test('renders without errors', () => {
  const { container } = render(setupApp());
  expect(container).toBeInTheDocument();
});
