import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import GraficReducer from './features/grafic'

export const store = configureStore({
  devTools: true,
  reducer: {
    grafic: GraficReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;