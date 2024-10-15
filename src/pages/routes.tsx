import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Initial } from '@/pages/Initial';
import { Sorteio } from '@/pages/Sorteio';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Initial /> },
      { path: 'sorteio', element: <Sorteio /> },
    ],
  },
]);
