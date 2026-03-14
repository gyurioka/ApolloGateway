// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ApolloGateway title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ApolloGateway/i);
    expect(titleElement).toBeInTheDocument();
});
