import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Saidur Rahaman",
  email: "saidur@gmail.com",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
