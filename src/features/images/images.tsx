import React from 'react';
import styles from "./images.module.css";
import { FaSignInAlt } from "react-icons/fa";

function Images() {
  const Logout = () => {
    localStorage.removeItem("localJWT");
    localStorage.removeItem("localRJWT");
    window.location.href = "/";
  }
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
