import { ColumnsType } from "antd/es/table";
import { IProduct } from "../interfaces";
import { Button } from "antd";

export const columns: ColumnsType<Partial<IProduct>> = [
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
        <Button onClick={() => console.log(id)}>Edit</Button>
        <Button>Delete</Button>
      </div>
    ),
  },
];
