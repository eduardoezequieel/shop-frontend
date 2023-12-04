import { getAxiosInstance } from "@/constants";
import { HttpResponse, StrapiResponse } from "@/interfaces";
import { IProduct } from "../interfaces";
import { AxiosError } from "axios";

const http = getAxiosInstance();

export const getProducts = async (): Promise<
  HttpResponse<StrapiResponse<IProduct[]>>
> => {
  try {
    const {
      data: { data, meta },
    } = await http.get<StrapiResponse<IProduct[]>>(
      "api/products?populate=image"
    );

    return {
      ok: true,
      data: {
        data,
        meta,
      },
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
