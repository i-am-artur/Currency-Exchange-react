import { Language, LanguageItem, LanguageList } from './language-select.styled';
import { languages } from 'store/appData/data';
import { useAppData, useAppDispatch } from 'store/hooks';
import { setLanguage } from 'store/appData/actions';

export default function LanguageSelect() {
  const { language } = useAppData();
  const dispatch = useAppDispatch();

  return (
    <LanguageList>
      {Object.values(languages).map((el) => (
        <LanguageItem key={el}>
          <Language onClick={() => dispatch(setLanguage(el))} selected={el === language}>
            {el.toUpperCase()}
          </Language>
        </LanguageItem>
      ))}
    </LanguageList>
  );
}
