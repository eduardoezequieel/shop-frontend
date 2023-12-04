import { IUser } from "@/interfaces";
import { ILogin } from "../login/interfaces";
import { IRegister } from "../register/interfaces";

export interface IAuthStore {
  isLoading: boolean;
  user: IUser | null;
  login: (credentials: ILogin) => Promise<void>;
  logout: () => void;
  register: (data: IRegister) => Promise<void>;
  getLoggedUser: () => Promise<void>;
}
