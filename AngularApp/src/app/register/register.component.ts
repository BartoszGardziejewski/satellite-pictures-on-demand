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
    console.log(formData.value.username);
    if ( formData.value.password === formData.value.repassword ) {
      this.dataService.register(formData.value.username, formData.value.password).subscribe((data) => {
        if (data.token !== undefined && data.token !== null ) {
          this.performRegister(data.token);
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
