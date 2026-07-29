import { TestBed } from '@angular/core/testing';

import { LoadingService } from './loading';

describe('LoadingService', () => {
  let service: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should toggle isLoading$ via show/hide', (done) => {
    const values: boolean[] = [];
    service.isLoading$.subscribe((v) => values.push(v));
    service.show();
    service.hide();
    expect(values).toEqual([false, true, false]);
    done();
  });
});
