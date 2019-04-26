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
    if (this.data.getToke() === '') {
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

    const subscription: Subscription = {
      id: null,
      name: 'testSubscription',
      coordinates: '40,22 : 80,34',
      periodicity: '10',
      end_date: '2020-05-22'
    };

    this.data.addSubscription(subscription).subscribe( data => {
      console.log(data);
    });
  }

}
