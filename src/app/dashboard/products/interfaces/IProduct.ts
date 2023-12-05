import { Image } from "@/interfaces";

export interface IProduct {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  description: string;
  price: number;
  image: Image | File;
}
