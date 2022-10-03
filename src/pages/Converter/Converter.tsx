import Select from 'components/FormControls/Select/Original';
import { Result, Wrapper } from './converter.styled';
import context from './context.json';
import { ChangeEvent, FormEvent, useMemo, useState } from 'react';
import { translation } from 'library/Translation/translation';
import { useAppData, useAppDispatch, useCurrencies } from 'store/hooks';
import { getCurrenciesCodes } from 'utils/currencies';
import { setBaseCurrency, setSecondCurrency } from '../../store/currencies/actions';
import Input from 'components/FormControls/Input/Original';
import { round } from 'utils/math';
import PageTitle from 'components/PageHeading/PageTitle';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';

export default function Converter() {
  const dispatch = useAppDispatch();
  const { language } = useAppData();
  const t = translation(language);
  const currencies = useCurrencies();
  const [amountToConvert, setAmountToConvert] = useState(0);

  const currencyCodes = useMemo(() => {
    return currencies.list ? getCurrenciesCodes(currencies.list) : [];
  }, [currencies, currencies.baseCurrency]);

  const secondCurrencyValue = useMemo(() => {
    return currencies.list[currencies.secondCurrency]?.value;
  }, [currencies]);

  function changeBaseCurrency(event: FormEvent<HTMLSelectElement>) {
    const newBaseCurrency = event.currentTarget.value;
    dispatch(setBaseCurrency(newBaseCurrency));
  }

  function changeSecondCurrency(event: FormEvent<HTMLSelectElement>) {
    const newSecondCurrency = event.currentTarget.value;
    dispatch(setSecondCurrency(newSecondCurrency));
  }

  return (
    <Wrapper>
      <PageTitle pageTitle={t(context.pageTitle)} />
      {currencies.isLoading ? (
        <LoadingIndicator />
      ) : (
        <Select
          label={t(context.from)}
          options={currencyCodes}
          defaultValue={currencies.baseCurrency}
          onChange={changeBaseCurrency}
        />
      )}
      <Select
        label={t(context.to)}
        options={currencyCodes}
        defaultValue={currencies.secondCurrency}
        onChange={changeSecondCurrency}
      />
      1 {currencies.baseCurrency} = {currencies.secondCurrency} {secondCurrencyValue}
      <Input
        label={t(context.amount)}
        type='number'
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setAmountToConvert(parseFloat(event.currentTarget.value) || 0)
        }
      />
      <Result>
        {t(context.result)} {round(amountToConvert * secondCurrencyValue, 2)}{' '}
        {currencies.secondCurrency}
      </Result>
    </Wrapper>
  );
}
