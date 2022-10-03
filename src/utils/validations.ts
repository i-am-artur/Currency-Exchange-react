import * as Yup from 'yup';
import { useAppData } from 'store/hooks';
import { translation } from 'library/Translation/translation';
import context from 'context/validation.json';

const email = 'admin@admin.com';
const password = 'admin';

export const loginRequirements = () => {
  const { language } = useAppData();
  const t = translation(language);

  return Yup.object({
    email: Yup.mixed()
      .equals([email], t(context.email.equals, { email }))
      .required(t(context.required)),
    password: Yup.mixed()
      .equals([password], t(context.password.equals, { password }))
      .required(t(context.required)),
  });
};
