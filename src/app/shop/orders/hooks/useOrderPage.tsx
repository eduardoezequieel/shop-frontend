import { useAuthStore } from "@/store";
import { CollapseProps } from "antd";
import { useEffect, useState } from "react";
import { useShopStore } from "../../store";
import { CartItem } from "../../components";

export const useOrderPage = () => {
  const { getOrdersByUser, orders } = useShopStore();
  const { getLoggedUser } = useAuthStore();
  useEffect(() => {
    getLoggedUser().then(() => getOrdersByUser());
  }, []);
  const [items, setItems] = useState<CollapseProps["items"]>([]);

  useEffect(() => {
    setItems(
      orders.map((order) => ({
        key: order.id,
        label: `Order #${order.id}`,
        children: (
          <div>
            <p>
              <strong>Order date: </strong>
              {new Date(order.createdAt).toLocaleDateString()}
            </p>
            <p>
              <strong>Products: </strong>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {order.products.map((product) => (
                  <CartItem key={product.id} {...product} />
                ))}
              </div>
            </p>
          </div>
        ),
      }))
    );
  }, [orders]);

  return {
    items,
  };
};
