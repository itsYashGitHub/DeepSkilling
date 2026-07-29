import { Injectable } from '@angular/core';

// Hands-On 6, Task 2: this service is provided at COMPONENT level (see NotificationComponent),
// not root - so each component that lists it in `providers` gets its own separate instance,
// scoped to that component and its children. Useful for isolated per-instance state.
@Injectable()
export class NotificationService {
  private messages: string[] = [];

  push(message: string): void {
    this.messages.push(message);
  }

  getAll(): string[] {
    return this.messages;
  }

  clear(): void {
    this.messages = [];
  }
}
