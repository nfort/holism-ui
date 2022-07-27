import { EventEmitter } from "events";

import { INotification } from "./interfaces";

const CHANGE_EVENT = "change";

class NotificationsManager extends EventEmitter {
  listNotify: INotification[] = [];

  create(notification: INotification): void {
    const index = this.listNotify.findIndex((item: INotification) => notification.id === item.id);

    if (index === -1) {
      this.listNotify.push({ id: new Date().getTime().toString(), ...notification });
      this.emitChange();
    }
  }

  remove(notification: INotification): void {
    this.listNotify = this.listNotify.filter((item) => notification.id !== item.id);
    this.emitChange();
  }

  emitChange() {
    this.emit(CHANGE_EVENT, this.listNotify);
    return this.listNotify;
  }

  addEvtListener(callback: (notifications: INotification[]) => void) {
    this.addListener(CHANGE_EVENT, callback);
  }

  removeEvtListener(callback: (notifications: INotification[]) => void) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

export default new NotificationsManager();
