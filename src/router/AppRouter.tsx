import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import LoadingIndicator from 'components/LoadingIndicator/LoadingIndicator';
import routeList from './routeList';

const Converter = lazy(() => import('pages/Converter/Converter'));
const Quotes = lazy(() => import('pages/Quotes/Quotes'));
const Login = lazy(() => import('pages/Login/Login'));
const Register = lazy(() => import('pages/Register/Register'));

const AppRouter = () => {
  return (
    <Suspense fallback={<LoadingIndicator />}>
      <Routes>
        <Route path={routeList.quotes} element={<Quotes />} />
        <Route path={routeList.login} element={<Login />} />
        <Route path={routeList.home} element={<Converter />} />
        <Route path={routeList.register} element={<Register />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
