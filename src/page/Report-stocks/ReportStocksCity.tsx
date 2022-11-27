import './style.css';
import { selectData } from './stockReducer';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { MenuItem } from '../../components/MenuItem/MenuItem';

export const ReportStocksCity = () => {
  const data = useAppSelector(selectData);

  return (
    <div className="stocks">
      {data.map((item) => (
        <MenuItem name={item.name} id={item.id} stock={item.total} />
      ))}
    </div>
  );
};
