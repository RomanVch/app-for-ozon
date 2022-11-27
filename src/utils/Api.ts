import axios from 'axios';
const baseURL = 'https://api-seller.ozon.ru/v1/';

const instance = axios.create({
  baseURL,
  headers: {
    'Client-Id': 311048,
    'Api-Key': ''
  }
});

export type StockType = {
  not_for_sale: number;
  loss: number;
  for_sale: number;
};

export type StockAllGoodsType = StockType & {
  between_warehouses: number;
  shipped: number;
};

type StockItemType = {
  offer_id: string;
  sku: number;
  title: string;
  category: string;
  discounted: string;
  barcode: string;
  length: number;
  width: number;
  height: number;
  volume: number;
  weight: number;
  stock: StockType;
};

export type StockAllGoodsItemType = StockItemType & {
  stock: StockAllGoodsType;
};

export type CityStockApiType = {
  id: string;
  name: string;
  items: StockItemType[];
};

type StockApiType = {
  timestamp: 'string';
  total_items: StockAllGoodsItemType[];
  wh_items: CityStockApiType[];
};

export const ozonAPI = {
  /*  loadProfile(userId:any){
        return  instance.get("profile/"+userId)
    },*/
  reportStocks(): any {
    return instance
      .post<StockApiType>(`analytics/stock_on_warehouses`, {
        limit: 1000000,
        offset: 0
      })
      .then((response) => {
        return response.data;
      });
  }
};
