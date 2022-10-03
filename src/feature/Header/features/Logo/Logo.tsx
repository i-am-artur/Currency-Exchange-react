import { LogoLink, Wrapper } from './logo.styled';
import routeList from 'router/routeList';
import { translation } from 'library/Translation/translation';
import context from './context.json';
import { useAppData } from '../../../../store/hooks';

export default function Logo() {
  const appData = useAppData();
  const t = translation(appData.language);

  return (
    <Wrapper>
      <LogoLink to={routeList.home}>{t(context.logo)}</LogoLink>
    </Wrapper>
  );
}
