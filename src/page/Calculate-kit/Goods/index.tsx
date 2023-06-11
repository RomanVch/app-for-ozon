import './style.css';

import { useDispatch, useSelector } from 'react-redux';
import { addGoodInKit, calculateKitBehaviorData, calculateKitGoodsData, delGood } from '../Redux/calculateKitReducer';
import { GoodCard } from '../../../components/GoodCard';
import { BasicCard } from '../../../components/SimpleCard';


export const Goods: React.FC = () => {
  const goods = useSelector(calculateKitGoodsData);
  const { checkAddKit, checkDel } = useSelector(calculateKitBehaviorData);
  const dispatch = useDispatch();
  const amountGoods = goods.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.amount;
  }, 0);
  const onClick = (id: string) => {
    if (checkAddKit) {
      dispatch(addGoodInKit(id));
    }
    if (checkDel) {
      dispatch(delGood(id));
    }
  };
  return (
    <div className="goods">
      <div className="view-goods">
        {goods.length
          ? goods.map((item) => {
            return (
                <GoodCard
                  key={item.id}
                  amount={item.amount}
                  name={item.name}
                  id={item.id}
                  onClick={onClick}
                />
            );
          })
          : null}
      </div>
      <div>
        {goods.length ? (
          <BasicCard>
            <div>{`всего шт: ${amountGoods}`}</div>
          </BasicCard>
        ) : null}
      </div>
    </div>
  );
};
