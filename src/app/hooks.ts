import { useDispatch, useSelector } from 'react-redux';
import type { RootStateType, AppDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => {
  return useDispatch<AppDispatch>();
};
export const useAppSelector = useSelector;
