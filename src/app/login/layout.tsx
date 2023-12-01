import { PageWrapper } from "@/components/";
import { UserOutlined } from "@ant-design/icons";

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
