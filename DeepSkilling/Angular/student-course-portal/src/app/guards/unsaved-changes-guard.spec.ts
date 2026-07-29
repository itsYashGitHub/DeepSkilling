import { TestBed } from '@angular/core/testing';

import { CanComponentDeactivate, unsavedChangesGuard } from './unsaved-changes-guard';

describe('unsavedChangesGuard', () => {
  const executeGuard = (component: CanComponentDeactivate) =>
    TestBed.runInInjectionContext(() =>
      unsavedChangesGuard(component, {} as any, {} as any, {} as any)
    );

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });

  it('should allow navigation when there are no unsaved changes', () => {
    const component: CanComponentDeactivate = { hasUnsavedChanges: () => false };
    expect(executeGuard(component)).toBeTrue();
  });

  it('should prompt and respect the confirm result when there are unsaved changes', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    const component: CanComponentDeactivate = { hasUnsavedChanges: () => true };
    expect(executeGuard(component)).toBeTrue();
    expect(window.confirm).toHaveBeenCalled();
  });
});
