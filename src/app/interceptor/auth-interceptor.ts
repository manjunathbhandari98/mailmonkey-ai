import { HttpErrorResponse, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { BehaviorSubject, catchError, filter, switchMap, take, throwError } from 'rxjs';
import { AuthService } from '../services/auth-service/auth';

let isRefreshing = false;
const refreshTokenSubject = new BehaviorSubject<string | null>(null);

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {

  const authService = inject(AuthService);
  const accessToken = authService.getAccessToken();

  let authReq = req;

  // Attach access token to all outgoing requests
  if (accessToken) {
    authReq = req.clone({
      setHeaders: { Authorization: `Bearer ${accessToken}` }
    });
  }

  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {

      // If accessToken expired → try refresh
      if (error.status === 401) {
        return handle401Error(authReq, next, authService);
      }

      return throwError(() => error);
    })
  );
};
// Handle 401 errors by refreshing the token
function handle401Error(
  req: HttpRequest<any>,
  next: HttpHandlerFn,
  authService: AuthService
) {

  if (!isRefreshing) {
    isRefreshing = true;
    refreshTokenSubject.next(null);

    return authService.refreshToken().pipe(
      switchMap(res => {
        isRefreshing = false;
        refreshTokenSubject.next(res.accessToken);

        return next(
          req.clone({
            setHeaders: { Authorization: `Bearer ${res.accessToken}` }
          })
        );
      }),
      catchError(err => {
        isRefreshing = false;
        authService.logout();
        return throwError(() => err);
      })
    );
  }

  // If refresh is already happening → wait for new token
  return refreshTokenSubject.pipe(
    filter(token => token !== null),
    take(1),
    switchMap(token =>
      next(
        req.clone({
          setHeaders: { Authorization: `Bearer ${token}` }
        })
      )
    )
  );
}
