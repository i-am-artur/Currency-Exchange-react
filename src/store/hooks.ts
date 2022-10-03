import { AppDispatch, RootState } from './index';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useCurrencies = () => useAppSelector((state) => state.currencies);
export const useAppData = () => useAppSelector((state) => state.appData);
