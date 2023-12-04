import { useAuthStore } from "@/app/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useLogin = () => {
  const { login, user, register, isLoading } = useAuthStore();
  const router = useRouter();
  const [passwordMode, setPasswordMode] = useState("password");

  const togglePasswordMode = () => {
    setPasswordMode(passwordMode === "password" ? "text" : "password");
  };

  useEffect(() => {
    if (user) {
      const { role } = user;

      if (role?.id === 3) {
        router.push("/shop");
      } else {
        console.log("admin panel");
      }
    }
  }, [user]);

  return { passwordMode, togglePasswordMode, login, register, isLoading };
};
