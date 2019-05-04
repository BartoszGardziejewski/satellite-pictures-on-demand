import { Component, OnInit } from '@angular/core';
import {DataService, Subscription} from '../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-subscription',
  templateUrl: './add-subscription.component.html',
  styleUrls: ['./add-subscription.component.scss']
})
export class AddSubscriptionComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  onClickSubmit(formData) {
    const subscription: Subscription = {
      id: null,
      name:  formData.value.name,
      coordinates: formData.value.coordinates,
      periodicity: formData.value.periodicity,
      end_date: formData.value.end_date
    };

    this.dataService.addSubscription(subscription).subscribe(
      data => {
          this.router.navigateByUrl('/subscriptions');
        },
        error => {
        });
  }

  backToSubscription() {
    this.router.navigate(['/subscriptions']);
  }
}
