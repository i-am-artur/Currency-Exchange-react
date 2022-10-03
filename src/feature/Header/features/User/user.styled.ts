import styled from 'styled-components';
import { gap, pxToRem } from 'styles/theme';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  margin-left: ${gap.original};
  margin-right: ${gap.original};
  display: flex;
  align-items: center;
  column-gap: ${gap.small};
  font-size: ${pxToRem(14)};
  white-space: nowrap;
  color: white;
`;

export const Avatar = styled.img`
  width: 28px;
  height: 28px;
  border: 2px solid white;
  border-radius: 50%;
`;

export const AuthLink = styled(Link)`
  color: white;
  background-color: transparent;

  &:hover {
    color: orange;
  }
`;

export const Logout = styled.button`
  padding: 0;
  margin: 0;
  color: white;
  background-color: transparent;
  cursor: pointer;
`;
