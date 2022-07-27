import React, { useState, useEffect } from "react";

import NotificationsManager from "./NotificationsManager";
import { INotification } from "./interfaces";
import Notification from "./Notification";
import { Container } from "./style";
import { useConstructor, useForceUpdate } from "./hooks";

interface INotificationsWrapper {
  className?: string;
}

const ToastsWrapper = (props: INotificationsWrapper) => {
  const { className } = props;
  const [notifications, setNotifications] = useState<INotification[]>([]);
  const forceUpdate = useForceUpdate();

  const handleStoreChange = (notificationsInsideCallback: INotification[]) => {
    setNotifications(notificationsInsideCallback);
    forceUpdate();
  };

  const handleRequestHide = (notificationsInsideCallback: INotification) => () => {
    NotificationsManager.remove(notificationsInsideCallback);
    forceUpdate();
  };

  useConstructor(() => {
    NotificationsManager.addEvtListener(handleStoreChange);
  });

  useEffect(() => {
    return function cleanUp() {
      NotificationsManager.removeEvtListener(handleStoreChange);
    };
  });

  return (
    <Container data-element="notificationsWrapper" className={className}>
      {notifications.map((notification) => {
        return (
          <Notification
            key={notification.id}
            type={notification.type}
            message={notification.message}
            onRequestHide={handleRequestHide(notification)}
            lifetime={notification.lifetime}
            isInfinite={notification.isInfinite}
            btn1={notification.btn1}
            btn2={notification.btn2}
            className={notification.className}
            emojiIcon={notification.emojiIcon || "☝️"}
            title={notification.title}
            isCloseClickInside={notification.isCloseClickInside}
          />
        );
      })}
    </Container>
  );
};

export default ToastsWrapper;
