import { IProduct } from "@/app/dashboard/products/interfaces";
import { IUser } from "@/interfaces";

export interface ICart {
  id: number;
  client: IUser;
  products: IProduct[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
