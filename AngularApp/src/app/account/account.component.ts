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

  user: any;

  constructor(private router: Router, private data: DataService) { }

  ngOnInit() {
  }

  changePassword(formData) {
    if(formData.value.newpassword === formData.value.renewpassword) {
      this.data.changePassword(formData.value.newpassword, formData.value.oldpassword).subscribe(data => {
      });
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
