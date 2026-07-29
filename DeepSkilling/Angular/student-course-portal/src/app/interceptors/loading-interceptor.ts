import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { LoadingService } from '../services/loading';

// Hands-On 8, Task 3: shows/hides a global spinner for every HTTP call.
// finalize() runs whether the Observable completes or errors - like try/finally.
export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);
  
  // Defer the show() call to avoid ExpressionChangedAfterItHasBeenCheckedError
  setTimeout(() => loadingService.show(), 0);

  return next(req).pipe(
    finalize(() => {
      // Defer the hide() call as well
      setTimeout(() => loadingService.hide(), 0);
    })
  );
};
