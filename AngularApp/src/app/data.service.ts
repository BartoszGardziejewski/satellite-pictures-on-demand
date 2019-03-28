import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  token: string;

  constructor(private http: HttpClient) {
    this.token = '';
  }

  getToke() {
    return this.token;
  }
  setToken(token) {
    this.token = token;
  }

  getSubscriptions() {
    return this.http.get('http://localhost:5000/subscriptions');
  }
}
