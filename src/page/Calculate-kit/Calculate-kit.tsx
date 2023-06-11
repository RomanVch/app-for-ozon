import './style.css';
import { AddGoods } from './Goods/Add-goods/add-goods';
import { Goods } from './Goods';
import { Kits } from './Kits';
import { ExelDownload } from '../../components/ExelDownload';
import { useSelector } from 'react-redux';
import { KitsData } from './Redux/calculateKitReducer';

export const CalculateKit = () => {
  const kits = useSelector(KitsData);
  const parseKits = kits.map((kit)=>({ name:kit.name, amount:kit.amount }));
  return (
    <div className="calculate-kit">
      <div>
        <AddGoods />
        <div className={'exel-button-wrapper'}>
        <ExelDownload dataForTable={parseKits}/>
        </div>
        </div>
        <Goods />
      <Kits />
      1. Товары: добавить товар наименование/кол-во 2. Комплекты: сформировать комплекты товаров 3.
      параметры распределния * распределение по количеству товара в комплекте [1] - 30% - [2] - 40%
      - [3] - 30% 4. результат
    </div>
  );
};
