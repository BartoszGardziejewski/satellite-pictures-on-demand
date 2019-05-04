import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  currentUrl: string;

  constructor(private router: Router, private data: DataService) {
    router.events.subscribe((navi: NavigationEnd ) => this.bindOnNavigation(navi));
  }

  bindOnNavigation(navi) {
    if (navi.url !== undefined && navi.url !== null) {
      this.currentUrl = navi.url;
    }
  }

  ngOnInit() {
  }

}
