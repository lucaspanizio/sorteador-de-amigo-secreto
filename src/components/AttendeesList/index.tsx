import { useAttendees } from '@/hooks/useAttendees';

export const AttendeesList = () => {
  const { attendees } = useAttendees();
  return (
    <>
      <ul>
        {attendees.map((attendee) => (
          <li key={attendee}>{attendee}</li>
        ))}
      </ul>
    </>
  );
};
