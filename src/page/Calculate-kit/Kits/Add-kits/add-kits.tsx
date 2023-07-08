import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

import {
  AddKitData,
  delGoodInKit,
  getAddKit,
  getNameKit,
  toggleCheckAddGoodKit,
  toggleCheckAddKit,
} from '../../Redux/calculateKitReducer';
import { GoodCard } from '../../../../components/GoodCard';
import { useState } from 'react';

export const AddKits = () => {
  const checkAddGoodKit = useSelector(toggleCheckAddGoodKit);
  const addKit = useSelector(AddKitData);
  const dispatch = useDispatch();
  const [localName, setLocalName] = useState('');
  const [error, setError] = useState(false);

  const onChange = (name: string) => {
    dispatch(getNameKit(name));
    setLocalName(name);
    if (localName.length > 2) {
      setError(false);
    } else {
      setError(true);
    }
  };

  const onDelGoods = (id: string) => {
    dispatch(delGoodInKit(id));
  };

  const onAddGood = () => {
    dispatch(toggleCheckAddKit());
  };

  const onAddKit = () => {
    if (localName.length > 2) {
      setError(false);
      dispatch(getAddKit());
    } else {
      setError(true);
    }
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
        error={error}
      />
      <div className="add-good">
        <Button onClick={onAddGood} variant={checkAddGoodKit ? 'contained' : 'outlined'} style={{ marginLeft:'10px' }}>
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
