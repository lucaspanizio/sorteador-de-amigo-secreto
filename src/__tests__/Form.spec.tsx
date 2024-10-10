import { RecoilRoot } from 'recoil';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { Form } from '@/components/Form';

const getElements = () => {
  const input = screen.getByPlaceholderText(
    'Insira os nomes dos participantes',
  );
  const button = screen.getByRole('button');
  return { input, button };
};

const addNameInInputAndClickOnButton = ({ times = 1 }: { times?: number }) => {
  const { input, button } = getElements();

  for (let i = 0; i < times; i++) {
    fireEvent.change(input, { target: { value: 'Ana Catarina' } });
    fireEvent.click(button);
  }
};

describe('Form', () => {
  beforeEach(() => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>,
    );
  });

  jest.useFakeTimers();

  it('Should not add a name to the list if the input is empty', () => {
    const { input, button } = getElements();
    expect(input).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it('Should add a name to the list if the input is filled', () => {
    addNameInInputAndClickOnButton({});

    const { input } = getElements();
    expect(input).toHaveFocus();
    expect(input).toHaveValue('');
  });

  it('Should not add duplicate names to the list', () => {
    addNameInInputAndClickOnButton({ times: 2 });

    const errorMessage = screen.getByRole('alert');
    expect(errorMessage.textContent).toBe(
      'Nomes duplicados não são permitidos!',
    );
  });

  it('The error message should disappear after 2 seconds', () => {
    addNameInInputAndClickOnButton({ times: 2 });

    let errorMessage = screen.queryByRole('alert');
    expect(errorMessage).toBeInTheDocument();

    act(() => jest.advanceTimersByTime(2000));

    errorMessage = screen.queryByRole('alert');
    expect(errorMessage).toBeNull();
  });
});
