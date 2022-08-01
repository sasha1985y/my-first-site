import {my_job, to_beach, train, bridge, ussrFactory, shelf52, zemlyachka, church, jaguar, appendics, forest,
heartOfForest} from './map-places-arrays.js';

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
    image: ['./places/kalach_don/переулок_0.jpg', './places/kalach_don/переулок_1.jpg'],
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
  {
    image: ['./places/kalach_don/аппендицит_1.jpg'],
    small: true,
    title: 'вид Дона',
    location: 'Kalach-on-Don',
    coordinates: {
      lat: 48.67556,
      lng: 43.52170
    },
    description: 'фотографирую с калачёвского полуострова)',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: appendics,
    small: true,
    title: 'вид Дона',
    location: 'Kalach-on-Don',
    coordinates: {
      lat: 48.67468,
      lng: 43.52202
    },
    description: 'фотографирую с калачёвского полуострова ещё)',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: ['./places/kalach_don/от_аппендецита_1.jpg', './places/kalach_don/от_аппендецита_2.jpg'],
    small: true,
    title: 'та сторона Дона',
    location: 'Kalach-on-Don',
    coordinates: {
      lat: 48.67686,
      lng: 43.52150
    },
    description: 'погнал домой, темнеет',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: ['./places/kalach_don/от_аппендецита_0.jpg'],
    small: true,
    title: 'выход с аппендицита',
    location: 'Kalach-on-Don',
    coordinates: {
      lat: 48.67676,
      lng: 43.52174
    },
    description: 'пора домой',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: ['./places/kalach_don/сигнальный столб_0.jpg', './places/kalach_don/сигнальный столб_1.jpg'],
    small: true,
    title: 'сигнальный знак',
    location: 'Kalach-on-Don',
    coordinates: {
      lat: 48.67776,
      lng: 43.51974
    },
    description: 'незнаю, в каком он сейчас состоянии,но в 2014 он был в таком)',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: forest,
    small: true,
    title: 'лесные пейзажи',
    location: 'Kalach-on-Don',
    coordinates: {
      lat: 48.67894,
      lng: 43.51734
    },
    description: 'это где-то здесь, а можт и не здесь)..',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: ['./places/kalach_don/пляж.jpg'],
    small: true,
    title: 'новый пляж',
    location: 'Kalach-on-Don',
    coordinates: {
      lat: 48.67921,
      lng: 43.51682
    },
    description: 'до 2014, а можт и раньше был тут пляж, но прошли плугом и посеяли деревья,а щас камыши везде.....а я этот пляж предпочитал старому',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: heartOfForest,
    small: true,
    title: 'глубже в лес',
    location: 'Kalach-on-Don',
    coordinates: {
      lat: 48.68102,
      lng: 43.51818
    },
    description: 'хоть это и парк, но для меня это всё равно лес.',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: ['./places/kalach_don/пролесок_0.jpg', './places/kalach_don/пролесок_1.jpg'],
    small: true,
    title: 'поле/лес',
    location: 'Kalach-on-Don',
    coordinates: {
      lat: 48.68225,
      lng: 43.51909
    },
    description: 'тут были яблочно-абрикосовые сады...потом появилось дерево паразит и захватило эту территорию...',
    avatar: './img/avatars/my_ava.png'
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
    small: true,
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
    image: ['./places/volgograd/трёшка_0.jpg'],
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
  {
    image: ['./places/volgograd/объект_19_0.jpg', './places/volgograd/объект_19_1.jpg', './places/volgograd/объект_19_2.jpg'],
    title: 'улица Толбухина',
    location: 'Volgograd',
    coordinates: {
      lat: 48.77237,
      lng: 44.48897
    },
    description: 'вот она, граница пятиэтажек и частного сектора....а дальше - промзона',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: ['./places/volgograd/янтарный_утро.jpg'],
    title: 'утро в Янтарном',
    location: 'Volgograd',
    coordinates: {
      lat: 48.64332,
      lng: 44.41095
    },
    description: 'такое прекрасное утрецо...но я не просто так здеся, я иду на работу)',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: ['./places/volgograd/дикари.jpg'],
    title: 'автоколонна № 1686',
    location: 'Volgograd',
    coordinates: {
      lat: 48.75277,
      lng: 44.47471
    },
    description: 'автоколонна "Дикая дивизия". Мне здесь очень нравится)',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: ['./places/volgograd/зима_колодец.jpg'],
    title: 'свободная минутка',
    location: 'Volgograd',
    coordinates: {
      lat: 48.76911,
      lng: 44.48182
    },
    description: 'вынырнул подышать... не помню в каком это было году...',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: ['./places/volgograd/зима_утро.jpg'],
    title: 'промзона',
    location: 'Volgograd',
    coordinates: {
      lat: 48.75866,
      lng: 44.45383
    },
    description: 'тут надо было по-быстрому пильнуть рефакторинга....',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: ['./places/volgograd/я_пашу.jpg'],
    title: 'ул. Фонтанная',
    location: 'Volgograd',
    coordinates: {
      lat: 48.72625,
      lng: 44.48687
    },
    description: 'эт я пашу)',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: ['./places/volgograd/новая_дорога.jpg'],
    title: '1513',
    location: 'Volgograd',
    coordinates: {
      lat: 48.78395,
      lng: 44.49521
    },
    description: 'прям душа радуется, когда вижу как строится новая дорога)',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: ['./places/volgograd/чёткий_дом.jpg'],
    title: 'новый дом',
    location: 'Volgograd',
    coordinates: {
      lat: 48.74736,
      lng: 44.50414
    },
    description: 'я б тут жил, атвечяю... семёрка, все дела',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: ['./places/volgograd/чёткая_бригада_0.jpg', './places/volgograd/чёткая_бригада_1.jpg'],
    small: true,
    title: 'чёткая бригада',
    location: 'Volgograd',
    coordinates: {
      lat: 48.75582,
      lng: 44.50329
    },
    description: 'копаем яму',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: ['./places/volgograd/51-гвардейская_щебелинка_0.jpg', './places/volgograd/51-гвардейская_щебелинка_1.jpg'],
    small: true,
    title: '51 Гвардейская/ Шебелинская',
    location: 'Volgograd',
    coordinates: {
      lat: 48.76729,
      lng: 44.48740
    },
    description: 'Это - классические улицы Жилгородка, Вась)',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: ['./places/volgograd/утро_прогулка_0.jpg', './places/volgograd/утро_прогулка_1.jpg'],
    small: true,
    title: 'Шебелинская/Манычская',
    location: 'Volgograd',
    coordinates: {
      lat: 48.76427,
      lng: 44.48769
    },
    description: 'Прекрасное утрецо для утренней прогулки',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: ['./places/volgograd/восточно-казахстанская_рельсы_0.jpg'],
    small: true,
    title: 'Восточно-Казахстанская',
    location: 'Volgograd',
    coordinates: {
      lat: 48.76826,
      lng: 44.49745
    },
    description: 'Деловой центр Жилгородка.....2014',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: ['./places/volgograd/восточно-казахстанская_рельсы_1.jpg', './places/volgograd/восточно-казахстанская_рельсы_2.jpg'],
    small: true,
    title: 'Восточно-Казахстанская',
    location: 'Volgograd',
    coordinates: {
      lat: 48.76754,
      lng: 44.49746
    },
    description: 'Ждём трамвай',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: ['./places/volgograd/восточно-казахстанская_шекснинская.jpg'],
    small: true,
    title: 'Восточно-Казахстанская/Шекснинская',
    location: 'Volgograd',
    coordinates: {
      lat: 48.76185,
      lng: 44.49772
    },
    description: 'Едем работать',
    avatar: './img/avatars/my_ava.png'
  },
  {
    image: ['./places/volgograd/трёшка_1.jpg'],
    small: true,
    title: 'заправка',
    location: 'Volgograd',
    coordinates: {
      lat: 48.75801,
      lng: 44.49511
    },
    description: 'с этой газовой заправкой всегда что-то было "не так"',
    avatar: './img/avatars/my_ava.png'
  },
];

export {places};