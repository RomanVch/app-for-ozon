import './style.css';
import { TextField } from '@mui/material';
import { ChangeEvent } from 'react';

type CounterT = {
  setCount: (count: number) => void;
};

export const Counter: React.FC<CounterT> = ({ setCount }) => {
  const onInput = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
            placeholder="0"
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
