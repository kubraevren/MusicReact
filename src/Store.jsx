import { configureStore } from "@reduxjs/toolkit";
import musicReducer from "./Slices/MuzikSlice";
import playerReducer from "./Slices/PlayerSlice"
export const store = configureStore({
    reducer: {
        music: musicReducer,
        player: playerReducer
    }

})

export default store;