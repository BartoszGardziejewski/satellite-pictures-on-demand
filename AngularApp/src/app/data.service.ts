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

  stashedSubscription: Subscription;


  constructor(private http: HttpClient) {
    this.token = '';
  }

  getURLbase() {
    return this.urlBase;
  }

  getToke() {
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

    return this.http.get<Subscription>(this.urlBase + 'subscriptions/' + id, { headers: headers });
  }

  addSubscription(subscription) {
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

  removeSubscription(id) {
    const headers = new HttpHeaders({
      'X-CSRFTOKEN': Cookie.get('csrftoken'),
      'Authorization': 'Token ' + this.token
    });
    return this.http.delete(this.urlBase + 'subscriptions/' + id + '/', {headers: headers});
  }

  login(username, password) {

    this.username = username;

    return this.http.post<Token>(this.urlBase + 'auth/login/', { 'username': username, 'password': password });
  }

  register(username, password, email, first_name, last_name) {

    this.username = username;

    return this.http.post<Token>(this.urlBase + 'auth/registration/', {
      'username': username,
      'email': email,
      'password1': password,
      'password2': password,
      'first_name': first_name,
      'last_name': last_name
    },
      {} );
  }

  changePassword(newPassword,oldPassword) {
    const headers = new HttpHeaders({
      'X-CSRFTOKEN': Cookie.get('csrftoken'),
      'Authorization': 'Token ' + this.token
    });

    return this.http.post(this.urlBase + 'auth/password/change/', {
      new_password1: newPassword,
      new_password2: newPassword
    },
      {headers: headers});
}

  getPhotos(subscriptionId) {
    const headers = new HttpHeaders({
      'X-CSRFTOKEN': Cookie.get('csrftoken'),
      'Authorization': 'Token ' + this.token
    });

    return this.http.get(this.urlBase + 'subscriptions/' + subscriptionId + '/photos/', { headers: headers });
  }

  stashSubscription(subscription) {
    this.stashedSubscription = subscription;
  }

  getSubscriptionFromStash() {
    return this.stashedSubscription;
  }

}
