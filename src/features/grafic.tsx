import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';




const initialState: Grafic = {}


export const GraficssSlice = createSlice({
    name: 'Grafic',
    initialState,
    reducers: {
        setInterval (state, action) {
          state.interval = action.payload;
        },
        setRealTime (state, action) {
            state.realTime = action.payload
        },
        setHistoric (state, action) {
            state.historic = action.payload
        },
        setFrom (state, action) {
            state.from = action.payload
        },
        setTo (state, action) {
            state.to = action.payload
        },
    },
})

export const selectGrafics = (state: RootState) => state.grafic;
export const { setInterval, setRealTime, setHistoric, setFrom, setTo } = GraficssSlice.actions

export default GraficssSlice.reducer;