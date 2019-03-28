import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private data: DataService,private router: Router) { }

  ngOnInit() {
  }

  onClickSubmit(loginData) {
    const username = loginData.value.username;
    const password = loginData.value.password;
    this.data.setToken(username + password);
    this.router.navigateByUrl('/subscriptions');
  }

}
