import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  token: string;
  username: string;

  constructor(private http: HttpClient) {
    this.token = '';
  }

  getToke() {
    return this.token;
  }

  setToken(token) {
    this.token = token;
  }

  logout() {
    let params = new HttpParams();
    params = params.append('token', this.token);

    return this.http.get('http://localhost:5000/logout/', { params: params });
  }

  getUser() {
    return this.username;
  }

  getSubscriptions() {
    let params = new HttpParams();
    params = params.append('token', this.token);

    return this.http.get('http://localhost:5000/subscriptions', { params: params });
  }

  getSubscription(id) {
    let params = new HttpParams();
    params = params.append('token', this.token);

    return this.http.get('http://localhost:5000/subscription/' + id, { params: params });
  }

  login(username, password) {

    this.username = username;

    let params = new HttpParams();
    params = params.append('user', username);
    params = params.append('password', password);

    return this.http.get('http://localhost:5000/login/', { params: params });
  }

  register(username, password) {

    this.username = username;

    let params = new HttpParams();
    params = params.append('user', username);
    params = params.append('password', password);

    return this.http.get('http://localhost:5000/register/', { params: params });
  }

}
