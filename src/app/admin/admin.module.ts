import {NgModule} from '@angular/core';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminHomeComponent} from './components/admin-home/admin-home.component';
import {UsersService} from './services/users/users.service';
import {ConstantesService} from '../core/services/constantes/constantes.service';
import {HttpClientModule} from '@angular/common/http';
import {CardModule} from 'primeng/card';
import {CommonModule} from '@angular/common';
import {LocalStorageService} from '../core/services/localstorage/localstorage.service';
import {MessageService} from 'primeng/api';
import {StudentListComponent} from './components/student-list/student-list.component';
import {TeacherListComponent} from './components/teacher-list/teacher-list.component';
import {ButtonModule} from 'primeng/button';
import {AvatarDirective} from './shared/directives/avatar.directive';

@NgModule({
  declarations: [
    AdminHomeComponent,
    TeacherListComponent,
    StudentListComponent,
    AvatarDirective
  ],
  imports: [
    ButtonModule,
    CommonModule,
    CardModule,
    AdminRoutingModule,
    HttpClientModule
  ],
  exports: [
    AvatarDirective
  ],
  providers: [
    UsersService,
    ConstantesService,
    LocalStorageService,
    MessageService,
    AvatarDirective
  ]
})

export class AdminModule {}
