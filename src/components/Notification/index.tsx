"use client";

import { useEffect } from "react";
import { notification } from "antd";
import { INotification } from "@/interfaces";
import styles from "./notification.module.scss";

type Params = {
  existsNotification: boolean;
  notificationBody: INotification;
};

export const Notification = ({
  existsNotification,
  notificationBody,
}: Params) => {
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = ({
    type,
    message,
    description,
  }: INotification) => {
    api[type]({
      message,
      description,
      className: styles.notification,
    });
  };

  useEffect(() => {
    if (existsNotification) {
      openNotificationWithIcon(notificationBody!);
    }
  }, [existsNotification]);

  return <div>{contextHolder}</div>;
};
