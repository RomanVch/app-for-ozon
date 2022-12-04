import './style.css';
import { AddGoods } from './Goods/Add-goods/add-goods';
import { Goods } from './Goods';
import { Kits } from './Kits';

export const CalculateKit = () => {
  return (
    <div className="calculate-kit">
      <AddGoods />
      <Goods />
      <Kits />
      1. Товары: добавить товар наименование/кол-во 2. Комплекты: сформировать комплекты товаров 3.
      параметры распределния * распределение по количеству товара в комплекте [1] - 30% - [2] - 40%
      - [3] - 30% 4. результат
    </div>
  );
};
