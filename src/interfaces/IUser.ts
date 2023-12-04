import { IRole } from ".";

export interface IUser {
  id: number;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  address: any;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  role?: IRole;
}
