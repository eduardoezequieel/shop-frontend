"use client";

import { Checkbox, Button } from "antd";
import Link from "next/link";
import styles from "./login.module.scss";
import { useLogin } from "./hooks";

const LoginPage = () => {
  const { passwordMode, togglePasswordMode } = useLogin();

  return (
    <form className={styles.form}>
      <div className="inputGroup">
        <input type="text" required autoComplete="off" />
        <label htmlFor="name">Name</label>
      </div>
      <div className="inputGroup">
        <input type={passwordMode} required autoComplete="off" />
        <label htmlFor="password">Password</label>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Checkbox onChange={togglePasswordMode}>Show password</Checkbox>
        <Link href="register">
          <span className={styles.registerLink}>Register</span>
        </Link>
      </div>
      <Button type="primary" size="large">
        Log in
      </Button>
    </form>
  );
};
export default LoginPage;
