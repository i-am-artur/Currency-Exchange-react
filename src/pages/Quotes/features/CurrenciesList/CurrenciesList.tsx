import LoadingIndicator from 'components/LoadingIndicator/LoadingIndicator';
import { CurrenciesModel } from 'store/currencies/reducer';
import { Currency, CurrencyItem, CurrencyList } from './currencies-list.styled';
import * as math from 'utils/math';
import { useDeferredValue, useMemo, lazy } from 'react';
import * as currenciesUtils from 'utils/currencies';
import { ToggleCurrency } from 'pages/Quotes/Quotes';
import { useAppData } from '../../../../store/hooks';

const FavoriteStatus = lazy(() =>
  import('./components/FavoriteStatus/FavoriteStatus').then(({ default: FavoriteStatus }) => ({
    default: FavoriteStatus,
  })),
);

interface Props {
  currencies: CurrenciesModel;
  filterCondition: string;
  toggleCurrency: ToggleCurrency;
}

export default function CurrenciesList(props: Props) {
  const { user } = useAppData();
  const { currencies, filterCondition, toggleCurrency } = props;
  const deferredFilterCondition = useDeferredValue(filterCondition);

  const currenciesToDisplay = useMemo(() => {
    const condition = deferredFilterCondition.toUpperCase();
    const filteredCurrencies = currenciesUtils.filter(condition, currencies);
    return currenciesUtils.getSortedCurrencies(filteredCurrencies);
  }, [deferredFilterCondition, currencies]);

  return currencies.isLoading ? (
    <LoadingIndicator />
  ) : (
    <CurrencyList>
      {currenciesToDisplay.map((currency) => (
        <CurrencyItem key={currency.code}>
          {user.name && <FavoriteStatus currency={currency} toggleCurrency={toggleCurrency} />}
          <Currency>
            <span>{currency.code}</span>
            <span>{math.round(currency.value, 2)}</span>
          </Currency>
        </CurrencyItem>
      ))}
    </CurrencyList>
  );
}
