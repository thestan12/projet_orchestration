import { Component } from '@angular/core';
import {Users} from './core/models/users';
import {LocalStorageService} from './core/services/localstorage/localstorage.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'correction';
  user: Users;

  constructor(private local: LocalStorageService, translate: TranslateService) {
    translate.setDefaultLang('fr');
    translate.use('fr');
    this.user = {
      email: 'test@test.test',
      firstname: 'Admin',
      gender: 'M',
      id: 1,
      lastname: ''
    };
    this.local.set('footerString', 'Copyright @ESGICI');
    this.local.watch().subscribe(observer => {
      console.log(observer);
    });
  }

  displayNewLastname(event) {
    console.log('Nouveau nom: ' + event);
  }
}

/*
<span class="welcome-message"> {{'Home.HELLO' | translate}} {{user.firstname}} {{user.lastname}}</span>

 */
