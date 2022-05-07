import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = `http://localhost:8181/`;
const token: any = localStorage.getItem("localJWT");

export const fetchAsyncDeposit = createAsyncThunk("App/deposit", async(req: any) => {
    const res = await axios.post(`${apiUrl}customers/${req.customer_id}/account/${req.account_id}`,
    {
        transaction_type: req.transaction_type,
        amount: req.amount
    },
    {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        }
    });
    return res.data;
});

export const newAccount = createAsyncThunk("App/newAccount", async(req: any) => {
    const res = await axios.post(`${apiUrl}customers/${req.customer_id}/account`,
    {
        "account_type": req.account_type,
        "amount": req.amount
    },
    {
        headers: {
            "Content-Type": "application/json",
        }
    });
    return res.data;
});

const AppSlice = createSlice({
    name: "App",
    initialState: {
        transactionRequest: {
            customer_id: null,
            account_id: null,
            amount: 0,
            transaction_type: "deposit",
            account_type: null,
        },
        deposit: null,
    },
    reducers: {
        editCid(state,action) {
            state.transactionRequest.customer_id = action.payload;
        },
        editAid(state, action){
            state.transactionRequest.account_id = action.payload;
        },
        editAmount(state, action) {
            state.transactionRequest.amount = action.payload;
        },
        setAtype(state, action) {
            state.transactionRequest.account_type = action.payload;
        },
        setTtype(state, action) {
            state.transactionRequest.transaction_type = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAsyncDeposit.fulfilled, (state, action) => {
            state.deposit = action.payload.amount;
            window.location.href = "/";
        });
        builder.addCase(fetchAsyncDeposit.rejected, (state, action) => {
            window.location.href = "/";
        });
        builder.addCase(newAccount.fulfilled, (state, action) => {
            state.transactionRequest.account_id = action.payload.account_id;
        });
    }
})

export const {editCid, editAid, editAmount, setAtype, setTtype} = AppSlice.actions;
export const selectTransactionRequest = (state: any) => state.transactionRequest;
export const selectDeposit = (state: any) => state.deposit;

export default AppSlice.reducer;