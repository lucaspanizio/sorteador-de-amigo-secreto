import { RecoilRoot } from 'recoil';
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import { useAttendees } from '@/hooks/useAttendees';
import { useResult } from '@/hooks/useResult';
import { Sorteio } from '@/pages/Sorteio';

jest.mock('@/hooks/useAttendees', () => {
  return {
    useAttendees: jest.fn(),
  };
});

jest.mock('@/hooks/useResult', () => {
  return {
    useResult: jest.fn(),
  };
});

const mockAttendees = ['Ana', 'João', 'Pedro'];
const mockResultState = new Map([
  ['Ana', 'João'],
  ['João', 'Pedro'],
  ['Pedro', 'Ana'],
]);

const getElements = () => {
  const select = screen.getByRole('combobox') as HTMLSelectElement;
  const button = screen.getByRole('button', { name: /sortear/i });

  return { select, button };
};

const selectOptionAndClickButton = () => {
  const { select, button } = getElements();

  fireEvent.change(select, { target: { value: mockAttendees[0] } });
  fireEvent.click(button);
};

describe('Page: Sorteio', () => {
  beforeEach(() => {
    (useResult as jest.Mock).mockReturnValue({ result: mockResultState });
    (useAttendees as jest.Mock).mockReturnValue({ attendees: mockAttendees });
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>,
    );
  });

  describe('When render page', () => {
    it('should be list all the attendees', () => {
      const option = screen.getAllByRole('option');
      expect(option[0]).toHaveValue('');
      expect(option).toHaveLength(mockAttendees.length + 1);
    });
  });

  describe('When choosing a name from the list', () => {
    it('should be enable the button', () => {
      const { select, button } = getElements();

      fireEvent.change(select, { target: { value: mockAttendees[0] } });

      expect(button).toBeEnabled();
    });
  });

  describe('When click button', () => {
    jest.useFakeTimers();

    it('should show the Secret Santa result', () => {
      selectOptionAndClickButton();

      const secretSanta = screen.getByRole('alert');
      expect(secretSanta).toBeInTheDocument();
      expect(secretSanta).toHaveTextContent(
        mockResultState.get(mockAttendees[0])!,
      );
    });

    it('the Secret Santa result should disappear after 5 seconds', () => {
      selectOptionAndClickButton();

      const secretSanta = screen.getByRole('alert');
      expect(secretSanta).toBeInTheDocument();

      act(() => {
        jest.advanceTimersByTime(5000);
      });

      expect(screen.queryByRole('alert')).toBeNull();
    });
  });
});
