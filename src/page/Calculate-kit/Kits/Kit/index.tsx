import './style.css';
import { GoodT, getAmountKitCard, delKit, changeNameKit } from '../../Redux/calculateKitReducer';
import { Typography, Card, Button, Input } from '@mui/material';
import { GoodCard } from '../../../../components/GoodCard';
import { useDispatch } from 'react-redux';
import { Counter } from '../../../../components/Counter';
import { useState } from 'react';


type KitT = {
  name: string;
  amount: number;
  goods: GoodT[];
  id: string;
};

export const Kit: React.FC<KitT> = ({ name, goods, id }) => {
  const dispatch = useDispatch();
  const [editName, setEditName] = useState<boolean>(false);
  const [newNameKit, setNewNameKit] = useState<string>(name);
  const onSetCount = (count: number) => {
    dispatch(getAmountKitCard({ id, amount: count }));
  };
  const onDelKit = () => {
    dispatch(getAmountKitCard({ id, amount: 0 }));
    dispatch(delKit({ id }));
  };
  const onEditName = () =>{
    setEditName(prev => !prev);
  };
  const onChangeName = ()=>{
    dispatch(changeNameKit({ id, name:newNameKit }));
    onEditName();
  };
  return (
    <div className="kit-wrapper">
      <Card >
        <div className="kit-card-wrapper">
          <div className={'kit-card-header-wrapper'}>
            { editName ?
              <div style={{ display:'flex', marginLeft:10 }}>
              <Input value={newNameKit} onChange={(evt)=>{setNewNameKit(evt.target.value);}}/>
              <Button onClick={onChangeName}>ok</Button>
              </div> :
              <Typography fontWeight={'bold'} marginLeft={'62px'} onDoubleClick={onEditName}> {newNameKit} </Typography>
            }
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
