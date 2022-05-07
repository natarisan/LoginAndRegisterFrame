import React from 'react';
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import styles from "./App.module.css";
import { FaSignInAlt } from "react-icons/fa";
import {
  fetchAsyncDeposit,
  newAccount,
  editCid,
  editAid,
  editAmount,
  setAtype,
  setTtype,
  selectTransactionRequest,
  selectDeposit,
} from "./AppSlice";

function App() {
  const dispatch = useDispatch();
  const transactionRequest = useSelector(selectTransactionRequest);
  const deposit = useSelector(selectDeposit);

  const showAccount = async() => {
    await dispatch(fetchAsyncDeposit(transactionRequest))
  }

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
        <h2>預金残高: {deposit}</h2>
        <span>customer_id</span>
        <input
          type="number"
          className={styles.inputLog}
          name="customer_id"
          placeholder=""
          onChange={(e) => dispatch(editCid(e.target.value))}
          required
        />
        <span>account_id</span>
        <input
          type="number"
          className={styles.inputLog}
          name="account_id"
          placeholder=""
          onChange={(e) => dispatch(editAid(e.target.value))}
          required
        />
        <span>amount</span>
        <input
          type="number"
          className={styles.inputLog}
          name="amount"
          placeholder=""
          onChange={(e) => dispatch(editAmount(e.target.value))}
          required
        />
        <span>transaction_type</span>
        <input
          type="checkbox"
          className={styles.inputLog}
          name="transaction_type"
          placeholder=""
          onClick={() => dispatch(setTtype("withdrawal"))}
          required
        />
        <div className={styles.switch}>
          <Button
            variant="contained"
            color="primary"
            onClick={showAccount}
            >
            SHOW
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
