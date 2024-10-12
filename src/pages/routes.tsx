import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Inicial } from '@/pages/Inicial';
import { Sorteio } from '@/pages/Sorteio';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Inicial /> },
      { path: 'sorteio', element: <Sorteio /> },
    ],
  },
]);
