import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootStateType } from '../../../app/store';
import { v4 as uuidv4 } from 'uuid';

export type GoodT = {
  name: string;
  amount: number;
  id: string;
};
type KitT = {
  name: string;
  id: string;
  goods: GoodT[];
  amount: number;
};

export type CalculateKitT = {
  goods: GoodT[];
  kits: KitT[];
  addKit: KitT;
  behavior: {
    checkAddKit: boolean;
    checkDel: boolean;
  };
};

const initialState: CalculateKitT = {
  goods: [],
  kits: [],
  addKit: {
    name: '',
    id: '',
    goods: [],
    amount: 0
  },
  behavior: {
    checkAddKit: false,
    checkDel: false
  }
};

export const CalculateKit = createSlice({
  name: 'CalculateKit',
  initialState,
  reducers: {
    addGoods: (state, action: PayloadAction<{ name: string; amount: number; id: string }>) => {
      const checkGoodsName = state.goods.find((item) => item.name === action.payload.name);
      if (!checkGoodsName) {
        state.goods.push(action.payload);
      }
    },
    toggleCheckAddKit: (state) => {
      state.behavior.checkAddKit = !state.behavior.checkAddKit;
      if (state.behavior.checkDel) {
        state.behavior.checkDel = !state.behavior.checkDel;
      }
    },
    toggleCheckDelGood: (state) => {
      state.behavior.checkDel = !state.behavior.checkDel;
      if (state.behavior.checkAddKit) {
        state.behavior.checkAddKit = !state.behavior.checkAddKit;
      }
    },
    addGoodInKit: (state, action: PayloadAction<string>) => {
      const good = state.goods.find((index) => index.id === action.payload);
      if (good) {
        state.addKit.goods = [...state.addKit.goods, good];
      }
    },
    delGoodInKit: (state, action: PayloadAction<string>) => {
      if (state.addKit) {
        state.addKit.goods = state.addKit.goods.filter((item) => item.id !== action.payload);
      }
    },
    delGood: (state, action: PayloadAction<string>) => {
      state.goods = state.goods.filter((item) => item.id !== action.payload);
      if (state.addKit) {
        state.addKit.goods = state.addKit.goods.filter((item) => item.id !== action.payload);
      }
    },
    getNameKit: (state, action: PayloadAction<string>) => {
      state.addKit.name = action.payload;
    },
    getAmountKit: (state, action: PayloadAction<number>) => {
      state.addKit.amount = action.payload;
    },
    getAmountsKit: (state, action: PayloadAction<number>) => {
      state.addKit.amount = action.payload;
    },
    getAddKit: (state) => {
      if (state.addKit.goods.length > 0) {
        state.kits.push({ ...state.addKit, id: uuidv4() });
        let mapCount: { [key: string]: number } = {};
        const idsKits = state.addKit.goods.map((item) => item.id);
        const uniqIdsKits = Array.from(new Set(idsKits));
        uniqIdsKits.forEach((item) => {
          const amountId = state.addKit.goods.reduce(function (accumulator, currentValue) {
            if (currentValue.id === item) {
              return accumulator + 0;
            } else return accumulator + 0;
          }, 0);
          mapCount = { ...mapCount, [item]: amountId };
          state.goods = state.goods.map((good) => {
            if (mapCount[good.id]) {
              return { ...good, amount: good.amount - mapCount[good.id] };
            } else {
              return good;
            }
          });
          state.addKit = {
            name: '',
            id: '',
            goods: [],
            amount: 0
          };
        });
      }
    },
    getAmountKitCard: (state, action: PayloadAction<{ amount: number; id: string }>) => {
      let difference = 0;
      state.kits = state.kits.map((item) => {
        if (item.id === action.payload.id) {
          difference = item.amount - action.payload.amount;
          return { ...item, amount: action.payload.amount };
        } else {
          return item;
        }
      });

      let mapCount: { [key: string]: number } = {};
      const changeKit = state.kits.find((item) => item.id === action.payload.id);
      const idsKits = changeKit?.goods.map((item) => item.id);
      const uniqIdsKits = Array.from(new Set(idsKits));
      uniqIdsKits.forEach((item) => {
        const amountId = changeKit?.goods.reduce(function (accumulator, currentValue) {
          if (currentValue.id === item) {
            return accumulator + difference;
          } else return accumulator + 0;
        }, 0);
        mapCount = { ...mapCount, [item]: amountId as number };
      });
      state.goods = state.goods.map((good) => {
        if (mapCount[good.id]) {
          return { ...good, amount: good.amount + mapCount[good.id] };
        } else {
          return good;
        }
      });
    }
  }
});

// Action creators are generated for each case reducer function
export const {
  addGoods,
  addGoodInKit,
  toggleCheckAddKit,
  delGoodInKit,
  toggleCheckDelGood,
  delGood,
  getNameKit,
  getAmountKit,
  getAddKit,
  getAmountKitCard
} = CalculateKit.actions;
export const calculateKitReducer = CalculateKit.reducer;

// Selector
export const calculateKitGoodsData = (state: RootStateType) => state.calculateKit.goods;
export const calculateKitBehaviorData = (state: RootStateType) => state.calculateKit.behavior;
export const AddKitData = (state: RootStateType) => state.calculateKit.addKit;
export const toggleCheckAddGoodKit = (state: RootStateType) =>
  state.calculateKit.behavior.checkAddKit;
export const checkDelData = (state: RootStateType) => state.calculateKit.behavior.checkDel;
export const KitsData = (state: RootStateType) => state.calculateKit.kits;
