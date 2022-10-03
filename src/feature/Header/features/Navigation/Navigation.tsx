import { translation } from 'library/Translation/translation';
import { Menu, MenuItem, MenuLink, Nav } from './navigation.styled';
import LanguageSelect from '../LanguageSelect/LanguageSelect';
import { useAppData } from '../../../../store/hooks';
import context from './context.json';

interface Props {
  isDisplayed: boolean;
}

export default function Navigation(props: Props) {
  const { isDisplayed } = props;
  const { language } = useAppData();
  const t = translation(language);

  const navLinks = Object.values(context);

  return (
    <Nav isDisplayed={isDisplayed}>
      <Menu>
        {navLinks.map((link) => (
          <MenuItem key={link.en}>
            <MenuLink to={link.path} end>
              {t(link).toUpperCase()}
            </MenuLink>
          </MenuItem>
        ))}
      </Menu>
      <LanguageSelect />
    </Nav>
  );
}
