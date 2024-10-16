import { RecoilRoot } from 'recoil';
import { render, screen } from '@testing-library/react';
import { AttendeesList } from '@/components/AttendeesList';
import { useAttendees } from '@/hooks/useAttendees';

const renderComponent = () => {
  render(
    <RecoilRoot>
      <AttendeesList />
    </RecoilRoot>,
  );
};

jest.mock('@/hooks/useAttendees', () => {
  return {
    useAttendees: jest.fn(),
  };
});

describe('Component: AttendeesList', () => {
  it('should render a message when there are no attendees', () => {
    (useAttendees as jest.Mock).mockReturnValue({ attendees: [] });

    renderComponent();

    const message = screen.getByText('Nenhum participante adicionado ...');
    expect(message).toBeInTheDocument();
  });

  it('should not render an empty list', () => {
    (useAttendees as jest.Mock).mockReturnValue({ attendees: [] });

    renderComponent();

    const list = screen.queryByRole('listitem');
    expect(list).toBeNull();
  });

  it('should be render a filled list', () => {
    (useAttendees as jest.Mock).mockReturnValue({
      attendees: ['Ana', 'João', 'Pedro'],
    });

    renderComponent();

    const items = screen.queryAllByRole('listitem');
    expect(items).toHaveLength(3);
  });
});
