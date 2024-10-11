import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Home } from '@/pages/Home';
import { Draw } from '@/pages/Draw';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'sorteio', element: <Draw /> },
    ],
  },
]);
