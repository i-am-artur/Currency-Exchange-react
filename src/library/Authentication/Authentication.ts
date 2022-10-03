import { gapi } from 'gapi-script';
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
  useGoogleLogin,
} from 'react-google-login';
import { setUserLoading, setUserName } from '../../store/appData/actions';
import { useAppDispatch } from '../../store/hooks';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import routeList from '../../router/routeList';

export const clientId = '827014219202-23733pk8956buqjuec1kfq1r0r7rih9q.apps.googleusercontent.com';

export const initClient = () => {
  const init = () => {
    gapi.client.init({
      clientId: clientId,
      scope: '',
    });
  };
  gapi.load('client:auth2', init);
};

export const useLogin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const dispatch = useAppDispatch();
  const { signIn, loaded } = useGoogleLogin({
    onSuccess: (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
      const response = res as GoogleLoginResponse;
      dispatch(setUserName(response.profileObj.givenName));
      navigate(routeList.home);
    },
    onFailure: (error: any) => setError(error),
    clientId,
    isSignedIn: true,
  });

  useEffect(() => {
    dispatch(setUserLoading(loaded));
  }, [loaded]);

  return { signIn, loaded, error };
};
// const onSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
//   console.log('success:', res);
// };
// const onFailure = (err: any) => {
//   console.log('failed:', err);
// };

// <GoogleLogin
//   clientId={clientId}
// buttonText='Sign in with Google'
// onSuccess={onSuccess}
// onFailure={onFailure}
// cookiePolicy={'single_host_origin'}
// isSignedIn={true}
// />
