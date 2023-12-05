import { getAxiosInstance } from "@/constants";
import { HttpResponse, StrapiResponse } from "@/interfaces";
import { ICart } from "../interfaces";
import { AxiosError } from "axios";

const http = getAxiosInstance();

export const saveOrder = async (
  userId: number,
  cart: number[]
): Promise<HttpResponse<ICart>> => {
  try {
    console.log(userId, cart);
    const { data } = await http.post<StrapiResponse<ICart>>("api/carts", {
      data: { client: userId, products: cart },
    });

    return {
      ok: true,
      data: data.data,
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

export const getOrdersByUser = async (
  userId: number
): Promise<HttpResponse<ICart[]>> => {
  try {
    const { data } = await http.get<StrapiResponse<ICart[]>>(
      `api/carts?filters[client][id][$eq]=${userId}&populate[products][populate]=image`
    );

    return {
      ok: true,
      data: data.data,
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
