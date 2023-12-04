"use client";

import { Cart, Navbar } from "./components";

const ShopLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "88px" }}>{children}</div>
      <Cart />
    </>
  );
};
export default ShopLayout;
