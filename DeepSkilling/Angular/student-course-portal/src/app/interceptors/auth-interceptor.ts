import { HttpInterceptorFn } from '@angular/common/http';

// Hands-On 8, Task 3: clones the outgoing request and adds a mock Authorization header.
// Interceptors run in registration order for the request; responses travel back in reverse order.
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authReq = req.clone({
    setHeaders: { Authorization: 'Bearer mock-token-12345' },
  });
  return next(authReq);
};
