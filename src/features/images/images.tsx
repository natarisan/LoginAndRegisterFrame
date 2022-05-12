import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import styles from "./images.module.css";
import { FaSignInAlt } from "react-icons/fa";
import {
  addImages,
  removeImages,
  toggleSelected,
  selectImages,
  selectSelected,
} from "./imagesSlice";

function Images() {
  const Logout = () => {
    localStorage.removeItem("localJWT");
    localStorage.removeItem("localRJWT");
    window.location.href = "/";
  }

  useEffect(() => {
    //画像取得、dispatch
  }, [])

  return (
    <div className={styles.containerTasks}>
      <div className={styles.appTasks}>
        <button onClick={Logout} className={styles.signBtn}>
          <FaSignInAlt />
        </button>
      </div>
      <div className={styles.appDetails}></div>
    </div>
  );
}

export default Images;
