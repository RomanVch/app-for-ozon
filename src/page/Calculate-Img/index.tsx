import './style.css';
import { Button, Paper, Typography } from '@mui/material';
import { AddBarcode } from './addBarcode';
import { useDispatch, useSelector } from 'react-redux';
import { calculateImgData } from './Redux/calculateImgReducer';
import { CustomLink } from '../../components/CustomLink/CustomLink';
import { setView } from './Redux/calculateImgReducer';

export const CalculateImg = () => {
  const dispatch = useDispatch();
  const addBarcodes = useSelector(calculateImgData);
  const onClick = () => {
    dispatch(setView());
  };
  return (
    <div className="calculate">
      {addBarcodes.map((barcode: any, index: number) => (
        <AddBarcode place={index} />
      ))}
      <Paper elevation={3} className="link">
        {
          <CustomLink
            onClick={onClick}
            to="/calculate-img/view"
            children={
              <Typography variant="h6" component="h6">
                Показать
              </Typography>
            }
          />
        }
      </Paper>
    </div>
  );
};
