import React from 'react';
import {Button} from '@material-ui/core';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import styles from './profile.module.css';
import {
    editName,
    editAge,
    editSex,
    editLivingIn,
    editSelfIntroduction,
    switchModal,
    selectProfile,
    selectImage,
    selectUserId,
    selectIsEditProfileModalOpen
} from "./profileSlice";

const Profile = () => {
    const dispatch = useDispatch();
    const profile = useSelector(selectProfile)
    const imageId = useSelector(selectImage)
    const userId = useSelector(selectUserId)
    const isModalOpen = useSelector(selectIsEditProfileModalOpen)


    return(
        <>
            <h1>{profile.name}さんのプロフィール</h1>
            <p>ユーザID:{userId}</p>
            <p>年齢:{profile.age}</p>
            <p>性別:{profile.sex}</p>
            <p>居住地:{profile.livingIn}</p>
            <p>自己紹介:{profile.selfIntroduction}</p>
            <Button
                      variant="contained"
                      color="primary"
                      onClick={() => dispatch(switchModal())}
            ></Button>
        </>
    );
}

export default Profile;