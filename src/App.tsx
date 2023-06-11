import React from 'react';
import './App.css';
import { useRoutes } from 'react-router-dom';
import { Home } from './page/Home/Home';
import { CalculateImg } from './page/Calculate-Img';
import { ViewImg } from './page/Calculate-Img/ViewImg';
import { CalculateKit } from './page/Calculate-kit/Calculate-kit';
import { OrderDelivery } from './page/OrderDelivery/OrderDelivery';

function App() {
  const routes = useRoutes([
    { path: '/app-for-ozon', element: <Home /> },
    { path: '/app-for-ozon/calculate-img', element: <CalculateImg /> },
    { path: '/app-for-ozon/calculate-img/view', element: <ViewImg /> },
    { path: '/app-for-ozon/calculate-kit', element: <CalculateKit /> },
    { path: '/app-for-ozon/order-for-delivery', element: <OrderDelivery /> },
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
