// scrollSlice.js
import { createSlice } from "@reduxjs/toolkit";

const scrollSlice = createSlice({
  name: "scroll",
  initialState: {
    scrollRef: null,
  },
  reducers: {
    setScrollRef: (state, action) => {
      state.scrollRef = action.payload;
    },
  },
});

export const { setScrollRef } = scrollSlice.actions;
export const selectScrollRef = (state) => state.scroll.scrollRef;
export default scrollSlice.reducer;
