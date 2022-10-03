import { translation } from 'library/Translation/translation';
import { Button, FormWrapper } from './email-login.styled';
import { Formik } from 'formik';
import Input from 'components/FormControls/Input/Formik';
import { loginRequirements } from 'utils/validations';
import context from './context.json';
import { useNavigate } from 'react-router-dom';
import { useAppData, useAppDispatch } from 'store/hooks';
import routeList from 'router/routeList';
import { setUserName } from 'store/appData/actions';

export default function EmailLogin() {
  const { language } = useAppData();
  const t = translation(language);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={loginRequirements()}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        dispatch(setUserName('Artur'));
        navigate(routeList.home);
      }}
    >
      {() => (
        <FormWrapper>
          <Input name="email" label={t(context.email)} />
          <Input name="password" label={t(context.password)} type="password" />
          <Button type="submit">Submit</Button>
        </FormWrapper>
      )}
    </Formik>
  );
}
