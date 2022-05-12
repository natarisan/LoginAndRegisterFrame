import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const apiUrl = "http://localhost:8181/";
const token: any = localStorage.getItem("localJWT");

export const postImage = createAsyncThunk("images/post", async(base64string: string) => {
    const res = await axios.post(`${apiUrl}post-image`, {
        customer_id: "2001",
        images: base64string
    },
    {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer" + token
        }
    });
})

const imagesSlice = createSlice(
    {
        name: "images",
        initialState: {
            images: [""],
            selected: false,
        },
        reducers: {
            addImages(state, action) { 
                state.images = action.payload;
            },
            removeImages(state, action) {
                // not implemented
            },
            toggleSelected(state) {
                state.selected = !state.selected;
            }
        },
        extraReducers: (builder) => {
            builder.addCase(postImage.fulfilled, (state, action) => {
                window.location.href = "./images";
            })
        }
    }
)

export const {addImages, removeImages, toggleSelected} = imagesSlice.actions;
export const selectImages = (state: any) => state.images.images;
export const selectSelected = (state: any) => state.images.selected;

export default imagesSlice.reducer;