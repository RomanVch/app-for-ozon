import './style.css';
import { Button, Paper, Typography } from '@mui/material';
import { CustomLink } from '../../components/CustomLink/CustomLink';
import { useDispatch, useSelector } from 'react-redux';
import { addModal, homeBehaviorData } from '../Home/Redux/HomeReducer';
import { Auth } from '../../components/Modals/Auth/Auth';

export const Home = () => {
  const dispatch = useDispatch();

  const modalsQueue = useSelector(homeBehaviorData).modals;

  const onOpenAuth = () => {
    dispatch(addModal('Auth'));
  };

  return (
    <div className="home">
      <Typography variant="h4" component="h4">
        Менеджер Озон
      </Typography>
      <div>
        <Button onClick={onOpenAuth} variant="outlined">
          Log in
        </Button>
      </div>
      <div>
        {/*      <Paper className={'home-paper'} elevation={3}>
        <CustomLink
          to="/app-for-ozon/report-stocks-city"
          children={
            <Typography variant="h6" component="h6">
              отчет по остаткам по городам и селам
            </Typography>
          }
        />
      </Paper>*/}
        <Paper className={'home-paper'} elevation={3}>
          <CustomLink
            to="/app-for-ozon/calculate-img"
            children={
              <Typography variant="h6" component="h6">
                калькулятор баркодов
              </Typography>
            }
          />
        </Paper>
        <Paper className={'home-paper'} elevation={3}>
          <CustomLink
            to="/app-for-ozon/calculate-kit"
            children={
              <Typography variant="h6" component="h6">
                калькулятор комплектов
              </Typography>
            }
          />
        </Paper>
        <Paper className={'home-paper'} elevation={3}>
          <CustomLink
            to="/app-for-ozon/order-for-delivery"
            children={
              <Typography variant="h6" component="h6">
                заявка на поставку
              </Typography>
            }
          />
        </Paper>
      </div>
      {modalsQueue[0] === 'Auth' ? <Auth /> : null}
    </div>
  );
};
