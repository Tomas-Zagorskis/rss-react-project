import { createBrowserRouter, Navigate } from 'react-router-dom';

import AboutUs from './routes/AboutUs/AboutUs';
import NotFound from './routes/NotFound/NotFound';
import RootLayout from './routes/RootLayout';
import Home from './routes/Home/Home';
import MusicForm from './routes/MusicForm/MusicForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about-us', element: <AboutUs /> },
      { path: '/music-form', element: <MusicForm /> },
    ],
  },
  { path: '/404', element: <NotFound /> },
  { path: '*', element: <Navigate to="/404" /> },
]);

export default router;
