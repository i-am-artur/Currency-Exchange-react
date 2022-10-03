import { translation } from 'library/Translation/translation';
import PageTitle from 'components/PageHeading/PageTitle';
import { Button, FormWrapper, Wrapper } from './register.styled';
import { Formik } from 'formik';
import Input from 'components/FormControls/Input/Formik';
import { loginRequirements } from 'utils/validations';
import { useAppData } from '../../store/hooks';
import context from './context.json';
import { useNavigate } from 'react-router-dom';
import routeList from '../../router/routeList';

export default function Register() {
  const { language } = useAppData();
  const t = translation(language);
  const navigate = useNavigate();

  return (
    <Wrapper>
      <PageTitle pageTitle={t(context.pageTitle)} />
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginRequirements()}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          navigate(routeList.login);
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
    </Wrapper>
  );
}
