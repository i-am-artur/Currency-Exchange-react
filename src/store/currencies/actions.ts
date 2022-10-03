import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrencies } from 'services/currencies';

export const setSecondCurrency = createAction<string>('setSeconCurrency');
export const toggle = createAction<string>('toggle');

export const setBaseCurrency = createAsyncThunk(
  'setBaseCurrency',
  async (baseCurrency: string, { rejectWithValue }) => {
    const currencies = await getCurrencies(baseCurrency)
      .then((res) => res.json())
      .then((data) => data.data)
      .catch((error) => ({
        error,
      }));

    if (currencies.error) return rejectWithValue(currencies.error);

    return {
      baseCurrency: baseCurrency,
      list: currencies,
    };
  },
);
