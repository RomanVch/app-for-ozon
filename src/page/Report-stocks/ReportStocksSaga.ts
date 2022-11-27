import { fork, put } from 'redux-saga/effects';
import { CityStockApiType, ozonAPI, StockAllGoodsItemType } from '../../utils/Api';
import { CategoryStockItemType, getStateCity } from './stockReducer';
import { getTranslit } from '../../utils/getTranslit';

const searchGoods = (reg: RegExp, resAllGoods: StockAllGoodsItemType[]) => {
  const filterGoods = resAllGoods.filter((item) => {
    item.offer_id.match(reg);
  });
};

function* watchCityReport() {
  try {
    // @ts-ignore
    const fullRes = yield ozonAPI.reportStocks();

    const resCity: CityStockApiType[] = fullRes.wh_items;

    const actualDataCity = resCity.map((item) => {
      const total = {
        for_sale: 0,
        loss: 0,
        not_for_sale: 0
      };
      let categories: CategoryStockItemType | {} = {};
      const categoriesArr: string[] = [];
      item.items.forEach((smallItem) => {
        total.for_sale += smallItem.stock.for_sale;
        total.loss += smallItem.stock.loss;
        total.not_for_sale += smallItem.stock.not_for_sale;
        if (!categoriesArr.includes(smallItem.category)) {
          categoriesArr.push(smallItem.category);
          categories = {
            ...categories,
            [`${smallItem.category}`]: {
              goods: [
                {
                  category: smallItem.category,
                  offer_id: smallItem.offer_id,
                  sku: smallItem.sku,
                  stock: smallItem.stock
                }
              ],
              id: getTranslit(smallItem.category),
              stock: {
                not_for_sale: smallItem.stock.not_for_sale,
                loss: smallItem.stock.loss,
                for_sale: smallItem.stock.for_sale
              }
            }
          };
        } else {
          // @ts-ignore
          categories[smallItem.category].stock.for_sale += smallItem.stock.not_for_sale;
          // @ts-ignore
          categories[smallItem.category].stock.loss += smallItem.stock.loss;
          // @ts-ignore
          categories[smallItem.category].stock.for_sale += smallItem.stock.for_sale;
          // @ts-ignore
          categories[smallItem.category].goods.push({
            category: smallItem.category,
            offer_id: smallItem.offer_id,
            sku: smallItem.sku,
            stock: smallItem.stock
          });
        }
      });
      return {
        ...item,
        items: categories,
        total
      };
    });
    yield put(getStateCity(actualDataCity));

    const resAllGoods: StockAllGoodsItemType[] = fullRes.total_items; ////ТУТ ХУЙНЯ

    const filersAllGoodsCategory: any = {};

    const searchGoods = (reg: RegExp, resAllGoods: StockAllGoodsItemType[]) => {
      const filterGoods = resAllGoods.filter((item) => {
        item.offer_id.match(reg);
      });
    };
    resAllGoods.forEach((item) => {
      if (!(item.category in filersAllGoodsCategory)) {
        filersAllGoodsCategory[item.category] = {
          total: {
            not_for_sale: item.stock.not_for_sale,
            loss: item.stock.loss,
            for_sale: item.stock.for_sale,
            between_warehouses: item.stock.between_warehouses,
            shipped: item.stock.shipped
          },
          id: getTranslit(item.category),
          name: item.category,
          items: [item]
        };
      } else {
        filersAllGoodsCategory[item.category].items.push(item);
        filersAllGoodsCategory[item.category].total.not_for_sale += item.stock.not_for_sale;
        filersAllGoodsCategory[item.category].total.for_sale += item.stock.for_sale;
        filersAllGoodsCategory[item.category].total.loss += item.stock.loss;
        filersAllGoodsCategory[item.category].total.between_warehouses +=
          item.stock.between_warehouses;
        filersAllGoodsCategory[item.category].total.shipped += item.stock.shipped;
      }
    });
  } catch (error) {
    console.log(error);
  }
}

export function* ReportStocksSaga() {
  yield fork(watchCityReport);
}
