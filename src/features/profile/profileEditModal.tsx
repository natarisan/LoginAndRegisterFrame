import React from 'react';
import {useSelector} from 'react-redux';
import {Button} from '@material-ui/core';
import styles from './profileEditModal.module.css';
import {
    editName,
    editAge,
    editSex,
    editLivingIn,
    editSelfIntroduction,
    selectProfile,
    selectIsEditProfileModalOpen
} from "./profileSlice";