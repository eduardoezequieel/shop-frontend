import { create } from "zustand";
import { IAuthStore } from "../interfaces";
import { login, me, register } from ".";
import { useNotificationStore } from "@/store";
import { JWT_TOKEN } from "@/constants";

export const useAuthStore = create<IAuthStore>((set) => {
  const { notificate } = useNotificationStore.getState();

  return {
    isLoading: false,
    user: null,
    login: async (credentials) => {
      set({ isLoading: true });
      const { ok, data, notificationBody } = await login(credentials);

      if (ok && data) {
        set({ user: data });
      } else {
        notificate(notificationBody!);
      }

      set({ isLoading: false });
    },
    logout: () => set({ user: null }),
    register: async (newUser) => {
      set({ isLoading: true });
      const { ok, notificationBody, data } = await register(newUser);

      if (ok) {
        set({ user: data });
      } else {
        notificate(notificationBody!);
      }

      set({ isLoading: false });
    },
    getLoggedUser: async () => {
      const jwt = JWT_TOKEN;
      if (!jwt) return;

      set({ isLoading: true });

      const { ok, data, notificationBody } = await me();

      if (ok) {
        set({ user: data });
      } else {
        notificate(notificationBody!);
      }

      set({ isLoading: false });
    },
  };
});
