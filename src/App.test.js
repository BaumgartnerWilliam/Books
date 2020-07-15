import React from 'react';
import { MemoryRouter as Router, Route, Switch } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
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
  const { container } = render(act(setupApp));
  expect(container).toBeInTheDocument();
});
