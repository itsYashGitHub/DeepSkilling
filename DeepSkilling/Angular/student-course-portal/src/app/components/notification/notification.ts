import { Component } from '@angular/core';
import { NotificationService } from '../../services/notification';

// Hands-On 6, Task 2: providing NotificationService HERE (component-level) creates a
// new instance scoped to this component and its children, separate from any other
// instance of NotificationService elsewhere in the app - unlike a root-provided service.
@Component({
  selector: 'app-notification',
  imports: [],
  templateUrl: './notification.html',
  styleUrl: './notification.css',
  providers: [NotificationService],
})
export class Notification {
  constructor(private notificationService: NotificationService) {}

  get messages(): string[] {
    return this.notificationService.getAll();
  }

  addSample(): void {
    this.notificationService.push('You have a new notification.');
  }
}
