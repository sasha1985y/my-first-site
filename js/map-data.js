import {my_job, to_beach, train} from './map-places-arrays.js';

const places = [
  {
    image: my_job,
    title: 'возле работы',
    location: 'Volgograd',
    id: 'my_job',
    coordinates: {
      lat: 48.75656,
      lng: 44.48939
    },
    description: 'самое чёткое место,атвечяю',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: ['./places/volgograd/трёшка.jpg'],
    title: 'возле работы',
    location: 'Volgograd',
    id: 'tree_race',
    coordinates: {
      lat: 48.75601,
      lng: 44.48756
    },
    description: 'сделал фото про дороге на работу',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: ['./places/volgograd/янтарный_вечер.jpg'],
    title: '16-этажка',
    location: 'Volgograd',
    id: 'yantar',
    coordinates: {
      lat: 48.64477,
      lng: 44.41090
    },
    description: 'чёткое место в янтарном',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: ['./places/volgograd/фото_попути.jpg'],
    title: 'начало весны',
    location: 'Volgograd',
    id: 'zeml',
    coordinates: {
      lat: 48.75211,
      lng: 44.48344
    },
    description: 'зафоткал посреди рутины',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: ['./places/volgograd/грязное_стекло.jpg'],
    title: 'помыть стекло',
    location: 'Volgograd',
    id: 'aviator',
    coordinates: {
      lat: 48.75486,
      lng: 44.47717
    },
    description: 'сидел и фоткал чёткие места',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: ['./places/volgograd/краснополянская.jpg'],
    title: 'солнечная минута',
    location: 'Volgograd',
    id: 'krasnopol',
    coordinates: {
      lat: 48.77141,
      lng: 44.47812
    },
    description: 'такую погоду грех не запечатлировать)',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: ['./places/tymen/куминская_центр.png'],
    title: 'культурный центр',
    location: 'Tymen',
    id: 'center_place',
    coordinates: {
      lat: 58.81051,
      lng: 65.96930
    },
    description: 'проаздничный фейерверк'
  },
  {
    image: to_beach,
    title: 'дорога на аппендицит',
    location: 'Kalach-on-Don',
    id: 'to_beach',
    coordinates: {
      lat: 48.67556,
      lng: 43.52558
    },
    description: 'вечерняя прогулка по знакомым местам',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: ['./places/kalach_don/та_сторона.jpg'],
    title: 'братиш',
    location: 'Kalach-on-Don',
    id: 'bro',
    coordinates: {
      lat: 48.67519,
      lng: 43.52420
    },
    description: 'братиш,есть чё покурить?',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: train,
    title: 'ж/д переезд',
    location: 'Kalach-on-Don',
    id: 'train',
    coordinates: {
      lat: 48.68728,
      lng: 43.51071
    },
    description: 'такие фотки не могут не радовать)))',
    avatar: './img/avatars/my_ava.png'
  }

];

export {places};