export interface INotification {
  type: "success" | "info" | "warning" | "error";
  message: string;
  description: string;
}
