import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../data.service';
import {Cookie} from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private data: DataService) { }

  ngOnInit() {
  }

  logout = () => {
    this.data.logout().subscribe( (data) => {
      Cookie.delete('csrftoken');
      this.data.setToken('');
    });
    this.router.navigateByUrl('/');
  }

}
