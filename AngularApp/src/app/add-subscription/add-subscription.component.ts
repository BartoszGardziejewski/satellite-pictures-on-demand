import { Component, OnInit } from '@angular/core';
import {DataService, Subscription} from '../data.service';
import {Router} from '@angular/router';
import {MapService} from '../map.service';

@Component({
  selector: 'app-add-subscription',
  templateUrl: './add-subscription.component.html',
  styleUrls: ['./add-subscription.component.scss']
})
export class AddSubscriptionComponent implements OnInit {

  mapOpen = false;
  serviceCoordinates = '';
  coordinates = {'lng': 0, 'lat': 0};
  subscriptionName:  string;
  subscriptionEndDate:  string;
  subscriptionPeriodicity:  string;


  constructor(private dataService: DataService, private router: Router, private  mapService: MapService) { }

  ngOnInit() {
    const subscription = this.dataService.getSubscriptionFromStash();
    if ( subscription != null ) {
      this.subscriptionName = subscription.name;
      this.subscriptionEndDate = subscription.end_date;
      this.subscriptionPeriodicity = subscription.periodicity;
    }

    const marker = this.mapService.getMarker();
    this.coordinates.lat = marker.lat;
    this.coordinates.lng = marker.lng;
    this.serviceCoordinates = marker.lat.toPrecision(4) + ' ; ' + marker.lng.toPrecision(4) ;
  }

  onClickSubmit(formData) {

    const subscription: Subscription = {
      id: null,
      name:  formData.value.name,
      coordinates: this.coordinates.lat.toFixed(0) + ';' + this.coordinates.lng.toFixed(0),
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

  openMap() {
    this.dataService.stashSubscription({
      id: null,
      name: this.subscriptionName,
      coordinates: null,
      periodicity: this.subscriptionPeriodicity,
      end_date: this.subscriptionEndDate,
    });
    this.router.navigate(['/map']);
  }
}
