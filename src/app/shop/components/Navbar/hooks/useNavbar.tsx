import { useShopStore } from "@/app/shop/store";
import { useAuthStore } from "@/store";
import { MenuProps } from "antd";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export const useNavbar = () => {
  const { toggleCart } = useShopStore();
  const { user, getLoggedUser, isLoading, logout } = useAuthStore();
  const { push } = useRouter();
  const { id } = useParams();

  useEffect(() => {
    getLoggedUser();
  }, []);

  const items: MenuProps["items"] = [
    {
      label: <span>My orders</span>,
      key: "0",
      onClick: () => push("/shop/orders"),
    },
    {
      label: <span>Log out</span>,
      key: "1",
      onClick: () => logout(),
    },
  ];

  return {
    toggleCart,
    user,
    isLoading,
    push,
    id,
    items,
  };
};
