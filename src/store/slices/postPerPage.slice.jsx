import { createSlice } from "@reduxjs/toolkit";

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const postPerPageSlice = createSlice({
  name: "postPerPage",
  initialState: 15,
  reducers: {
    changePostPerPage: (state, action) =>{{
        const rangeValue = Number(action.payload)
        return rangeValue
    }}
  },
});

export const {changePostPerPage} = postPerPageSlice.actions;

export default postPerPageSlice.reducer;
