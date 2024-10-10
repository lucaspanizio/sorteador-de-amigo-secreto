import { RecoilRoot } from 'recoil';
import { fireEvent, render, screen } from '@testing-library/react';
import { Form } from '@/components/Form';

const renderComponent = () => {
  render(
    <RecoilRoot>
      <Form />
    </RecoilRoot>,
  );
};

const addNameInInputAndClickOnButton = (
  input: HTMLElement,
  button: HTMLElement,
) => {
  fireEvent.change(input, {
    target: {
      value: 'Ana Catarina',
    },
  });

  fireEvent.click(button);
};

describe('Form', () => {
  it('Should not add a name to the list if the input is empty', () => {
    renderComponent();

    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes',
    );

    const button = screen.getByRole('button');

    expect(input).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it('Should add a name to the list if the input is filled', () => {
    renderComponent();

    const button = screen.getByRole('button');
    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes',
    );

    addNameInInputAndClickOnButton(input, button);

    expect(input).toHaveFocus();
    expect(input).toHaveValue('');
  });

  it('Should not add duplicate names to the list', () => {
    renderComponent();

    const button = screen.getByRole('button');
    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes',
    );

    addNameInInputAndClickOnButton(input, button);
    addNameInInputAndClickOnButton(input, button);

    const errorMessage = screen.getByRole('alert');
    expect(errorMessage.textContent).toBe(
      'Nomes duplicados não são permitidos!',
    );
  });
});
