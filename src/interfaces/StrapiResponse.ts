import { Pagination } from "./Pagination";

export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination: Pagination;
  };
}
