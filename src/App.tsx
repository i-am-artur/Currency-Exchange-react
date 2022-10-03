import { Fragment, useEffect } from 'react';
import AppRouter from './router/AppRouter';
import { Main } from './app.styled';
import Header from './feature/Header/Header';
import { useAppDispatch, useCurrencies } from 'store/hooks';
import * as currenciesActions from 'store/currencies/actions';
import { useLogin } from 'library/Authentication/Authentication';
import LoadingIndicator from './components/LoadingIndicator/LoadingIndicator';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useAppDispatch();
  const currencies = useCurrencies();
  const { loaded } = useLogin();

  useEffect(() => {
    dispatch(currenciesActions.setBaseCurrency(currencies.baseCurrency));
    toast.info('This website uses \'cookies\'. You comply by proceeding.', {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  }, []);

  return (
    <Fragment>
      <Header />
      {loaded ? (
        <Main>
          <AppRouter />
        </Main>
      ) : (
        <LoadingIndicator />
      )}
      <ToastContainer />
    </Fragment>
  );
}

export default App;
