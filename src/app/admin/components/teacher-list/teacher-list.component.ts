import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../services/users/users.service';
import {Users} from '../../../core/models/users';
import {Teachers} from '../../../core/models/teachers';

@Component({
  selector: 'app-admin-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})

export class TeacherListComponent implements OnInit {
  teachers: Teachers[];

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.usersService.getTeachers().subscribe(data => {
      this.teachers = data;
    });
  }

  getFormattedName(user: Users) {
    return `${user.firstname} ${user.lastname}`;
  }

  getImageForGender(user: Users) {
    if (user.gender === 'F') {
      return '../../../../assets/icones/female.png';
    }
    return '../../../../assets/icones/male.png';
  }
}
