import React from "react";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import styles from "./login.module.css";
import {
    fetchAsyncLogin,
    fetchAsyncRegister,
    editUsername,
    editPassword,
    toggleMode,
    selectAuthen,
    selectIsLoginView,
    selectDeposit,
} from "./loginSlice";

const Login = () => {
    const dispatch = useDispatch();
    const authen = useSelector(selectAuthen);
    const isLoginView = useSelector(selectIsLoginView);
    const btnDisabler = authen.username === "" || authen.password === "";

    const login = async () => {
        if(isLoginView) {
            await dispatch(fetchAsyncLogin(authen));
        } else {
            await dispatch(fetchAsyncRegister(authen));
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
                    color="secondary"
                    onClick={login}
                    >
                        {isLoginView ? "Login" : "Create"}
                    </Button>
                </div>
                <span
                className={styles.switchText}
                onClick={() => dispatch(toggleMode())}
                >
                    {isLoginView ? "新規登録" : "ログイン画面へ"}
                </span>
            </div>
        </div>
    );
};

export default Login;