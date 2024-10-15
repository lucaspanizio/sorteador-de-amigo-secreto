import { RecoilRoot } from 'recoil';
import { act, renderHook } from '@testing-library/react';
import { useAttendees } from '@/hooks/useAttendees';
import { useResult } from '@/hooks/useResult';
import { useDrawer, shuffle, draw } from '@/hooks/useDrawer';

const setResultMock = jest.fn();
const mockAttendees = ['Ana', 'João', 'Pedro'];

jest.mock('@/hooks/useAttendees', () => ({
  useAttendees: jest.fn(),
}));

jest.mock('@/hooks/useResult', () => {
  return {
    useResult: () => ({
      setResult: setResultMock,
      result: new Map(),
    }),
  };
});

describe('Hook: useDrawer', () => {
  beforeEach(() => {
    (useAttendees as jest.Mock).mockReturnValue({ attendees: mockAttendees });
  });

  it('should shuffle attendees and set results', () => {
    const { result } = renderHook(() => useDrawer(), { wrapper: RecoilRoot });

    act(() => {
      result.current();
    });

    expect(setResultMock).toHaveBeenCalled();
    const resultStateValue = setResultMock.mock.calls[0][0];
    expect(resultStateValue.size).toBe(mockAttendees.length);

    mockAttendees.forEach((attendee) => {
      expect(resultStateValue.has(attendee)).toBe(true);
    });
  });

  it('should shuffle an array correctly', () => {
    const iterations = 10; // Número de tentativas
    let differentCount = 0;

    for (let i = 0; i < iterations; i++) {
      const shuffledArray = shuffle(mockAttendees);
      if (
        !shuffledArray.every((value, index) => value === mockAttendees[index])
      ) {
        differentCount++;
      }
    }

    expect(differentCount).toBeGreaterThanOrEqual(3);
  });

  it('should create a circular map correctly', () => {
    const drawnResult = draw(mockAttendees);
    expect(drawnResult.size).toBe(mockAttendees.length);

    mockAttendees.forEach((attendee, index) => {
      const nextAttendee = mockAttendees[(index + 1) % mockAttendees.length];
      expect(drawnResult.get(attendee)).toBe(nextAttendee);
    });
  });
});
