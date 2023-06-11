import './style.css';
import { Button } from '@mui/material';
import { Counter } from '../../../components/Counter';
import { UploadFile } from '../../../components/UploadFile';
import {
  addBarcode,
  delBarcode,
  addImg,
  calculateImgData,
  setCount,
} from '../Redux/calculateImgReducer';

import { useDispatch, useSelector } from 'react-redux';

type AddBarcodeT = {
  place: number;
};

export const AddBarcode: React.FC<AddBarcodeT> = ({ place }) => {
  const img = useSelector(calculateImgData);
  const value = img[place].amount;
  const dispatch = useDispatch();
  const onPlus = () => {
    dispatch(addBarcode());
  };
  const onMinus = () => {
    dispatch(delBarcode());
  };
  const onUpload = (file: File) => {
    dispatch(addImg({ id: place, img: file }));
  };
  const onSetCount = (count: number) => {
    dispatch(setCount({ id: place, count }));
  };

  const nameImg = img[place].img?.name ? img[place].img?.name : null;
  return (
    <div className="AddBarcode">
      <UploadFile onUpload={onUpload} text={'upload img'} type={['.jpg', '.png', '.jpeg' ]} />
      <Counter setCount={onSetCount} value={value} />
      {img[place].img ? (
        <div className={'preview'}>
          <img
            className="image"
            src={URL.createObjectURL(img[place].img as Blob | MediaSource)}
            alt="preview"
          />

          <p className="name">{nameImg}</p>
        </div>
      ) : null}
      <div className="plus">
        {place !== 0 && (
          <Button variant="contained" onClick={onMinus}>
            {' '}
            -{' '}
          </Button>
        )}
        <Button variant="contained" onClick={onPlus}>
          {' '}
          +{' '}
        </Button>
      </div>
    </div>
  );
};
