import context from './context.json';
import { translation } from 'library/Translation/translation';
import { AuthLink, Logout, Wrapper } from './user.styled';
import { useAppData, useAppDispatch } from 'store/hooks';
import routeList from 'router/routeList';
import { useGoogleLogout } from 'react-google-login';
import { clientId } from '../../../../library/Authentication/Authentication';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { setUserName } from '../../../../store/appData/actions';

export default function User() {
  const { language, user } = useAppData();
  const dispatch = useAppDispatch();
  const t = translation(language);
  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess: () => {
      dispatch(setUserName(''));
    },
  });

  return user.isLoaded ? (
    <>
      {user.name ? (
        <Wrapper>
          <FontAwesomeIcon icon={faRightToBracket} />
          <Logout onClick={signOut}>{t(context.logout)}</Logout>
        </Wrapper>
      ) : (
        <Wrapper>
          <AuthLink to={routeList.login}>{t(context.login)}</AuthLink> /
          <AuthLink to={routeList.register}>{t(context.register)}</AuthLink>
        </Wrapper>
      )}
    </>
  ) : (
    <></>
  );
}
