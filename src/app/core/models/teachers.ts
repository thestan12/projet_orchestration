import {Users} from './users';
import {Teachersmetadatas} from './teachersmetadatas';

export interface Teachers extends Users {
  job: string;
  phone: string;
  birthday: string;
  metadatas: Teachersmetadatas;
}
