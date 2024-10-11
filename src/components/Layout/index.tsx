import { Outlet } from 'react-router-dom';
import { Card } from '@/components/Card';
import { Header } from '@/components/Header';

export const Layout = () => {
  return (
    <>
      <Header />
      <Card>
        <Outlet />
      </Card>
    </>
  );
};
