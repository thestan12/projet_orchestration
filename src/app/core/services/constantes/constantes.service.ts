import {Injectable} from '@angular/core';
import {constantes} from './constantes';
import {environment} from '../../../../environments/environment';

@Injectable()
export class ConstantesService {
  constructor() {}

  getConstante(key: string): string {
    return environment.api + constantes[key];
  }
}
