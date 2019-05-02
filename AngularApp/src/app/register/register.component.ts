import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  badPasswords = false;
  badEmail = false;
  badUser = false;
  error_text = '';

  usernameErrors: Array<string>;
  emailErrors: Array<string>;
  passwordErrors: Array<string>;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  onClickSubmit(formData) {
    this.badPasswords = false;
    this.badEmail = false;
    this.badUser = false;

    if ( formData.value.password === formData.value.repassword ) {
      this.dataService.register(
        formData.value.username, formData.value.password, formData.value.email, formData.value.firstName, formData.value.lastName)
        .subscribe(
          (data) => {
        if (data.key !== undefined && data.key !== null ) {
          this.performRegister(data.key);
        }
      }, error => {
            console.log(error);
            if (error.status === 400) {

              console.log(error.error);

              if ( error.error['username'] !== undefined ) {
                this.usernameErrors = error.error['username'];
                this.badUser = true;
              }

              if ( error.error['email'] !== undefined ) {
                this.emailErrors = error.error['email'];
                this.badEmail = true;
              }

              if ( error.error['password1'] !== undefined ) {
                this.passwordErrors = error.error['password1'];
                this.badPasswords = true;
              }

            } else if (error.status === 504) {
              this.error_text = 'server is not responding';
            }
          });
    } else {
      this.passwordErrors = new Array<string>();
      this.passwordErrors.push('passwords are different');
      this.badPasswords = true;
    }
  }

  performRegister(token) {
    if (token !== '') {
      this.dataService.setToken(token);
      this.router.navigateByUrl('/subscriptions');
    }
  }
}
