import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Cookie} from 'ng2-cookies/ng2-cookies';

export interface Token {
  key: string;
}

export interface Subscription {
  id: string;
  name: string;
  coordinates: string;
  periodicity: string;
  end_date: string;
}

export interface Subscriptions {
  subscriptions: Array<Subscription>;
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  token: string;
  username: string;
  //  urlBase = 'http://localhost:8000/';
  //  urlBase = 'http://localhost:5000/api/v1/';
  urlBase = '/api/v1/';


  constructor(private http: HttpClient) {
    this.token = '';
  }

  getURLbase() {
    return this.urlBase;
  }

  getToke() {
    //return this.token;
    if ( Cookie.get('csrftoken') === null || Cookie.get('csrftoken') === undefined) {
      return  '';
    }

    return Cookie.get('csrftoken');
  }

  setToken(token) {
    this.token = token;
  }

  logout() {

    const headers = new HttpHeaders({
      'X-CSRFTOKEN': Cookie.get('csrftoken') });
    return this.http.post(this.urlBase + 'auth/logout/', {}, {headers: headers} );
  }

  getUser() {
    return this.username;
  }

  getSubscriptions() {
    const headers = new HttpHeaders({
      'X-CSRFTOKEN': Cookie.get('csrftoken'),
      'Authorization': 'Token ' + this.token
    });

    return this.http.get<Subscriptions>(this.urlBase + 'subscriptions', { headers: headers });
  }

  getSubscription(id) {
    const headers = new HttpHeaders({
      'X-CSRFTOKEN': Cookie.get('csrftoken'),
      'Authorization': 'Token ' + this.token
    });

    console.log(id);
    return this.http.get<Subscription>(this.urlBase + 'subscriptions/' + id, { headers: headers });
  }

  addSubscription(subscription) {
    console.log(Cookie.get('csrftoken'));
    console.log(this.token);

    const headers = new HttpHeaders({
      'X-CSRFTOKEN': Cookie.get('csrftoken'),
      'Authorization': 'Token ' + this.token
    });

    let params = new HttpParams();
    params = params.append('user_id', this.token);
    params = params.append('name', subscription.name);
    params = params.append('coordinates', subscription.coordinates);
    params = params.append('periodicity', subscription.periodicity);
    params = params.append('end_date', subscription.end_date);

    return this.http.post(this.urlBase + 'subscriptions/', {
        'name': subscription.name,
        'coordinates': subscription.coordinates,
        'periodicity': subscription.periodicity,
        'end_date': subscription.end_date
    },
      { params: params ,  headers: headers });
  }

  login(username, password) {

    this.username = username;

    return this.http.post<Token>(this.urlBase + 'auth/login/', { 'username': username, 'password': password });
  }

  register(username, password, email, first_name, last_name) {

    this.username = username;

    let params = new HttpParams();

    params = params.append('username', username);
    params = params.append('email', email);
    params = params.append('password1', password);
    params = params.append('password2', password);
    params = params.append('first_name', first_name);
    params = params.append('last_name', last_name);

    return this.http.get<Token>(this.urlBase + 'register/', { params: params });
  }

  getPhotos(subscriptionId) {
    console.log('photos kurwa dla '+subscriptionId);

    const headers = new HttpHeaders({
      'X-CSRFTOKEN': Cookie.get('csrftoken'),
      'Authorization': 'Token ' + this.token
    });

    return this.http.get(this.urlBase + 'subscriptions/' + subscriptionId + '/photos/', { headers: headers });
  }

}
