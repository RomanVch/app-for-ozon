import './style.css';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { Counter } from '../../../../components/Counter';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addGoods, checkDelData, toggleCheckDelGood } from '../../Redux/calculateKitReducer';

export const AddGoods = () => {
  const checkDel = useSelector(checkDelData);
  const [good, setGoods] = useState({ name: '', amount: 0 });
  const dispatch = useDispatch();
  const onCount = (count: number) => {
    setGoods({ name: good.name, amount: count });
  };
  const onChange = (name: string) => {
    setGoods({ name, amount: good.amount });
  };

  const onDelKit = () => {
    dispatch(toggleCheckDelGood());
  };

  const onButton = () => {
    dispatch(addGoods({ name: good.name, amount: good.amount, id: uuidv4() }));
  };

  return (
    <div className="add-goods">
      <TextField
        id="outlined-basic"
        label="Название товара"
        variant="outlined"
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      <Counter setCount={onCount} />
      <div className={'del-goods-btn'}>
        <Button onClick={onDelKit} color="error" variant={checkDel ? 'contained' : 'outlined'}>
          Del
        </Button>
      </div>
      <div className={'add-goods-btn'}>
        <Button onClick={onButton}>Add</Button>{' '}
      </div>
    </div>
  );
};
