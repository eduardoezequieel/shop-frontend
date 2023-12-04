"use client";

import { Checkbox, Button } from "antd";
import Link from "next/link";
import styles from "./login.module.scss";
import { useLogin } from "./hooks";
import { useForm } from "react-hook-form";
import { ILogin } from "./interfaces";

const LoginPage = () => {
  const { passwordMode, togglePasswordMode, login } = useLogin();
  const { register, handleSubmit } = useForm<ILogin>();

  const onSubmit = (credentials: ILogin) => login(credentials);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className="inputGroup">
        <input
          type="text"
          autoComplete="off"
          {...register("identifier")}
          required
        />
        <label htmlFor="identifier">Identifier</label>
      </div>
      <div className="inputGroup">
        <input
          type={passwordMode}
          autoComplete="off"
          {...register("password")}
          required
        />
        <label htmlFor="password">Password</label>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Checkbox onChange={togglePasswordMode}>Show password</Checkbox>
        <Link href="register">
          <span className="registerLink">Register</span>
        </Link>
      </div>
      <Button type="primary" size="large" htmlType="submit">
        Log in
      </Button>
    </form>
  );
};
export default LoginPage;
