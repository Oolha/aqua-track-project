import './App.css';
import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { selectIsRefreshing } from "./redux/auth/selectors.js";
import { refreshUser } from "./redux/auth/operations.js";

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage'));
const TrackerPage = lazy(() => import('./pages/TrackerPage/TrackerPage'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
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
  );
};

export default App;
