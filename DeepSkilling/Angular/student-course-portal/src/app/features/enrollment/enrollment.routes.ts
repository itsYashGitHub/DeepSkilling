import { Routes } from '@angular/router';
import { EnrollmentForm } from '../../pages/enrollment-form/enrollment-form';
import { ReactiveEnrollmentForm } from '../../pages/reactive-enrollment-form/reactive-enrollment-form';
import { unsavedChangesGuard } from '../../guards/unsaved-changes-guard';

// Hands-On 7, Task 2: lazy-loaded route group for the enrollment feature.
// Angular's standalone `loadChildren` accepts an array of Routes directly (no NgModule needed),
// but the exercise's original NgModule-based lazy-loading pattern is documented in app.routes.ts.
export const ENROLLMENT_ROUTES: Routes = [
  { path: '', component: EnrollmentForm },
  { path: 'reactive', component: ReactiveEnrollmentForm, canDeactivate: [unsavedChangesGuard] },
];
