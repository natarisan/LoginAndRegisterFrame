import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "http://localhost:8181/";

const imagesSlice = createSlice(
    {
        name: "images",
        initialState: {
            images: [],
            selected: false,
        },
        reducers: {
            addImages(state, action) { //画像関連のreducer
                
            },
            removeImages(state, action) {

            },
            toggleSelected(state) {
                state.selected = !state.selected;
            }
        }
    }
)