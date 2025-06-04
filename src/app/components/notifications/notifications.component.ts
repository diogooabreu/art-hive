import { Component, OnInit, OnDestroy } from '@angular/core';
import { Notification } from '../../Model/notification';
import { NotificationsService } from '../../services/notifications-service.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'notifications',
  imports: [
    CommonModule
  ],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})

export class NotificationsComponent implements OnInit, OnDestroy {
  notifications: Notification[] = [];
  private subscription!: Subscription;

  constructor(private notificationService: NotificationsService) { }

  ngOnInit() {
    this.notificationService.notification$.subscribe((notification) => {
      this.notifications.push(notification);

      setTimeout(() => this.remove(notification), 2000);
    });
  }

  remove(notification: Notification) {
    this.notifications = this.notifications.filter((n) => n !== notification);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
