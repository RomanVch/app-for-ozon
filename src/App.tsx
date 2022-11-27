import React from 'react';
import './App.css';
import { useRoutes } from 'react-router-dom';
import { Home } from './page/Home/Home';
import { ReportStocksCity } from './page/Report-stocks/ReportStocksCity';
import { ReportStockCityCategory } from './page/Report-stocks/ReporStockCityMenu/ReportCategoryStock/ReportCategoryStock';
import { ReportStockCityGoods } from './page/Report-stocks/ReporStockCityMenu/ReportCategoryStock/ReportStockGoods/ReportStockCityGoods';
import { ReportStocksAllGoods } from './page/Report-stocks/Report-stocks-all-goods/ReportStockAllGoods';
import { CalculateImg } from './page/Calculate-Img';
import { ViewImg } from './page/Calculate-Img/ViewImg';

function App() {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/report-stocks-city', element: <ReportStocksCity /> },
    { path: '/report-stocks-city/:city', element: <ReportStockCityCategory /> },
    { path: '/report-stocks-city/:city/:category', element: <ReportStockCityGoods /> },
    { path: '/report-stocks-all-goods/', element: <ReportStocksAllGoods /> },
    { path: '/calculate-img', element: <CalculateImg /> },
    { path: '/calculate-img/view', element: <ViewImg /> }
  ]);

  return (
    <div>
      {/*      <div>headers</div>*/}
      {routes}
      {/*      <div>footer</div>*/}
    </div>
  );
}

export default App;
