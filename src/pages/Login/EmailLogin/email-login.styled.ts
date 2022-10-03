import styled from 'styled-components';
import { gap, width } from 'styles/theme';
import { Form } from 'formik';

export const FormWrapper = styled(Form)`
  max-width: ${width.mobile};
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  row-gap: ${gap.general};
`;

export const Button = styled.button`
  margin-left: auto;
  margin-right: auto;
  display: flex;
`;
