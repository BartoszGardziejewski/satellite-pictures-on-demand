import { Component, OnInit } from '@angular/core';
import {DataService, Subscription} from '../data.service';
import {Router} from '@angular/router';
import {Cookie} from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {

  subscriptions: Object;
  subscriptionsJSON: string;

  constructor(private router: Router, private data: DataService) { }

  ngOnInit() {
    if (!this.data.isTokenValid()) {
      this.router.navigateByUrl('/');
    } else {
      this.data.getSubscriptions().subscribe(data => {
        console.log( JSON.stringify(data) );
        this.subscriptions = data ;
        this.subscriptionsJSON = JSON.stringify(data);
      });
    }
  }

  addSubscription() {
    this.router.navigateByUrl('/addSubscription');
  }

}
