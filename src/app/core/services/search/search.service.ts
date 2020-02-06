import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ConstantesService} from '../constantes/constantes.service';
import {Students} from '../../models/students';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient,
              private constantesService: ConstantesService) { }

  searchUser(user: String, category: String, tags: String): Promise<Students> {
    return new Promise(resolve => {

      this.http.get(this.constantesService.getConstante('URL_GET_STUDENTS'))

        .subscribe(students => {

          for(const student of <Array<Students>>students) {
            if(student.firstname === user) {
              resolve(student);
            }
          }

        });

    });
  }
}
