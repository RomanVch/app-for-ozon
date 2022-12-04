import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

import {
  toggleCheckAddKit,
  toggleCheckAddGoodKit,
  AddKitData,
  delGoodInKit,
  getNameKit,
  getAddKit
} from '../../Redux/calculateKitReducer';
import { GoodCard } from '../../../../components/GoodCard';

export const AddKits = () => {
  const checkAddGoodKit = useSelector(toggleCheckAddGoodKit);
  const addKit = useSelector(AddKitData);
  const dispatch = useDispatch();

  const onChange = (name: string) => {
    dispatch(getNameKit(name));
  };

  const onDelGoods = (id: string) => {
    dispatch(delGoodInKit(id));
  };

  const onAddGood = () => {
    dispatch(toggleCheckAddKit());
  };

  const onAddKit = () => {
    dispatch(getAddKit());
  };

  return (
    <div className="add-kit">
      <TextField
        id="outlined-basic"
        label="Название комплекта"
        variant="outlined"
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      <div className="add-good">
        <Button onClick={onAddGood} variant={checkAddGoodKit ? 'contained' : 'outlined'}>
          {' '}
          add good{' '}
        </Button>
        <div className="add-kit-good">
          {addKit?.goods.map((item) => {
            return <GoodCard key={item.id} name={item.name} id={item.id} onClick={onDelGoods} />;
          })}
        </div>
      </div>
      <div className={'add-kit-btn'}>
        <Button onClick={onAddKit}>add kit</Button>
      </div>
    </div>
  );
};
