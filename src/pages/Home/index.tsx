import { Header } from '@/components/Header';
import { Form } from '@/components/Form';
import { AttendeesList } from '@/components/AttendeesList';
import { Footer } from '@/components/Footer';

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Form />
      <AttendeesList />
      <Footer />
    </>
  );
};
