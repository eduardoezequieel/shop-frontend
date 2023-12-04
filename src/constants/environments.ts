import Cookies from "js-cookie";

export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
export const { JWT_SECRET } = process.env;
export const JWT_TOKEN = Cookies.get("jwtShopToken")!;
