import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private data: DataService, private router: Router) { }

  ngOnInit() {
  }

  onClickSubmit(loginData) {
    const username = loginData.value.username;
    const password = loginData.value.password;

    this.data.login(username, password).subscribe(data => {
      this.performLogin(data.key);
    });
  }

  performLogin(token) {
    if (token !== '') {
      this.data.setToken(token);
      this.router.navigateByUrl('/subscriptions');
    }
  }
}
