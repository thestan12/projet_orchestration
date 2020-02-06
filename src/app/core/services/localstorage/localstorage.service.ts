import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class LocalStorageService {
  subject = new BehaviorSubject<string>(null);

  watch(): Observable<string> {
    return this.subject;
  }

  get(key: string) {
    return localStorage.getItem(key);
  }

  set(key: string, value: string) {
    localStorage.setItem(key, value);
    this.subject.next(key);
    console.log();
  }

  remove(key: string) {
    localStorage.removeItem(key);
    this.subject.next(null);
  }
}
