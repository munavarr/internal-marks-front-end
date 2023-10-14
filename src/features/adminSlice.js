import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosApi } from "./axiosApi";

const initialState = {
  token: "vv",
  allSubjects :[],
  allTeachers : [],
  AllStudents : [],
  allExams :[],
};


export const addTeacher = createAsyncThunk("addTeacher", async (teacherdata) => {
  const res = await AxiosApi.post("/store/registration/", teacherdata);
  return await res.data;
});

export const addStudent = createAsyncThunk("addStudent", async (studentdata) => {
  const res = await AxiosApi.post("/store/student/registration/", studentdata);
  return await res.data;
});

export const addSubject = createAsyncThunk("addSubject", async (subjectdata) => {
  console.log(subjectdata)
  const res = await AxiosApi.post("/store/subject/", subjectdata);
  return await res.data;
});

export const addMarks = createAsyncThunk("addMarks", async (thedata) => {
  const res = await AxiosApi.post("/store/mark/", thedata);
  return await res.data;
});

export const getAllSubjects = createAsyncThunk("getAllSubjects", async () => {
  const res = await AxiosApi.get("/store/subject/");
  return await res.data;
});

export const getAllExams = createAsyncThunk("getAllExams", async () => {
  const res = await AxiosApi.get("/store/seriesexam/");
  return await res.data;
});

export const getAllTeachersList = createAsyncThunk("getAllTeachersList", async () => {
  const res = await AxiosApi.get("/store/registration/");
  return await res.data;
});

export const getAllStudentsList = createAsyncThunk("getAllStudentsList", async () => {
  const res = await AxiosApi.get("/store/student/registration/");
  console.log(res.data)
  return await res.data;
});

 export const deleteTeacher = createAsyncThunk("deleteTeacher", async (deleteData) => {
  const res = deleteData && await AxiosApi.delete(`/store/registration/${deleteData}/`) 
  return await res.data;
});

export const deleteStudent = createAsyncThunk("deleteStudent", async (deleteData) => {
  const res = deleteData && await AxiosApi.delete(`/store/student/registration/${deleteData}/`) 
  return await res.data;
});

export const deleteSubject = createAsyncThunk("deleteSubject", async (deleteData) => {
  const res = deleteData && await AxiosApi.delete(`/store/subject/${deleteData}/`) 
  return await res.data;
});

export const updateTeacher = createAsyncThunk("updateTeacher", async ({teacherdata,updateid}) => {
  const res = await AxiosApi.put(`/store/registration/${updateid}/`,teacherdata) 
  return await res.data;
});

export const updateStudent = createAsyncThunk("updateStudent", async ({studentdata,updateid}) => {
  const res = await AxiosApi.put(`/store/student/registration/${updateid}/`,studentdata) 
  return await res.data;
});

export const updateSubject = createAsyncThunk("updateSubject", async ({subjectdata,updateid}) => {
  const res = await AxiosApi.put(`/store/subject/${updateid}/`,subjectdata) 
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

  // getAllStudentsList
  [getAllStudentsList.pending]: (state, action) => {
    state.loading = true;
  },
  [getAllStudentsList.fulfilled]: (state, action) => {
       state.AllStudents = action.payload
       
  },
  [getAllStudentsList.rejected]: (state, action) => {
    state.loading = false;
  },

    // getexams
    [getAllExams.pending]: (state, action) => {
      state.loading = true;
    },
    [getAllExams.fulfilled]: (state, action) => {
         state.allExams = action.payload
         console.log(state.allExams)
    },
    [getAllExams.rejected]: (state, action) => {
      state.loading = false;
    },
  
    // signin
  },
});

export const { addToken, addUser, logout, addi } = adminSlice.actions;
export default adminSlice.reducer;