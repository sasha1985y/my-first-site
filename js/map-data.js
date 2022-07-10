import {my_job, to_beach, train, bridge, ussrFactory, shelf52, zemlyachka, church} from './map-places-arrays.js';

const places = [
  {
    image: my_job,
    title: 'возле работы',
    location: 'Volgograd',
    coordinates: {
      lat: 48.75656,
      lng: 44.48939
    },
    description: 'самое чёткое место,атвечяю',
    avatar: './img/avatars/my_ava.png',
    logo: './img/logo.svg'
  },
  {
    image: ['./places/volgograd/трёшка.jpg'],
    title: 'возле работы',
    location: 'Volgograd',
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
    coordinates: {
      lat: 48.77131,
      lng: 44.47812
    },
    description: 'такую погоду грех не запечатлировать)',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: ['./places/tymen/куминская_центр.png'],
    title: 'культурный центр',
    location: 'Tymen',
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
    coordinates: {
      lat: 48.68728,
      lng: 43.51071
    },
    description: 'такие фотки не могут не радовать)))',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: ['./places/kalach_don/чудо_сад.jpg'],
    title: 'утренний сад',
    location: 'Kalach-on-Don',
    coordinates: {
      lat: 48.68633,
      lng: 43.51584
    },
    description: 'утро,пыль,свет',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: bridge,
    title: 'возле самарского разъезда',
    location: 'Volgograd',
    coordinates: {
      lat: 48.75425,
      lng: 44.48381
    },
    description: 'ночь 2013, день 2022',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: ['./places/volgograd/школа_боевых_исскуств.jpg'],
    title: 'школа №19',
    location: 'Volgograd',
    coordinates: {
      lat: 48.71021,
      lng: 44.52779
    },
    description: 'место с хорошей энергетикой',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: ussrFactory,
    title: 'заброшенный завод',
    location: 'Volgograd',
    coordinates: {
      lat: 48.77733,
      lng: 44.48507
    },
    description: 'атмосфера заброшенности',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: shelf52,
    title: 'объект-52',
    location: 'Volgograd',
    coordinates: {
      lat: 48.77147,
      lng: 44.47822
    },
    description: 'осенний вечер надвигается',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: zemlyachka,
    title: 'Землячки - Жукова',
    location: 'Volgograd',
    coordinates: {
      lat: 48.75309,
      lng: 44.48208
    },
    description: 'пора покупать ёлки на новый год...люди суетятся',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: ['./places/murmansk/mountain.jpg'],
    title: 'гора Поазуайвенч',
    location: 'Murmansk',
    coordinates: {
      lat: 67.91708,
      lng: 32.97343
    },
    description: 'полярный день',
    avatar: './img/avatars/user.jpg'
  },
  {
    image: ['./places/volgograd/shubert/shubert_0.jpg', './places/volgograd/shubert/shubert_1.jpg'],
    title: 'взгляд с птичьего полёта',
    location: 'Volgograd',
    coordinates: {
      lat: 48.76270,
      lng: 44.48341
    },
    description: 'сидел на столбе и фоткал',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: ['./places/volgograd/школа.jpg'],
    title: 'школа осень',
    location: 'Volgograd',
    coordinates: {
      lat: 48.77041,
      lng: 44.48538
    },
    description: 'здесь зимой можно подскользнуться и упасть лицом в грязь',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: ['./places/kalach_don/рельсы.jpg'],
    title: 'ж/д',
    location: 'Kalach-on-Don',
    coordinates: {
      lat: 48.68486,
      lng: 43.51807
    },
    description: 'здесь давным-давно люди встречали коров с пастбища',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: church,
    title: 'ж/д, иду дальше',
    location: 'Kalach-on-Don',
    coordinates: {
      lat: 48.68436,
      lng: 43.51960
    },
    description: 'фоткаю по разным сторонам',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: ['./places/kalach_don/переулок.jpg'],
    title: 'тропинка из города в лес',
    location: 'Kalach-on-Don',
    coordinates: {
      lat: 48.68462,
      lng: 43.51877
    },
    description: 'по этой тропинке люди ходят из города на пляж и обратно',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: ['./places/kalach_don/улица_вечер_0.jpg'],
    title: 'революционная вечером',
    location: 'Kalach-on-Don',
    coordinates: {
      lat: 48.68650,
      lng: 43.51549
    },
    description: 'прогулка подходит к концу',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: ['./places/kalach_don/улица_вечер_1.jpg'],
    title: 'революционная вечером',
    location: 'Kalach-on-Don',
    coordinates: {
      lat: 48.68754,
      lng: 43.51237
    },
    description: 'прогулка подходит к концу',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: ['./places/kalach_don/улица_вечер_2.jpg'],
    title: 'возле ларька',
    location: 'Kalach-on-Don',
    coordinates: {
      lat: 48.68790,
      lng: 43.51134
    },
    description: 'с этим местом многое связано',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: ['./places/kalach_don/улица_вечер_3.jpg'],
    title: 'магазин,воскресный рынок,библиотека',
    location: 'Kalach-on-Don',
    coordinates: {
      lat: 48.68833,
      lng: 43.50984
    },
    description: 'тут сразу три места,где я много тусил в детстве',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: ['./places/volgograd/самарский_2014.jpg'],
    title: 'самарский разъезд 2014',
    location: 'Volgograd',
    coordinates: {
      lat: 48.75371,
      lng: 44.48278
    },
    description: 'этого пешеходного перехода уже давно нет,и перейти здесь нельзя-только перебежать)))',
    avatar: './img/avatars/my_ava.png'
  },
];

export {places};