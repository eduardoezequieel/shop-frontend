import { create } from "zustand";
import { IAuthStore } from "../interfaces";
import { login } from ".";
import { useNotificationStore } from "@/store";

export const useAuthStore = create<IAuthStore>((set) => {
  const { notificate } = useNotificationStore.getState();

  return {
    isLoading: false,
    user: null,
    login: async (credentials) => {
      set({ isLoading: true });
      const { ok, data, notificationBody } = await login(credentials);
      notificate({
        type: "info",
        message: "Login",
        description: "Test message",
      });

      if (ok && data) {
        set({ user: data });
      } else {
        notificate(notificationBody!);
      }

      set({ isLoading: false });
    },
    logout: () => set({ user: null }),
  };
});
