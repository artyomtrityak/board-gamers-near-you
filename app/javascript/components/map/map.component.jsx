import React from 'react';
import Leaflet from 'leaflet';

import MapFilters from './map-filters.component';

export default React.createClass({
  componentDidMount() {
    this.createMap();
  },

  createMap() {
    var L = Leaflet;

    var map = L.map(this.refs.mapContainer.getDOMNode())
    .setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
      id: 'examples.map-i875mjb7'
    }).addTo(map);

  },

  render: function() {
    return (
      <div>
        <MapFilters />
        <div ref="mapContainer" style={{height: 500}}>
        </div>
      </div>
    );
  }
});