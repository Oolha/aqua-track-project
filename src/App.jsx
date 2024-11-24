import './App.css';

import { lazy } from 'react';
import { useModal } from './hooks/useModalHook';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import WaterModal from './components/WaterModal/WaterModal';
import { Modal } from './components/Modal/Modal';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage'));
const TrackerPage = lazy(() => import('./pages/TrackerPage/TrackerPage'));

const App = () => {
  const [isModalOpen, toggleModal] = useModal();
  return (
    <>
      <Modal toggleModal={toggleModal}>
        <WaterModal />
      </Modal>

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="signin" element={<SignInPage />} />
          <Route path="tracker" element={<TrackerPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
