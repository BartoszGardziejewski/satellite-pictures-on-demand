import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-subsciption-thumbnail',
  templateUrl: './subsciption-thumbnail.component.html',
  styleUrls: ['./subsciption-thumbnail.component.scss']
})
export class SubsciptionThumbnailComponent implements OnInit {

  @Input() subscription: Object;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  moveToSubscription() {
    this.router.navigate(['/subscription', this.subscription.id]);
  }
}
