import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  marker = {'lng' : 0, 'lat' : 0};

  constructor() {}

  getMarker() {
    return this.marker;
  }

  setMarker(lng, lat) {
    this.marker = {'lng': lng , 'lat': lat};
  }

  removeMarker() {
    this.marker = {'lng' : 0, 'lat' : 0};
  }

}
