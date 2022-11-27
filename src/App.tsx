import React from 'react';
import './App.css';
import { useRoutes } from 'react-router-dom';
import { Home } from './page/Home/Home';
import { CalculateImg } from './page/Calculate-Img';
import { ViewImg } from './page/Calculate-Img/ViewImg';

function App() {
  const routes = useRoutes([
    { path: '/app-for-ozon', element: <Home /> },
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
