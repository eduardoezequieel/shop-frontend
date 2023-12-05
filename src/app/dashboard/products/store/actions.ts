import { getAxiosInstance } from "@/constants";
import { HttpResponse, StrapiResponse } from "@/interfaces";
import { IProduct } from "../interfaces";
import { AxiosError } from "axios";

const http = getAxiosInstance();

export const getProduct = async (
  id: number
): Promise<HttpResponse<IProduct>> => {
  try {
    const {
      data: { data },
    } = await http.get<StrapiResponse<IProduct>>(
      `api/products/${id}?populate=image`
    );

    return {
      ok: true,
      data: data,
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

export const createProduct = async (
  { name, price, description }: Partial<IProduct>,
  imageId: number
): Promise<HttpResponse<IProduct>> => {
  try {
    const {
      data: { data: product },
    } = await http.post<StrapiResponse<IProduct>>("api/products", {
      data: {
        name,
        price,
        description,
        image: imageId,
      },
    });

    return {
      ok: true,
      data: product,
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

export const editProduct = async (
  { name, price, description }: Partial<IProduct>,
  id: number,
  imageId?: number
): Promise<HttpResponse<IProduct>> => {
  try {
    const {
      data: { data: product },
    } = await http.put<StrapiResponse<IProduct>>(`api/products/${id}`, {
      data: {
        name,
        price,
        description,
        ...(imageId && { image: imageId }),
      },
    });

    return {
      ok: true,
      data: product,
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
