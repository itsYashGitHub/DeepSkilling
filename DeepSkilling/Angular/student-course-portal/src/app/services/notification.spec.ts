import { TestBed } from '@angular/core/testing';

import { NotificationService } from './notification';

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [NotificationService] });
    service = TestBed.inject(NotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should push and return messages', () => {
    service.push('Hello');
    expect(service.getAll()).toEqual(['Hello']);
  });

  it('should clear messages', () => {
    service.push('Hello');
    service.clear();
    expect(service.getAll()).toEqual([]);
  });
});
