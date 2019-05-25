import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { MapService } from '../map.service';
import {Router} from '@angular/router';
import { GeoJson } from '../map';
import {environment} from '../../environments/environment';


@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.scss']
})
export class WorldMapComponent implements OnInit {

  map: mapboxgl.Map;
  lat = 0;
  lng = 0;
  style =  'mapbox://styles/mapbox/streets-v11';
  coordinates = 'no coordinate selected';

  mapSource: any;

  constructor(private mapService: MapService, private router: Router) { }

  ngOnInit() {
    this.initializeMap();
  }

  private initializeMap() {
    const marker = this.mapService.getMarker();
    this.lat = marker.lat;
    this.lng = marker.lng;
    this.buildMap();
  }

  buildMap() {
    const Slat = this.lat.toPrecision(4);
    const Slng = this.lng.toPrecision(4);
    this.coordinates = 'latitude: ' + Slat + ' , longitude: ' + Slng + '  (' + Slat + ';' + Slng + ')';

    mapboxgl.accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 1,
      center: [this.lng, this.lat]
    });

    this.map.addControl(new mapboxgl.NavigationControl());

    this.map.on('load', (event) => {

      this.map.addSource('marker', {
        type: 'geojson',
        data: {
          type: 'Feature'
        }
      });

      this.mapSource = this.map.getSource('marker');

      this.mapSource.setData(new GeoJson([this.lng, this.lat], { message: 'not needed' }));

      this.map.addLayer({
        id: 'marker',
        source: 'marker',
        type: 'symbol',
        layout: {
          'icon-image': 'rocket-15',
        }
      });

    });

    this.map.on('click', (event) => {
      this.lat = event.lngLat.lat;
      this.lng = event.lngLat.lng;
      const Slat = this.lat.toPrecision(4);
      const Slng = this.lng.toPrecision(4);
      this.coordinates = 'latitude: ' + Slat + ' , longitude: ' + Slng + '  (' + Slat + ';' + Slng + ')';
      this.mapSource.setData(new GeoJson([this.lng, this.lat], { message: 'not needed' }));
});
  }

  saveCoordinates() {
    this.mapService.setMarker(this.lng, this.lat);
    this.router.navigate(['/addSubscription']);
  }

}
