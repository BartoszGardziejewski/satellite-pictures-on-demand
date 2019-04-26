import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  onClickSubmit = (formData) => {
    if ( formData.value.password === formData.value.repassword ) {
      this.dataService.register(
        formData.value.username, formData.value.password, formData.value.email, formData.value.firstName, formData.value.lastName)
        .subscribe((data) => {
        if (data.key !== undefined && data.key !== null ) {
          this.performRegister(data.key);
        }
      });
    }
  }

  performRegister(token) {
    if (token !== '') {
      this.dataService.setToken(token);
      this.router.navigateByUrl('/subscriptions');
    }
  }

}
