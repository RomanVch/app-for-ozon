import './style.css';
import { GoodT } from '../../Redux/calculateKitReducer';
import { Typography, Card } from '@mui/material';
import { GoodCard } from '../../../../components/GoodCard';
import { useDispatch } from 'react-redux';
import { Counter } from '../../../../components/Counter';
import { getAmountKitCard } from '../../Redux/calculateKitReducer';

type KitT = {
  name: string;
  amount: number;
  goods: GoodT[];
  id: string;
};

export const Kit: React.FC<KitT> = ({ name, goods, id }) => {
  const dispatch = useDispatch();
  const onSetCount = (count: number) => {
    dispatch(getAmountKitCard({ id, amount: count }));
  };
  return (
    <div className="kit-wrapper">
      <Card>
        <div className="kit-card-wrapper">
          <Typography> {name}</Typography>
          <Typography>
            {' '}
            <Counter setCount={onSetCount} />
          </Typography>
          <div className={'kit-good'}>
            {' '}
            {goods.map((item) => (
              <GoodCard name={item.name} id={item.id} onClick={() => {}} />
            ))}{' '}
          </div>
        </div>
      </Card>
    </div>
  );
};
