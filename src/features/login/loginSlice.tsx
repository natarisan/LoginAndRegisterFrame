import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "http://localhost:8080/";
//非同期の処理は、スライスの外に書く。
//名前:スライス名/アクション名
//createAsyncThunk→fulfilled rejected pending
export const fetchAsyncRegister = createAsyncThunk(
    "login/register",
     async(auth) => {
        const res = await axios.post(`${apiUrl}create`, auth, 
        {
        headers:{
            "Content-Type":"application/json",
        },
    });
    return res.data;
    }
);

export const fetchAsyncProf = createAsyncThunk("login/get", async() => {
    const res = await axios.get(`${apiUrl}myself/`, {
        headers:{
            "Content-Type":"application/json",
        },
    });
    return res.data;
});

const loginSlice = createSlice({
    name: "login",
    initialState: {
        authen:{
            id: 3,
            username: "",
            password: "",
        },
        isLoginView: true,
        profile:{
            id: 0,
            username: "",
        },
    },
    reducers: {
        editUsername(state, action) {//authenのusernameステートを更新
            state.authen.username = action.payload;
        },
        editPassword(state, action){
            state.authen.password = action.payload;
        },
        toggleMode(state){
            state.isLoginView = !state.isLoginView;
        },
    },

    //非同期関数の結果に応じた処理
    extraReducers: (builder) =>{
        //builder.addCase(fetchAsyncLogin.fulfilled, (state, action) => {
            //localStorage.setItem("token", action.payload.token);//action.payload = res.data
            //action.payload.token && (window.location.href = "/tasks");
        //});
        builder.addCase(fetchAsyncProf.fulfilled, (state, action) => {
            state.profile = action.payload;
        });
    },
});

export const { editUsername, editPassword, toggleMode } = loginSlice.actions;//actions = reducer
export const selectAuthen = (state: any) => state.login.authen;//stateをエクスポート
export const selectIsLoginView = (state: any) => state.login.isLoginView;
export const selectProfile = (state: any) => state.login.profile;

export default loginSlice.reducer; //最後にまとめてreducerをエクスポート