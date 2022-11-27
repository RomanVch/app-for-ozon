import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootStateType } from '../../../app/store';
import { CityStockType } from '../../Report-stocks/stockReducer';

export type CalculateImgT = {
  imgs: {
    img: null | File | string;
    amount: number;
  }[];
  arrayImg: File[];
};

const initialState: CalculateImgT = {
  imgs: [
    {
      img: null,
      amount: 0
    }
  ],
  arrayImg: []
};

export const CalculateImg = createSlice({
  name: 'CalculateImg',
  initialState,
  reducers: {
    addBarcode: (state) => {
      state.imgs.push({
        img: null,
        amount: 0
      });
    },
    delBarcode: (state) => {
      if (state.imgs.length > 1) {
        state.imgs.pop();
      }
    },
    addImg: (state, action: PayloadAction<{ id: number; img: File }>) => {
      state.imgs[action.payload.id].img = action.payload.img;
    },
    setCount: (state, action: PayloadAction<{ id: number; count: number }>) => {
      state.imgs[action.payload.id].amount = action.payload.count;
    },
    setView: (state) => {
      const imgsFilter = state.imgs.filter((item) => item.amount > 0 && item.img);
      const draftArray: File[] = [];
      imgsFilter.forEach((item) => {
        // @ts-ignore
        draftArray.push(item.img.name);
        for (let i = 1; i <= item.amount; i++) {
          draftArray.push(item.img as File);
        }
      }, []);
      console.log(draftArray);
      state.arrayImg = draftArray;
    }
  }
});

// Action creators are generated for each case reducer function
export const { addBarcode, delBarcode, addImg, setCount, setView } = CalculateImg.actions;
export const calculateImgReducer = CalculateImg.reducer;

// Selector
export const calculateImgData = (state: RootStateType) => state.calculateImg.imgs;
export const viewImgData = (state: RootStateType) => state.calculateImg.arrayImg;
