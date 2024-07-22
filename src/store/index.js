// import { configureStore } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

import formReducer from "./formSlice";
import scrollReducer from "./scrollSlice"


const store = configureStore({
  reducer: {
    form: formReducer,
    scroll: scrollReducer,
   
  },
});

export default store;