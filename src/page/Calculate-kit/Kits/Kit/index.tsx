import './style.css';
import { GoodT, getAmountKitCard, delKit } from '../../Redux/calculateKitReducer';
import { Typography, Card, Button } from '@mui/material';
import { GoodCard } from '../../../../components/GoodCard';
import { useDispatch } from 'react-redux';
import { Counter } from '../../../../components/Counter';


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
  const onDelKit = () => {
    dispatch(getAmountKitCard({ id, amount: 0 }));
    dispatch(delKit({ id }));
  };
  return (
    <div className="kit-wrapper">
      <Card >
        <div className="kit-card-wrapper">
          <div className={'kit-card-header-wrapper'}>
          <Typography fontWeight={'bold'} marginLeft={'62px'}> {name}</Typography>
          <Button onClick={onDelKit}>X</Button>
          </div>
            <Typography>
            <Counter setCount={onSetCount} />
          </Typography>
          <div className={'kit-good'}>
            {goods.map((item) => (
              <GoodCard name={item.name} id={item.id} onClick={() => {}} />
            ))}{' '}
          </div>
        </div>
      </Card>
    </div>
  );
};
