import Cookies from "js-cookie";
import { getAxiosInstance } from "@/constants";
import { ILogin, ILoginResponse } from "../login/interfaces";
import { HttpResponse, IUser } from "@/interfaces";
import { AxiosError } from "axios";
import { IRegister } from "../register/interfaces";

const http = getAxiosInstance();

export const me = async (): Promise<HttpResponse<IUser>> => {
  try {
    const { data } = await http.get<IUser>("api/users/me?populate=role");

    return {
      ok: true,
      data,
    };
  } catch (error) {
    let errorMessage = "Something went wrong. Contact the administrator.";
    if (error instanceof AxiosError) {
      errorMessage = error.response?.data?.error?.message || errorMessage;
    }

    return {
      ok: false,
      notificationBody: {
        type: "error",
        message: "Error",
        description: errorMessage,
      },
    };
  }
};

export const login = async (
  credentials: ILogin
): Promise<HttpResponse<IUser>> => {
  try {
    const { data } = await http.post<ILoginResponse>(
      "api/auth/local",
      credentials
    );

    Cookies.set("jwtShopToken", data.jwt);
    const { data: user } = await me();

    return {
      ok: true,
      data: user,
    };
  } catch (error) {
    console.log(error);
    let errorMessage = "Something went wrong. Contact the administrator.";
    if (error instanceof AxiosError) {
      errorMessage = error.response?.data?.error?.message || errorMessage;
    }

    return {
      ok: false,
      notificationBody: {
        type: "error",
        message: "Error",
        description: errorMessage,
      },
    };
  }
};

export const register = async (
  newUser: IRegister
): Promise<HttpResponse<IUser>> => {
  try {
    const { data } = await http.post<ILoginResponse>(
      "api/auth/local/register",
      newUser
    );

    Cookies.set("jwtShopToken", data.jwt);
    const { data: user } = await me();

    return {
      ok: true,
      data: user,
    };
  } catch (error) {
    let errorMessage = "Something went wrong. Contact the administrator.";
    if (error instanceof AxiosError) {
      errorMessage = error.response?.data?.error?.message || errorMessage;
    }

    return {
      ok: false,
      notificationBody: {
        type: "error",
        message: "Error",
        description: errorMessage,
      },
    };
  }
};
