import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { AddKits } from './Add-kits/add-kits';
import { calculateKitGoodsData, cleanKits, KitsData } from '../Redux/calculateKitReducer';
import { Kit } from './Kit';
import { Button } from '@mui/material';

export const Kits: React.FC = () => {
  const dispatch = useDispatch();
  const goods = useSelector(calculateKitGoodsData);
  const kits = useSelector(KitsData);
  const onClickCleanState = ()=>{
    dispatch(cleanKits());
  };
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
      <Button color={'error'} onClick={onClickCleanState}>отчисть</Button>
    </>
  );
};
