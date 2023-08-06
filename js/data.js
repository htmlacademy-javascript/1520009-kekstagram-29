import { getRandomPositiveInteger } from './util.js';
import { getRandomArrayElement } from './util.js';

// создаем константу описания фотографий
const DESCRIPTION = [
  'Прекрасно проводим время #отдых #лето #летниефоточки',
  'Зажигаем и купаемся #отдыхлетом',
  'Крутая поездка',
  'Отрываемся по полной #gopro',
  'Lets chill this summer',
  '#отрыв',
  'Шикарно отдыхаем, давайте к нам',
  'Круто #отпуск',
  'Передаем привет всем кто на работе!!!',
  '#GoobVibes',
  'Привет с моря #blacksea',
  'Best vacation in the world',
  'Самый вкусный милкшэйк в городе',
];
//сщздаем массив имен авторов комментариев
const NAMES = [
  'Андрей',
  'Серафим',
  'Моська',
  'Илья',
  'Семён',
  'Аркадий',
  'Екатерина',
  'Мошкарик',
  'Васян',
  'Тычтымбек',
  'Сафокл',
];
//создаем массив текста комментариев
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

//создаем константу количества выдаваемых объектов из задания
const objectsValue = 25;

//создаём массив с объектами которые описывают комментарии
const getComments = () => ({
  id: getRandomPositiveInteger(0, 30),
  avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
  message: MESSAGES[getRandomPositiveInteger(0, MESSAGES.length)],
  name: NAMES[getRandomPositiveInteger(0, NAMES.length)],
});

//создаем комментарии
const createPhotoDescription = () => ({
  id: getRandomPositiveInteger (1, 25),
  url: `photos/${getRandomPositiveInteger(1, 25)}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
  likes: getRandomPositiveInteger(15, 200),
  comments: Array.from(
    { length: getRandomArrayElement(0, 30) }, getComments),
});
const photoObj = Array.from ({length: objectsValue}, createPhotoDescription);
export {photoObj};
