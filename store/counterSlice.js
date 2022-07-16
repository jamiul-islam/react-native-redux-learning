import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  // 5. give the name of the slice
  name: "counter",
  // 6. set and initial value
  initialState: {
    value: 0,
  },
  // 7. add actions functions in the reducer
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// 8. export the action functions
export const { increment, decrement } = counterSlice.actions;
// 9. export the counter value
export const selectCount = (state) => state.counter.value;

// 10. export the reducer from the slice
export default counterSlice.reducer;
