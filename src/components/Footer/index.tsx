import { useAttendees } from '@/hooks/useAttendees';
import { useNavigate } from 'react-router-dom';

export const Footer = () => {
  const { attendees } = useAttendees();
  const navigate = useNavigate();

  const goToDrawPage = () => {
    navigate('/draw');
  };

  return (
    <footer>
      <button disabled={attendees.length < 3} onClick={goToDrawPage}>
        Iniciar brincadeira!
      </button>
    </footer>
  );
};
