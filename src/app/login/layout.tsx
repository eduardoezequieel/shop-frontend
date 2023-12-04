import type { Metadata } from "next";
import { PageWrapper } from "@/components/";
import { UserOutlined } from "@ant-design/icons";

export const metadata: Metadata = {
  title: "Log in | Shop",
  description: "Log in to your account",
};

const LoginLayout = ({ children }: { children: React.ReactNode }) => (
  <PageWrapper
    icon={
      <UserOutlined
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
export default LoginLayout;
