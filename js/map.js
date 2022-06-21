import {places} from './map-data.js';
import {createCustomPopup} from './map-popup.js';

const INITIAL_LAT = 48.75661;
const INITIAL_LNG = 44.48914;
const initialCoordinates = {lat: INITIAL_LAT, lng: INITIAL_LNG};
const addresses = document.querySelector('#address');

const Map = {
  TILE: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  COPYRIGHT: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
  ZOOM: 11.5
};

const map = L.map('map-canvas')
  .on('load', () => {
    addresses.value = `${initialCoordinates['lat']},${initialCoordinates['lng']}`;
  })

  .setView({
    lat: INITIAL_LAT,
    lng: INITIAL_LNG,
  }, Map.ZOOM);

L.tileLayer(
  Map.TILE,
  {
    attribution: Map.COPYRIGHT,
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './leaflet_images/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: INITIAL_LAT,
    lng: INITIAL_LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

const mainPinMove = () => {
  mainPinMarker.on('move', evt => {
    const points = evt.target.getLatLng();
    addresses.value = `${points['lat'].toFixed(5)},${points['lng'].toFixed(5)}`;
  })
};
mainPinMove();

const addPinIcon = L.icon({
  iconUrl: './leaflet_images/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

places.forEach((place) => {
  const {
    coordinates: {
      lat,
      lng
    }
  } = place;
  const adPins = L.marker({
    lat,
    lng,
  },
    {
      draggable: false,
      icon: addPinIcon,
    });

  adPins
    .addTo(map)
    .bindPopup(createCustomPopup(place));
});
