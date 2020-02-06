import {Component} from '@angular/core';
import {Students} from '../../../core/models/students';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent {
  students: Students[];

  constructor() {
  }
}
