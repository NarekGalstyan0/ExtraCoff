import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Bag: [],
  total: 0,
  
};

const bagSlice = createSlice({
  name: "bag",
  initialState,
  reducers: {
    add: (state, action) => {
      state.Bag.push(action.payload);
    },

    Remove: (state, action) => {
      state.Bag = state.Bag.filter((coffee) => coffee.id !== action.payload.id);
    },

    
  },
});

export const { add, Remove, } = bagSlice.actions;
export default bagSlice.reducer;
