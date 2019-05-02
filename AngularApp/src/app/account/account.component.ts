import { Component, OnInit } from '@angular/core';
import {Cookie} from 'ng2-cookies/ng2-cookies';
import {Router} from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  badPasswords = false;
  actionComplete = false;
  error_text: string;
  info_text: string;
  user: any;

  passwordErrors: Array<string>;

  constructor(private router: Router, private data: DataService) { }

  ngOnInit() {
  }

  changePassword(formData) {
    this.badPasswords = false;
    if (formData.value.newpassword === formData.value.renewpassword) {

      this.data.changePassword(formData.value.newpassword, formData.value.oldpassword).subscribe(
        data => {
        this.actionComplete = true;
        this.info_text = 'password changed';
      },
          error => {

            if ( error.status === 400 ) {

              if (error.error['new_password2'] !== undefined) {
                this.passwordErrors = error.error['new_password2'];
              }
              this.badPasswords = true;

            } else if ( error.status === 504 ) {
              this.error_text = 'server is not responding';
              this.badPasswords = true;
            }
      });

    } else {
      this.error_text = 'passwords are different';
      this.badPasswords = true;
    }

  }

  logout = () => {
    this.data.logout().subscribe( (data) => {
      Cookie.delete('csrftoken');
      this.data.setToken('');
    });
    this.router.navigateByUrl('/');
  }

}
