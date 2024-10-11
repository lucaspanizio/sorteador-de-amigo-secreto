import { RecoilRoot } from 'recoil';
import { fireEvent, render, screen } from '@testing-library/react';
import { Footer } from '@/components/Footer';
import { useAttendees } from '@/hooks/useAttendees';

jest.mock('@/hooks/useAttendees', () => {
  return {
    useAttendees: jest.fn(),
  };
});

const mockNavigation = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavigation,
  };
});

const renderComponent = () => {
  render(
    <RecoilRoot>
      <Footer />
    </RecoilRoot>,
  );
};

describe('Footer', () => {
  describe('When there are not enough participants', () => {
    it('the game should not start', () => {
      (useAttendees as jest.Mock).mockReturnValue({ attendees: [] });

      renderComponent();

      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });
  });

  describe('When there are enough participants', () => {
    beforeEach(() => {
      (useAttendees as jest.Mock).mockReturnValue({
        attendees: ['Ana', 'João', 'Pedro'],
      });

      renderComponent();
    });

    it('the game can be start', () => {
      const button = screen.getByRole('button');
      expect(button).not.toBeDisabled();
    });

    it('the game was started', () => {
      const button = screen.getByRole('button');
      fireEvent.click(button);

      expect(mockNavigation).toHaveBeenCalledTimes(1);
      expect(mockNavigation).toHaveBeenCalledWith('/draw');
    });
  });
});
