import './style.css';
import { Paper, Typography } from '@mui/material';
import { CustomLink } from '../../components/CustomLink/CustomLink';

export const Home = () => {
  return (
    <div className="home">
      <Typography variant="h4" component="h4">
        Менеджер Озон
      </Typography>
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
    </div>
  );
};
