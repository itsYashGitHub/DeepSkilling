import { CanDeactivateFn } from '@angular/router';

// Hands-On 7, Task 2: any component using this guard must expose a `hasUnsavedChanges()` method.
export interface CanComponentDeactivate {
  hasUnsavedChanges: () => boolean;
}

export const unsavedChangesGuard: CanDeactivateFn<CanComponentDeactivate> = (component) => {
  if (component.hasUnsavedChanges()) {
    return window.confirm('You have unsaved changes. Leave?');
  }
  return true;
};
