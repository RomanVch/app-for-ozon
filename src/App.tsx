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
    { path: '/app-for-ozon', element: <Home /> },
    { path: '/app-for-ozon/report-stocks-city', element: <ReportStocksCity /> },
    { path: '/app-for-ozon/report-stocks-city/:city', element: <ReportStockCityCategory /> },
    { path: '/app-for-ozon/report-stocks-city/:city/:category', element: <ReportStockCityGoods /> },
    { path: '/app-for-ozon/report-stocks-all-goods/', element: <ReportStocksAllGoods /> },
    { path: '/app-for-ozon/calculate-img', element: <CalculateImg /> },
    { path: '/app-for-ozon/calculate-img/view', element: <ViewImg /> }
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
