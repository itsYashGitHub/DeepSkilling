import { Injectable } from '@angular/core';

// Hands-On 7: backs the AuthGuard. isLoggedIn is hardcoded for the exercise;
// in a real app this would track a token / session.
@Injectable({
  providedIn: 'root'
})
export class Auth {
  isLoggedIn = true;
}
