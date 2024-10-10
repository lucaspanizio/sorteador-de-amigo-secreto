import { fireEvent, render, screen } from '@testing-library/react';
import { Form } from '@/components/Form';
import { RecoilRoot } from 'recoil';

test("New attendees can't be added when the input is empty", () => {
  render(
    <RecoilRoot>
      <Form />
    </RecoilRoot>,
  );

  const input = screen.getByPlaceholderText(
    'Insira os nomes dos participantes',
  );

  const button = screen.getByRole('button');

  expect(input).toBeInTheDocument();
  expect(button).toBeDisabled();
});

test('New attendee can be added when the input is filled', () => {
  render(
    <RecoilRoot>
      <Form />
    </RecoilRoot>,
  );

  const input = screen.getByPlaceholderText(
    'Insira os nomes dos participantes',
  );

  const button = screen.getByRole('button');

  fireEvent.change(input, {
    target: {
      value: 'Ana Catarina',
    },
  });

  fireEvent.click(button);

  expect(input).toHaveFocus();
  expect(input).toHaveValue('');
});
