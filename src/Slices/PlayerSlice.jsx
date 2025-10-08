import { createSlice } from '@reduxjs/toolkit'



export const PlayerSlice = createSlice({
    name: 'Player',
    initialState: {
        calanSarki: "",
        oynuyorMu: false,
        sarkiIlerlemesi: 0,
        ses: 0.7,
        oynayanSarkiId: null,
    },
    reducers: {
        sarkiCal: (state, action) => {
            state.calanSarki = action.payload;
            state.oynuyorMu = true;
            state.sarkiIlerlemesi = 0;
            state.oynayanSarkiId = action.payload.id;
        },
        sarkiyiOynatDurdur: (state) => {
            state.oynuyorMu = !state.oynuyorMu;
        },
        sesiDegistir: (state, action) => {
            state.ses = action.payload;
        },
        ilerlemeGuncelle: (state, action) => {
            state.sarkiIlerlemesi = action.payload;
        }
    },
});



export const { sarkiCal, sarkiyiOynatDurdur, sesiDegistir, ilerlemeGuncelle } = PlayerSlice.actions;

export default PlayerSlice.reducer;