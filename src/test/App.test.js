import React from 'react';
import { getByPlaceholderText, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import App from '../App';

test('renders search bar properly', () => {
  const { getByPlaceholderText, getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByPlaceholderText("Type City Name")).toBeInTheDocument();
  expect (getByText("Recent Locations")).toBeInTheDocument();
});
