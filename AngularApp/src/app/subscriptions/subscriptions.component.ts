import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Router} from '@angular/router';

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
    if(this.data.getToke() === ''){
      this.router.navigateByUrl('/');
    }

    this.data.getSubscriptions().subscribe(data => {
      this.subscriptions = data.subscriptions;
      this.subscriptionsJSON = JSON.stringify(data);
    });
  }

}
