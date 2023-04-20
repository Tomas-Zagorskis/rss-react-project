import { Navigate, Route, Routes } from 'react-router-dom';

import AboutUs from './routes/AboutUs/AboutUs';
import NotFound from './routes/NotFound/NotFound';
import Home from './routes/Home/Home';
import MusicForm from './routes/MusicForm/MusicForm';
import Header from 'components/Header/Header';

const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/music-form" element={<MusicForm />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </>
  );
};

export default Router;
