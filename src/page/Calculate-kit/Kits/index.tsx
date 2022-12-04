import './style.css';
import { useSelector } from 'react-redux';
import { AddKits } from './Add-kits/add-kits';
import { calculateKitGoodsData, KitsData } from '../Redux/calculateKitReducer';
import { Kit } from './Kit';

export const Kits: React.FC = () => {
  const goods = useSelector(calculateKitGoodsData);
  const kits = useSelector(KitsData);

  return (
    <>
      {goods.length > 1 ? (
        <div className="goods">
          <AddKits />
          <div className="kits-wrapper">
            {kits.map((item) => (
              <Kit name={item.name} amount={item.amount} goods={item.goods} id={item.id} />
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};
