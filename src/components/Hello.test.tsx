import React from 'react';
import { render, screen } from '@testing-library/react';
import {Hello} from "./Hello"

test('renders a name', () => {
  render(<Hello name="Mike"/>);
  const linkElement = screen.getByText(/Hello Mike/i);
  expect(linkElement).toBeInTheDocument();
});
