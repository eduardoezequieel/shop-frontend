import { INotification } from ".";

export interface INotificationStore {
  existsNotification: boolean;
  notificationBody?: INotification;
  notificate: (notificationBody: INotification) => Promise<void>;
}
