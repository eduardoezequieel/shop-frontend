import { PageWrapper } from "@/components";
import { UserAddOutlined } from "@ant-design/icons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register | Shop",
  description: "Create a new account",
};

const RegisterLayout = ({ children }: { children: React.ReactNode }) => (
  <PageWrapper
    icon={
      <UserAddOutlined
        style={{
          fontSize: "24px",
          color: "#4998ff",
        }}
      />
    }
    width="400px"
  >
    {children}
  </PageWrapper>
);
export default RegisterLayout;
