import './style.css';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../app/hooks';
import { selectData } from '../stockReducer';
import { MenuItem } from '../../../components/MenuItem/MenuItem';

export const ReporStockCityMenu = () => {
  const data = useAppSelector(selectData);

  return (
    <div className="stocks">
      {data.map((item) => (
        <MenuItem name={item.name} id={item.id} stock={item.total} />
      ))}
    </div>
  );
};
