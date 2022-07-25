import {my_job, to_beach, train, bridge, ussrFactory, shelf52, zemlyachka, church, jaguar} from './map-places-arrays.js';

const places = [

  /* Kalach-on-Don */
  
  {
    image: to_beach,
    small: true,
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
    small: true,
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
    small: true,
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
    small: true,
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
    image: ['./places/kalach_don/рельсы.jpg'],
    small: true,
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
    small: true,
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
    small: true,
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
    small: true,
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
    small: true,
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
    small: true,
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
    small: true,
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
    image: ['./places/kalach_don/ночная_река.jpg'],
    small: true,
    title: 'Дон в полнолуние',
    location: 'Kalach-on-Don',
    coordinates: {
      lat: 48.68256,
      lng: 43.50984
    },
    description: `${String.fromCodePoint(11088)} Тут можно пробыть и всю ночь, любуясь этим зрелищем ${String.fromCodePoint(11088)}`,
    avatar: './img/avatars/user.jpg'
  },

  /* Murmansk */
  
  {
    image: ['./places/murmansk/mountain.jpg'],
    small: true,
    title: 'гора Поазуайвенч',
    location: 'Murmansk',
    coordinates: {
      lat: 67.91708,
      lng: 32.97343
    },
    description: 'полярный день',
    avatar: './img/avatars/user.jpg'
  },

  /* Tymen */

  {
    image: ['./places/tymen/куминская_центр.png'],
    small: true,
    title: 'культурный центр',
    location: 'Tymen',
    coordinates: {
      lat: 58.81051,
      lng: 65.96930
    },
    description: 'проаздничный фейерверк'
  },

  /* Volgograd */

  {
    image: my_job,
    special: `\t  ${String.fromCodePoint(11088)}\n\t${String.fromCodePoint(11088)}53${String.fromCodePoint(11088)}\n      ${String.fromCodePoint(11088)}${String.fromCodePoint(11088)}${String.fromCodePoint(11088)}${String.fromCodePoint(11088)}${String.fromCodePoint(11088)}`,
    location: 'Volgograd',
    coordinates: {
      lat: 48.75656,
      lng: 44.48939
    },
    description: `${String.fromCodePoint(11088)}Чёткое место, Вася!${String.fromCodePoint(11088)}`,
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
    small: true,
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
    small: true,
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
    image: ['./places/volgograd/shubert/shubert_0.jpg', './places/volgograd/shubert/shubert_1.jpg'],
    small: true,
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
  {
    image: ['./places/volgograd/степь.jpg'],
    title: 'степь перед дождём',
    location: 'Volgograd',
    coordinates: {
      lat: 48.76263,
      lng: 44.41939
    },
    description: 'работали в степи но скоро пошёл дождь',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: ['./places/volgograd/фонтанная_ползунова.jpg'],
    title: 'живописный вид',
    location: 'Volgograd',
    coordinates: {
      lat: 48.72601,
      lng: 44.48697
    },
    description: 'Чисто откисаю',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: jaguar,
    title: 'трёшка виды',
    location: 'Volgograd',
    coordinates: {
      lat: 48.75834,
      lng: 44.49599
    },
    description: 'Иду с задания и фоткаю',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: ['./places/volgograd/центр_мост.jpg'],
    title: 'возле вокзалов',
    location: 'Volgograd',
    coordinates: {
      lat: 48.71559,
      lng: 44.51297
    },
    description: 'вот такая обстановка',
    avatar: './img/avatars/my_ava.png'
  },
];

export {places};