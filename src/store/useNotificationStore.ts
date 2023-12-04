import { INotification, INotificationStore } from "@/interfaces";
import { create } from "zustand";

export const useNotificationStore = create<INotificationStore>((set, get) => ({
  existsNotification: false,
  notificate: async (notificationBody: INotification) => {
    set({ existsNotification: true, notificationBody });

    setTimeout(() => {
      set({ existsNotification: false, notificationBody: undefined });
    }, 1);
  },
}));
