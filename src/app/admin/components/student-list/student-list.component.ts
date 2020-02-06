import {Component, OnInit} from '@angular/core';
import {Students} from '../../../core/models/students';
import {UsersService} from '../../services/users/users.service';
import {Users} from '../../../core/models/users';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})

export class StudentListComponent implements OnInit {
  students: Students[];

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.usersService.getStudents().subscribe(data => {
      this.students = data;
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
