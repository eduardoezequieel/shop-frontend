"use client";

import { ConfigProvider } from "antd";
import { Inter } from "next/font/google";
import "./globals.scss";
import "animate.css";
import { designToken } from "@/utils";
import { Notification } from "@/components";
import { useNotificationStore } from "@/store";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { existsNotification, notificationBody } = useNotificationStore();

  return (
    <html lang="en" className={inter.className}>
      <body>
        <ConfigProvider
          theme={{
            token: {
              ...designToken,
            },
          }}
        >
          <Notification
            existsNotification={existsNotification}
            notificationBody={notificationBody!}
          />
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}
