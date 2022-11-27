import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootStateType } from '../../app/store';
import { CityStockApiType, StockAllGoodsType, StockType } from '../../utils/Api';

type StockItemType = {
  offer_id: string;
  sku: number;
  category: string;
  stock: StockType;
};

export type CategoryStockType = {
  goods: StockItemType[];
  id: string;
  stock: StockType;
};

export type CategoryStockItemType = {
  [key: string]: CategoryStockType[];
};

export type CityStockType = {
  total: StockType;
  id: string;
  name: string;
  items: CategoryStockItemType[] | {};
};

export type AllGoodsReportStateType = CityStockType & { total: StockAllGoodsType };

export type StockStateType = {
  data: {
    cityStock: CityStockType[] | [];
    allGoodsStock: AllGoodsReportStateType[] | [];
  };
};

const initialState: StockStateType = {
  data: {
    cityStock: [],
    allGoodsStock: []
  }
};

export const counterSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {
    getStateCity: (state, action: PayloadAction<CityStockType[]>) => {
      state.data.cityStock = action.payload;
    },
    getStateAllGoods: (state, action: PayloadAction<any[]>) => {
      state.data.allGoodsStock = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { getStateCity } = counterSlice.actions;
export const counterSliceReducer = counterSlice.reducer;

// Selector
export const selectData = (state: RootStateType) => state.reportStock.data.cityStock;
