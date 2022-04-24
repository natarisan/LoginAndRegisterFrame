import React from 'react'
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import styles from "./login.module.css";
import {
    editUsername,
    editPassword,
    toggleMode,
    fetchAsyncRegister,
    selectAuthen,
    selectIsLoginView,
} from "./loginSlice";

const Login = () => {
    const apiUrl = "http://localhost:8080/";
    const dispatch = useDispatch();
    const authen = useSelector(selectAuthen);
    const isLoginView = useSelector(selectIsLoginView);
    const btnDisabler = authen.username === "" || authen.password === "";

    const register = () => {
    
}

    const login = () => {
        if(isLoginView) {
            console.log("桃");
        } else {
            axios({
                method: 'put',
                url: 'http://localhost:8080/users/2',
                data: {
                  Name: authen.username,
                  Email: authen.password,
                },
                headers:{
                    "Content-Type":"application/json",
                }
            });
        }
    }

  return (
      <div className={styles.containerLogin}>
          <div className={styles.appLogin}>
              <h1>{isLoginView ? "Login" : "Register"}</h1>
              <span>Username</span>
              <input
                type="text"
                className={styles.inputLog}
                name="username"
                placeholder=""
                onChange={(e) => dispatch(editUsername(e.target.value))}
                required
                />
               <span>Password</span>
               <input
                type="password"
                className={styles.inputLog}
                name="password"
                placeholder=""
                onChange={(e) => dispatch(editPassword(e.target.value))}
                required
                />
                <div className={styles.switch}>
                    <Button
                      variant="contained"
                      disabled={btnDisabler}
                      color="primary"
                      onClick={login}
                    >
                        {isLoginView ? "Login" : "Create"}
                    </Button>
                </div>
                <span
                  className={styles.switchText}
                  onClick={() => dispatch(toggleMode())}
                >
                    {isLoginView ? "Create Account ?" : "Back to Login"}
                </span>
          </div>
      </div>
  );
};

export default Login
