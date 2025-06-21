import { Injectable } from '@angular/core';
import { Notification } from '../Model/notification';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NotificationsService {
  private notificationsSubject = new Subject<Notification>();
  public notification$ = this.notificationsSubject.asObservable();

  notify(notification: Notification) {
    this.notificationsSubject.next(notification);
  }

  succes(message: string, title?: string, details?: string) {
    this.notify({ title, message, details, type: 'success' });
  }

  error(message: string, title?: string, details?: string) {
    this.notify({ title, message, details, type: 'error' });
  }

  info(message: string, title?: string, details?: string) {
    this.notify({ title, message, details, type: 'info' });
  }
}
