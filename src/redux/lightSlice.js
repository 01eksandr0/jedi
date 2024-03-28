import { createSlice } from "@reduxjs/toolkit";

const lightSlice = createSlice({
  name: "light",
  initialState: {
    color: "rgb(29, 235, 14)",
    gradient: `linear-gradient(
    245.43deg,
    rgb(203, 241, 200) -2.647%,
    rgb(217, 243, 215) 101.731%
  )`,
  },
  reducers: {
    changeColor: {
      reducer(state, action) {
        console.log(action);
        state.color = action.payload.color;
        state.gradient = action.payload.gradient;
      },
      prepare(color, gradient) {
        return { payload: { color, gradient } };
      },
    },
  },
});

export const { changeColor } = lightSlice.actions;
export const lightReducer = lightSlice.reducer;
