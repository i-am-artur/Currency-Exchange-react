import PageTitle from '../../components/PageHeading/PageTitle';
import context from './context.json';
import { translation } from '../../library/Translation/translation';
import { useAppData } from '../../store/hooks';
import { useLogin } from '../../library/Authentication/Authentication';
import Google from '../../library/Authentication/images/google.svg';
import { HR, Icon, SignIn, Wrapper } from './login.styled';
import { Navigate } from 'react-router-dom';
import routeList from '../../router/routeList';
import EmailLogin from './EmailLogin/EmailLogin';

export default function Login() {
  const { language, user } = useAppData();
  const t = translation(language);
  const { signIn } = useLogin();

  return !user?.name ? (
    <Wrapper>
      <PageTitle pageTitle={t(context.pageTitle)} />
      <SignIn onClick={signIn}>
        <Icon src={Google} /> <span>Sign in with Google</span>
      </SignIn>
      <HR />
      <EmailLogin />
    </Wrapper>
  ) : (
    <Navigate to={routeList.home} />
  );
}
