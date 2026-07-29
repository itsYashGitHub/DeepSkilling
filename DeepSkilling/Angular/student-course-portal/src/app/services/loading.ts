import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Hands-On 8, Task 3: backs the LoadingInterceptor + a global spinner bound via async pipe.
@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private readonly loadingSubject = new BehaviorSubject<boolean>(false);
  readonly isLoading$ = this.loadingSubject.asObservable();

  show(): void {
    this.loadingSubject.next(true);
  }

  hide(): void {
    this.loadingSubject.next(false);
  }
}
