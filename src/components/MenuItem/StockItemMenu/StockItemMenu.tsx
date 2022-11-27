import React from 'react';
import { StockType } from '../../../utils/Api';

type MenuItemType = {
  stock: StockType;
};

export const StockItemMenu: React.FC<MenuItemType> = ({ stock }) => {
  return (
    <div>
      <div>На продажу: {stock.for_sale}</div>
      <div>Потерянные: {stock.loss}</div>
      <div>Не на продаже: {stock.not_for_sale}</div>
    </div>
  );
};
