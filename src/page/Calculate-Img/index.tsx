import './style.css';
import { Button, CircularProgress, Paper, Typography } from '@mui/material';
import { AddBarcode } from './addBarcode';
import { useDispatch, useSelector } from 'react-redux';
import { calculateImgData } from './Redux/calculateImgReducer';
import { CustomLink } from '../../components/CustomLink/CustomLink';
import { setView } from './Redux/calculateImgReducer';
import { BasicCard } from '../../components/SimpleCard';

export const CalculateImg = () => {
  const img = useSelector(calculateImgData);
  const amountImg = img.reduce(function (accumulator, currentValue, index, array) {
    return accumulator + currentValue.amount;
  }, 0);
  const cleanPages = amountImg / 40;
  const pages = Math.floor(cleanPages);
  const progressLastPage = (cleanPages - pages) * 100;

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
      <div className="info-print-wrapper">
        <BasicCard>
          <div className="info">{`Общее кол-во: ${amountImg}`}</div>
        </BasicCard>
        <BasicCard>
          <div className="info"> {`страниц: ${pages + 1}`}</div>
        </BasicCard>
        <BasicCard>
          <div className="progress-card">
            <p> Заполненность последней страницы:</p>{' '}
            <CircularProgress variant="determinate" value={progressLastPage} />
          </div>
        </BasicCard>
        <div></div>
      </div>
      <Paper elevation={3} className="link">
        {
          <CustomLink
            onClick={onClick}
            to="/app-for-ozon/calculate-img/view"
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
