import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  badParameters = false;
  error_text: string;

  constructor(private data: DataService, private router: Router) { }

  ngOnInit() {
  }

  onClickSubmit(loginData) {
    this.badParameters = false;

    const username = loginData.value.username;
    const password = loginData.value.password;

    this.data.login(username, password).subscribe(data => {
      this.performLogin(data.key);
    }, error => {
      if ( error.status === 400 ) {
        this.badParameters = true;
        this.error_text = 'bad username or password';
      } else if ( error.status === 504 ) {
        this.badParameters = true;
        this.error_text = 'server is not responding';
      }
    });
  }

  performLogin(token) {
    if (token !== '') {
      this.data.setToken(token);
      this.router.navigateByUrl('/subscriptions');
    }
  }

  cleanError() {
    this.badParameters = false;
  }

}
