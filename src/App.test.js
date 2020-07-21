import React from 'react';
import { render } from '@testing-library/react';
import homePage from './_components/_parts/_home';

test('renders learn react link', () => {
  const { getByText } = render(<homePage />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
