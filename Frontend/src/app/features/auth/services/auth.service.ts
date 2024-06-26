import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { LoginResponse } from '../models/login-response.model';
import { LoginRequest } from '../models/login-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(request: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${environment.backendUrl}/api/Auth/login`, {
      email: request.email,
      password: request.password
    })
  }
}
