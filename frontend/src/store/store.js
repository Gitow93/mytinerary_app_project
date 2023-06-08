import { configureStore } from "@reduxjs/toolkit";
import infoReducer from "./info/infoReducer";

export const store = configureStore({
  reducer: { info: infoReducer },
});
