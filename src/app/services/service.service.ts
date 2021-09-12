import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comments } from '../modules/placeholder';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  returnGet():Observable<Comments> {
    return this.http.get<Comments>(`${API}/comments`);
  }
}
