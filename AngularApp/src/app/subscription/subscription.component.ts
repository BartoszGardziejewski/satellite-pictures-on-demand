import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService, Subscription} from '../data.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

  subscription: Subscription;
  photos: any;

  constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => this.setSubscription(params.get('id')));
  }

  setSubscription(id) {
    console.log(id);
    this.dataService.getSubscription(id).subscribe(data => {
      console.log( JSON.stringify(data) );
      this.subscription = data;

      this.dataService.getPhotos(this.subscription.id).subscribe(photos => {
        console.log( JSON.stringify(photos) );
        this.photos = photos;
      });

    });
  }

  backToSubscription() {
    this.router.navigate(['/subscriptions']);
  }

}
