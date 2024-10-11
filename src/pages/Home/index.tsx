import { Header } from '@/components/Header';
import { Form } from '@/components/Form';
import { AttendeesList } from '@/components/AttendeesList';

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Form />
      <AttendeesList />
    </>
  );
};
