import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AdminHomeComponent} from './components/admin-home/admin-home.component';
import {AuthGuard} from './guards/auth/auth.guard';
import {StudentListComponent} from './components/student-list/student-list.component';
import {TeacherListComponent} from './components/teacher-list/teacher-list.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminHomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: '/admin/students',
        pathMatch: 'full'
      },
      {
        path: 'teachers',
        component: TeacherListComponent
      },
      {
        path: 'students',
        component: StudentListComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {
  constructor() {}
}
