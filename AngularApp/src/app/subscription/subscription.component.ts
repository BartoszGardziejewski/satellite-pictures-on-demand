import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

  subscription: Object;
  photoSource: string;

  constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.photoSource = 'http://localhost:5000/photo/';
    this.route.paramMap.subscribe(params => this.setSubscription(params.get('id')));
  }

  setSubscription(id) {
    this.dataService.getSubscription(id).subscribe(data => {
      this.subscription = data.subscription;
    });
  }

  backToSubscription() {
    this.router.navigate(['/subscriptions']);
  }

}
