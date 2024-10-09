import { render, screen } from '@testing-library/react';
import { Form } from '@/components/Form';

test("New participants can't be added when the input is empty", () => {
  render(<Form />);

  const input = screen.getByPlaceholderText(
    'Insira os nomes dos participantes',
  );

  const button = screen.getByRole('button');

  expect(input).toBeInTheDocument();
  expect(button).toBeDisabled();
});
