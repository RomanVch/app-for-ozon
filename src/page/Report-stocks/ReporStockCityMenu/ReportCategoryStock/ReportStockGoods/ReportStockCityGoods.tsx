import './style.css';

import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../../../app/hooks';
import { selectData } from '../../../stockReducer';
import { MenuItem } from '../../../../../components/MenuItem/MenuItem';

type UseParamsType = {
  city: string;
  category: string;
};

export const ReportStockCityGoods = () => {
  const { city, category } = useParams<UseParamsType>();
  const data = useAppSelector(selectData);
  const categores = data.find((item) => {
    return item.id === city;
  });
  const categoresArr = categores ? Object.values(categores.items) : [];
  const goods = categoresArr.find((item) => {
    // @ts-ignore
    return item.id === category;
  });
  // @ts-ignore

  return (
    <div className="stocks">
      ///
      {goods
        ? goods.goods.map((item) => {
            // @ts-ignore
            return <MenuItem id={item.offer_id} name={item.offer_id} stock={item.stock} />;
          })
        : null}
    </div>
  );
};
