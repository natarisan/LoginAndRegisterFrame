import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "http://localhost:6001/";
const token = localStorage.localJWT;
//非同期関数はスライスの外に書く。
export const fetchAsyncLogin = createAsyncThunk("login/post", async(auth: any) => {
  const res = await axios.post(`${apiUrl}auth/login`, auth, {
    headers: {
        "Content-Type": "application/json",
    }
  });
  return res.data;
});

export const fetchAsyncRegister = createAsyncThunk("login/post", async(auth: any) => {
    const res = await axios.post(`${apiUrl}auth/register`, auth, {
      headers: {
          "Content-Type": "application/json",
      }
    });
    return res.data;
});

export const fetchAsyncDeposit = createAsyncThunk("login/deposit", async() => {
        const res = await axios.get(`${apiUrl}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res.data;
});

const loginSlice = createSlice(
    {
        name: "login",
        initialState: {
            authen:{
                username: "",
                password: "",
            },
            isLoginView: true,
            deposit:{
                deposit: 0,
            },
        },
        reducers: {
            editUsername(state, action) { //authen state 更新
                state.authen.username = action.payload;
            },
            editPassword(state, action) {
                state.authen.password = action.payload;
            },
            toggleMode(state) {
                state.isLoginView = !state.isLoginView;
            }
        },
        extraReducers: (builder) => {
            builder.addCase(fetchAsyncLogin.fulfilled, (state, action) => {
                localStorage.setItem("localJWT", action.payload.access_token);
                localStorage.setItem("localRJWT", action.payload.refresh_token);
                action.payload.access_token && action.payload.refresh_token && (window.location.href = "/deposit");
            });
            builder.addCase(fetchAsyncDeposit.fulfilled, (state, action) => {
                state.deposit = action.payload.deposit;
            });
        }
    }
)

export const { editUsername, editPassword, toggleMode } = loginSlice.actions;
export const selectAuthen = (state: any) => state.login.authen;
export const selectIsLoginView = (state: any) => state.login.isLoginView;
export const selectDeposit = (state: any) => state.login.deposit;

export default loginSlice.reducer;















