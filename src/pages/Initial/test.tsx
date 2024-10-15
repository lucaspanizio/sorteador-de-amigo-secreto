import { RecoilRoot } from 'recoil';
import { fireEvent, render, screen } from '@testing-library/react';
import { useAttendees } from '@/hooks/useAttendees';
import { Initial } from '@/pages/Initial';

const mockNavigation = jest.fn();
const mockDrawer = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavigation,
  };
});

jest.mock('@/hooks/useDrawer', () => {
  return {
    useDrawer: () => mockDrawer,
  };
});

jest.mock('@/hooks/useAttendees', () => {
  return {
    useAttendees: jest.fn(),
  };
});

const renderComponent = () => {
  return render(
    <RecoilRoot>
      <Initial />
    </RecoilRoot>,
  );
};

describe('Page: Initial', () => {
  describe('When render page', () => {
    it('should be exactly like the snapshot', () => {
      (useAttendees as jest.Mock).mockReturnValue({ attendees: [] });
      const { container } = renderComponent();
      expect(container).toMatchSnapshot();
    });
  });

  describe('When there are not enough attendees', () => {
    it('the game can NOT be started', () => {
      (useAttendees as jest.Mock).mockReturnValue({ attendees: [] });

      renderComponent();

      const button = screen.getByTestId('btnIniciar');
      expect(button).toBeDisabled();
    });
  });

  describe('When there are enough attendees', () => {
    beforeEach(() => {
      (useAttendees as jest.Mock).mockReturnValue({
        attendees: ['Ana', 'João', 'Pedro'],
      });

      renderComponent();
    });

    it('the game CAN be started', () => {
      const button = screen.getByTestId('btnIniciar');
      expect(button).not.toBeDisabled();
    });

    it('the game WAS started', () => {
      const button = screen.getByTestId('btnIniciar');
      fireEvent.click(button);

      expect(mockNavigation).toHaveBeenCalledTimes(1);
      expect(mockNavigation).toHaveBeenCalledWith('/sorteio');
      expect(mockDrawer).toHaveBeenCalledTimes(1);
    });
  });
});
