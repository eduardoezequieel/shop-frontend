"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Button, Checkbox } from "antd";
import styles from "./register.module.scss";
import { useLogin } from "../login/hooks";
import { IRegister } from "./interfaces";

const RegisterPage = () => {
  const {
    togglePasswordMode,
    passwordMode,
    register: registerNewUser,
    isLoading,
  } = useLogin();
  const {
    register,
    formState: { errors },
    setError,
    clearErrors,
    handleSubmit,
  } = useForm<IRegister>();

  const onSubmit = (data: IRegister) => {
    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Password and confirm password must match",
      });
      return;
    }

    clearErrors("confirmPassword");
    registerNewUser(data);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className="inputGroup">
        <input
          type="text"
          required
          autoComplete="off"
          {...register("username")}
        />
        <label htmlFor="username">Username</label>
      </div>
      <div className="inputGroup">
        <input
          type="email"
          required
          autoComplete="off"
          {...register("email")}
        />
        <label htmlFor="email">Email</label>
      </div>
      <div className={`inputGroup ${errors?.confirmPassword && "error"}`}>
        <input
          type={passwordMode}
          required
          autoComplete="off"
          {...register("password")}
        />
        <label htmlFor="password">Password</label>
      </div>
      <div className={`inputGroup ${errors?.confirmPassword && "error"}`}>
        <input
          type={passwordMode}
          required
          autoComplete="off"
          {...register("confirmPassword")}
        />
        <label htmlFor="confirmPassword">Confirm password</label>
        {errors?.confirmPassword && (
          <span className="errorLabel">{errors.confirmPassword.message}</span>
        )}
      </div>
      <div className="inputGroup">
        <textarea
          required
          autoComplete="off"
          {...register("address")}
        ></textarea>
        <label htmlFor="address">Address</label>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Checkbox onChange={togglePasswordMode}>Show password</Checkbox>
        <Link href="login">
          <span className="registerLink">Already have an account?</span>
        </Link>
      </div>
      <Button type="primary" size="large" htmlType="submit" loading={isLoading}>
        Register
      </Button>
    </form>
  );
};
export default RegisterPage;
