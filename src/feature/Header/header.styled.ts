import styled from 'styled-components';
import { colors, gap, media, width } from 'styles/theme';

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${colors.mainColor};
`;

export const HeaderElement = styled.header`
  margin-left: auto;
  margin-right: auto;
  padding: ${gap.original};
  max-width: ${width.headerMax};
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  display: flex;

  ${media.desktop} {
    align-items: baseline;
    justify-content: space-evenly;
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
`;
