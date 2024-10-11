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

describe('AttendeesList', () => {
  it('Should be render a empty list', () => {
    (useAttendees as jest.Mock).mockReturnValue({ attendees: [] });

    renderComponent();

    const items = screen.queryAllByRole('listitem');
    expect(items).toHaveLength(0);
  });

  it('Should be render a filled list', () => {
    (useAttendees as jest.Mock).mockReturnValue({
      attendees: ['Ana', 'João', 'Pedro'],
    });

    renderComponent();

    const items = screen.queryAllByRole('listitem');
    expect(items).toHaveLength(3);
  });
});
