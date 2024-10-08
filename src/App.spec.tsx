import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders the App component', () => {
  render(<App />);

  const heading = screen.getByText(/Sorteador de Amigo Secreto/i);
  expect(heading).toBeInTheDocument();
});
