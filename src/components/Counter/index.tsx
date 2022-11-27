import './style.css';
import { Button, Paper, TextField, Tooltip, Typography } from '@mui/material';
import { ChangeEvent, FormEventHandler, useState } from 'react';
import { useSelector } from 'react-redux';
import { calculateImgData } from '../../page/Calculate-Img/Redux/calculateImgReducer';

type CounterT = {
  place: number;
  setCount: (count: number) => void;
};

export const Counter: React.FC<CounterT> = ({ place, setCount }) => {
  const counter = useSelector(calculateImgData);
  const count = counter[place].amount;
  const IncNum = () => {
    setCount(count + 1);
  };
  const DecNum = () => {
    if (count > 0) setCount(count - 1);
    else {
      setCount(0);
    }
  };
  const onInput = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log();
    setCount(+event.target.value);
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <TextField
            id="outlined-number"
            label="кол-во"
            type="number"
            InputLabelProps={{
              shrink: true
            }}
            onChange={onInput}
          />
        </div>
      </div>
    </>
  );
};
