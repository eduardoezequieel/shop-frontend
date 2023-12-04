import { IUser } from "@/interfaces";
import { ILogin } from "../app/login/interfaces";
import { IRegister } from "../app/register/interfaces";

export interface IAuthStore {
  isLoading: boolean;
  user: IUser | null;
  login: (credentials: ILogin) => Promise<void>;
  logout: () => void;
  register: (data: IRegister) => Promise<void>;
  getLoggedUser: () => Promise<void>;
}
