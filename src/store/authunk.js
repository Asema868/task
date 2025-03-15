import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../api/axiosInsance";

export const signUpRequest = createAsyncThunk(
  "auth/signUpRequest",
  async ({ userData, navigate }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/register", userData);
      navigate("/register");
      return data;
    } catch (error) {
      return rejectWithValue;
    }
  }
);

export const signInRequest = createAsyncThunk(
  "auth/signInRequest",
  async ({ userData, navigate }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/auth", userData);

      navigate("/login");

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
