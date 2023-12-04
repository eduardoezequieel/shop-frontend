"use client";
import { Button, Checkbox } from "antd";
import styles from "./register.module.scss";
import { useLogin } from "../login/hooks";
import Link from "next/link";

const RegisterPage = () => {
  const { togglePasswordMode, passwordMode } = useLogin();
  return (
    <form className={styles.form}>
      <div className="inputGroup">
        <input type="text" required autoComplete="off" />
        <label htmlFor="name">Username</label>
      </div>
      <div className="inputGroup">
        <input type="email" required autoComplete="off" />
        <label htmlFor="name">Email</label>
      </div>
      <div className="inputGroup">
        <input type={passwordMode} required autoComplete="off" />
        <label htmlFor="name">Password</label>
      </div>
      <div className="inputGroup">
        <input type={passwordMode} required autoComplete="off" />
        <label htmlFor="name">Confirm password</label>
      </div>
      <div className="inputGroup">
        <textarea required autoComplete="off"></textarea>
        <label htmlFor="Address">Address</label>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Checkbox onChange={togglePasswordMode}>Show password</Checkbox>
        <Link href="login">
          <span className="registerLink">Already have an account?</span>
        </Link>
      </div>
      <Button type="primary" size="large">
        Register
      </Button>
    </form>
  );
};
export default RegisterPage;
