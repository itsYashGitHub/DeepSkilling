import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

// Hands-On 8, Task 3: global error handling - redirects on 401, logs on 500,
// then re-throws so the calling code can still react locally if needed.
export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    catchError((error) => {
      if (error.status === 401) {
        router.navigate(['/login']);
      } else if (error.status === 500) {
        console.error('Server error - showing a global notification.');
      }
      return throwError(() => error);
    })
  );
};
