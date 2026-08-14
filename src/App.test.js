// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SparkEdge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SparkEdge/i);
    expect(titleElement).toBeInTheDocument();
});
