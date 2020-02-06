import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ConstantesService} from '../../../core/services/constantes/constantes.service';
import {Students} from '../../../core/models/students';
import {Teachers} from '../../../core/models/teachers';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient,
              private constantesService: ConstantesService) {
  }

  getStudents(): Observable<Array<Students>> {
    return <Observable<Array<Students>>>this.http.get(this.constantesService.getConstante('URL_GET_STUDENTS'));
  }

  getTeachers(): Observable<Array<Teachers>> {
    return <Observable<Array<Teachers>>>this.http.get(this.constantesService.getConstante('URL_GET_TEACHERS'));
  }
}
