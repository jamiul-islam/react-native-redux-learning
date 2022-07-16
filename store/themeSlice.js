import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  // 5. give the name of the slice
  name: "theme",
  // 6. set and initial value
  initialState: {
    mode: "light",
  },
  // 7. add actions functions in the reducer
  reducers: {
    toggleTheme: (state, action) => {
      state.mode = action.payload;
    },
  },
});

// 8. export the action functions
export const { toggleTheme } = themeSlice.actions;
export const selectTheme = (state) => state.theme.mode;

// 10. export the reducer from the slice
export default themeSlice.reducer;
