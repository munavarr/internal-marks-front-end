import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosApi } from "./axiosApi";

const initialState = {
  token: "",
};

export const Login = createAsyncThunk(
  "Login",
  async ({ logindata, navigate }) => {
    try {
      console.log(logindata); 
      const res = await AxiosApi.post("/projectaccount/login/", logindata);
   
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }
      if (res.data.role) {
        localStorage.setItem("role", res.data.role);
      }
      if (res.data.role === "admin") {
        navigate("/Addmembers");
      } else {
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("subject", res.data.subject);
        navigate("/Teacher");
      }
      localStorage.setItem("id", res.data.pk);
      // const tokens = localStorage.getItem("token");
      // const role = localStorage.getItem("role");
      // res.data.role ==="admin"?:;
      // console.log(tokens,role,"aaaaaaaaaaaaaaaaaaaaaaaaaa");
      return res.data;
    } catch {
      console.error("error");
    }
  }
);

export const SignUpUser = createAsyncThunk("SignUpUser", async (userdata) => {
  const res = await AxiosApi.post("/user/signup", userdata);
  return await res.data;
});

export const Profile = createAsyncThunk("Profile", async (profileData) => {
  const res = await AxiosApi.post("/user/signup", profileData);
  return await res.data;
});

export const logouts = createAsyncThunk("SignUpUser", async (navigate) => {
  const res = await AxiosApi.post("/user/logout");

  return await res.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    // signup

    [Login.pending]: (state, action) => {
      state.loading = true;
    },
    [SignUpUser.fulfilled]: (state, action) => {
      state.loading = false;
      if (action.payload.error) {
        state.error = action.payload.error;
      } else {
        state.role = action.payload.result.role;
      }
    },
    [SignUpUser.rejected]: (state, action) => {
      state.loading = false;
    },
    // profile
    [Profile.pending]: (state, action) => {
      state.loading = true;
    },
    [Profile.fulfilled]: (state, action) => {},
    [Profile.rejected]: (state, action) => {
      state.loading = false;
    },

    // signin
  },
});

export const { addToken, addUser, logout, addi } = authSlice.actions;
export default authSlice.reducer;
