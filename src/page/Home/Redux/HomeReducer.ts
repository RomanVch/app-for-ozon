import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootStateType } from '../../../app/store';

export type HomeReducerT = {
  behavior: {
    modals: string[];
  };
};

const initialState: HomeReducerT = {
  behavior: {
    modals: []
  }
};

export const HomeReducer = createSlice({
  name: 'HomeReducer',
  initialState,
  reducers: {
    addModal: (state, action: PayloadAction<string>) => {
      state.behavior.modals.push(action.payload);
    },
    delModal: (state, action: PayloadAction<string>) => {
      state.behavior.modals = state.behavior.modals.filter((item) => item !== action.payload);
    }
  }
});

// Action creators are generated for each case reducer function
export const { addModal, delModal } = HomeReducer.actions;
export const homeReducer = HomeReducer.reducer;

// Selector
export const homeBehaviorData = (state: RootStateType) => state.home.behavior;
