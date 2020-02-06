import {Injectable} from '@angular/core';
import {Users} from '../../models/users';
import {LocalStorageService} from '../localstorage/localstorage.service';
import {Observable} from 'rxjs';

@Injectable()
export class AuthService {
  currentUser: Users;

  constructor(private localService: LocalStorageService) {

  }

  isUserAuthenticated(username: string, password: string): Observable<boolean> {
    let isLoggedIn = false;
    if (username === 'admin' && password === 'admin') {
      this.currentUser = {
        id: 1,
        lastname : 'admin',
        firstname: 'admin',
        gender: 'M',
        email: 'admin.admin@admin.admin'
      };
      this.localService.set('currentUser', this.currentUser.toString());
      isLoggedIn = true;
    } else {
       this.localService.remove('currentUser');
    }
    return new Observable((observer) => {
      observer.next(isLoggedIn);
    });
  }
}
