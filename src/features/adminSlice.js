import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosApi } from "./axiosApi";

const initialState = {
  token: "vv",
  allSubjects :[],
  allTeachers : []
};


export const addTeacher = createAsyncThunk("addTeacher", async (teacherdata) => {
  const res = await AxiosApi.post("/store/registration/", teacherdata);
  return await res.data;
});

export const getAllSubjects = createAsyncThunk("getAllSubjects", async () => {
  const res = await AxiosApi.get("/store/subject/");
  return await res.data;
});

export const getAllTeachersList = createAsyncThunk("getAllTeachersList", async () => {
  const res = await AxiosApi.get("/store/registration/");
  return await res.data;
});

 export const deleteTeacher = createAsyncThunk("deleteTeacher", async (deleteData) => {
  const res = deleteData && await AxiosApi.delete(`/store/registration/${deleteData}/`) 
  return await res.data;
});

export const updateTeacher = createAsyncThunk("updateTeacher", async ({teacherdata,updateid}) => {
  const res = await AxiosApi.put(`/store/registration/${updateid}/`,teacherdata) 
  return await res.data;
});

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: {
    // addteacher

    [addTeacher.pending]: (state, action) => {
      state.loading = true;
    },
    [addTeacher.fulfilled]: (state, action) => {
      state.loading = false;
      // if (action.payload.error) {
      //   state.error = action.payload.error;
      // } else {
      //   state.role = action.payload.result.role;
      // }

    },
    [addTeacher.rejected]: (state, action) => {
      state.loading = false;
    },
    // getsubjects
    [getAllSubjects.pending]: (state, action) => {
      state.loading = true;
    },
    [getAllSubjects.fulfilled]: (state, action) => {
         state.allSubjects = action.payload
         console.log(state.allSubjects)
    },
    [getAllSubjects.rejected]: (state, action) => {
      state.loading = false;
    },

     // getAllTeachersList
     [getAllTeachersList.pending]: (state, action) => {
      state.loading = true;
    },
    [getAllTeachersList.fulfilled]: (state, action) => {
         state.allTeachers = action.payload
         
    },
    [getAllTeachersList.rejected]: (state, action) => {
      state.loading = false;
    },

    // signin
  },
});

export const { addToken, addUser, logout, addi } = adminSlice.actions;
export default adminSlice.reducer;