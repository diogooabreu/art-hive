import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { NotificationsComponent } from './components/notifications/notifications.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NotificationsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'art-hive';

  ngOnInit(): void {
    initFlowbite();
  }
}
