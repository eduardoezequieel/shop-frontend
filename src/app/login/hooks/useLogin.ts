import { useState } from "react";

export const useLogin = () => {
  const [passwordMode, setPasswordMode] = useState("password");

  const togglePasswordMode = () => {
    setPasswordMode(passwordMode === "password" ? "text" : "password");
  };

  return { passwordMode, togglePasswordMode };
};
