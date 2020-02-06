import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LocalStorageService} from '../../services/localstorage/localstorage.service';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';
import {Users} from '../../models/users';
import {NoNamePipe} from '../../services/pipes/no-name.pipe';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() user: Users;
  @Output() changeLastname = new EventEmitter<string>();

  constructor(private localService: LocalStorageService,
              private router: Router,
              private messageService: MessageService,
              private noNamePipe: NoNamePipe) {
    this.user = {};
  }

  ngOnInit() {
    this.user.lastname = '';
    this.user.firstname = 'Admin';
    this.changeLastname.emit(this.user.lastname);
  }

  isAdmin() {
    return this.localService.get('currentUser');
  }


  logout() {
    this.localService.remove('currentUser');
    this.messageService.add({
      severity: 'success',
      summary: 'Au revoir',
      detail: 'Vous avez été déconnecté.'
    });
    this.router.navigateByUrl('/');
  }


}
