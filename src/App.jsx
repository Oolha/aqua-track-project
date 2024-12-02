import './App.css';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';



const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage'));
const TrackerPage = lazy(() => import('./pages/TrackerPage/TrackerPage'));


const App = () => {
  const date = new Date();
  return (
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="signin" element={<SignInPage />} />
          <Route path="tracker" element={<TrackerPage />} />
        </Route>
      </Routes>
=======
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <RestrictedRoute>
              <HomePage />
            </RestrictedRoute>
          }
        />
        <Route
          path="signup"
          element={
            <RestrictedRoute>
              <SignUpPage />
            </RestrictedRoute>
          }
        />
        <Route
          path="signin"
          element={
            <RestrictedRoute>
              <SignInPage />
            </RestrictedRoute>
          }
        />
        <Route
          path="tracker"
          element={
            <PrivateRoute>
              <TrackerPage />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
>>>>>>> main
  );
};

export default App;
