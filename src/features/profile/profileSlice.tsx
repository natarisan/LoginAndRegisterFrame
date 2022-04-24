import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const profileSlice = createSlice({
    name: "profile",
    initialState: {
        profile: {
            name: "",
            age: 0,
            sex: "",
            livingIn: "",
            selfIntroduction: "",
        },
        image: 1,
        userId: 0,
        isEditProfileModalOpen: false,
    },
    reducers: {
        editName(state, action){
            state.profile.name = action.payload;
        },
        editAge(state, action){
            state.profile.age = action.payload;
        },
        editSex(state, action){
            state.profile.sex = action.payload;
        },
        editLivingIn(state, action){
            state.profile.livingIn = action.payload;
        },
        editSelfIntroduction(state, action){
            state.profile.selfIntroduction = action.payload;
        },
        switchModal(state){
            !state.isEditProfileModalOpen
        }
    }

})

export const {editName, editAge, editSex, editLivingIn, editSelfIntroduction, switchModal} = profileSlice.actions;
export const selectProfile = (state: any) => state.profile.profile;
export const selectImage = (state: any) => state.profile.image;
export const selectUserId = (state: any) => state.profile.userId;
export const selectIsEditProfileModalOpen =(state: any) => state.profile.isEditProfileModalOpen
export default profileSlice.reducer;