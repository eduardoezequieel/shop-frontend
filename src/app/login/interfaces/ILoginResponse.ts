import { IUser } from "@/interfaces";

export interface ILoginResponse {
  jwt: string;
  user: IUser;
}
