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
          to="/report-stocks-city"
          children={
            <Typography variant="h6" component="h6">
              отчет по остаткам по городам и селам
            </Typography>
          }
        />
      </Paper>*/}
      <Paper className={'home-paper'} elevation={3}>
        <CustomLink
          to="/calculate-img"
          children={
            <Typography variant="h6" component="h6">
              калькулятор изображений
            </Typography>
          }
        />
      </Paper>
    </div>
  );
};
