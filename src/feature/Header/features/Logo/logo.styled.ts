import styled from 'styled-components';
import { colors, fontSize } from 'styles/theme';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.h2`
  margin: 0;
  font-size: ${fontSize.logo};
`;

export const LogoLink = styled(NavLink)`
  white-space: nowrap;
  color: ${colors.logo};
`;
