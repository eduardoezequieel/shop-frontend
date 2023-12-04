import { IUser } from "@/interfaces";
import { ILogin } from "../login/interfaces";

export interface IAuthStore {
  isLoading: boolean;
  user: IUser | null;
  login: (credentials: ILogin) => Promise<void>;
  logout: () => void;
}
