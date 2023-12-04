import { INotification } from ".";

export interface HttpResponse<T> {
  ok: boolean;
  data?: T;
  notificationBody?: INotification;
}
