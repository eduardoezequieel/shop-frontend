import { ColumnsType } from "antd/es/table";
import { IProduct } from "../interfaces";
import { Button } from "antd";
import { useProductFormStore } from "../store/useProductFormStore";

export const columns = (): ColumnsType<Partial<IProduct>> => {
  const { openModal } = useProductFormStore();
  return [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price: number) => <span>${price}</span>,
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_, { id }) => (
        <div style={{ display: "flex", gap: "10px" }}>
          <Button
            onClick={() => openModal("edit", "Edit the selected product", id)}
          >
            Edit
          </Button>
        </div>
      ),
    },
  ];
};
