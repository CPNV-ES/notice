import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Notice text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Notice/i);
  expect(linkElement).toBeInTheDocument();
});
