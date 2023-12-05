import Cookies from "js-cookie";
import { getAxiosInstance } from "@/constants";
import { HttpResponse, IUser, Image } from "@/interfaces";
import { AxiosError } from "axios";
import { ILogin, ILoginResponse } from "@/app/login/interfaces";
import { IRegister } from "@/app/register/interfaces";

const http = getAxiosInstance();

export const uploadFile = async (file: File): Promise<HttpResponse<Image>> => {
  try {
    const formData = new FormData();
    formData.append("files", file);

    const { data } = await http.post<Image[]>("api/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return {
      ok: true,
      data: data[0],
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

export const logout = () => {
  Cookies.remove("jwtShopToken");
  Cookies.remove("jwtShopTokenRole");
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

    Cookies.set("jwtShopTokenRole", JSON.stringify(user!.role));

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
