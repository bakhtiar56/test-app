// Login.test.tsx
import React from 'react';
import { render, fireEvent,screen } from '@testing-library/react';
import Login from './Login';

describe('Login component', () => {
  it('displays "Login Successful" after user submits username', () => {
    // Render the component
    render(<Login />);


    // Simulate typing a name into the input field
    const inputElement = screen.getByPlaceholderText('Enter your username');
    fireEvent.change(inputElement, { target: { value: 'John Snow' } });

    // Simulate clicking the login button
    const buttonElement = screen.getByText('Login');
    fireEvent.click(buttonElement);

    // Assert that the "Login Successful" text is displayed
    const successTextElement = screen.getByText('Login Successful');
    expect(successTextElement).toBeInTheDocument();
  });
});