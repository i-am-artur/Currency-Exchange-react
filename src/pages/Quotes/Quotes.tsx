import { Wrapper } from './quotes.styled';
import context from './context.json';
import { Fragment, FormEvent, useState, ChangeEvent } from 'react';
import { translation } from 'library/Translation/translation';
import { useAppData, useAppDispatch, useCurrencies } from 'store/hooks';
import * as currenciesUtils from 'utils/currencies';
import * as currencyActions from 'store/currencies/actions';
import PageTitle from 'components/PageHeading/PageTitle';
import CurrenciesList from './features/CurrenciesList/CurrenciesList';
import Select from 'components/FormControls/Select/Original';
import Input from 'components/FormControls/Input/Original';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';

export type ToggleCurrency = (currencyCode: string) => void;

export default function Quotes() {
  const dispatch = useAppDispatch();
  const { language } = useAppData();
  const t = translation(language);
  const currencies = useCurrencies();
  const currencyCodes = currenciesUtils.useCodes(currencies.list);
  const [currenciesFilterCondition, setCurrenciesFilterCondition] = useState('');

  const toggleCurrency: ToggleCurrency = (currencyCode) => {
    dispatch(currencyActions.toggle(currencyCode));
  };

  function changeBaseCurrency(event: FormEvent<HTMLSelectElement>) {
    const newBaseCurrency = event.currentTarget.value;
    dispatch(currencyActions.setBaseCurrency(newBaseCurrency));
  }

  return (
    <Fragment>
      <PageTitle pageTitle={t(context.pageTitle)} />
      <Wrapper>
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
        <Input
          label={t(context.Filter)}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setCurrenciesFilterCondition(event.currentTarget.value)
          }
        />
        <CurrenciesList
          currencies={currencies}
          filterCondition={currenciesFilterCondition}
          toggleCurrency={toggleCurrency}
        />
      </Wrapper>
    </Fragment>
  );
}