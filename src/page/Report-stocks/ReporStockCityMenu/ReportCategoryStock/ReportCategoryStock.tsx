import './style.css';
import { useAppSelector } from '../../../../app/hooks';
import { CategoryStockItemType, CategoryStockType, selectData } from '../../stockReducer';
import { MenuItem } from '../../../../components/MenuItem/MenuItem';
import { useParams } from 'react-router-dom';

type UseParamsType = {
  city: string;
};

export const ReportStockCityCategory = () => {
  const { city } = useParams<UseParamsType>();
  const data = useAppSelector(selectData);
  const category = data.find((item) => {
    return item.id === city;
  });

  return (
    <div className="stocks">
      {category
        ? Object.values(category.items).map((item) => {
            // @ts-ignore
            return <MenuItem id={item.id} name={item.goods[0].category} stock={item.stock} />;
          })
        : null}
    </div>
  );
};
