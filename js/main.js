/* id, число — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.

url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.

description, строка — описание фотографии. Описание придумайте самостоятельно.

likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.

comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. Количество комментариев к каждой фотографии — случайное число от 0 до 30. Все комментарии генерируются случайным образом.
*/

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

//создаем фукцию которая возвращает рандомное положительное целое число
const getRandomPositiveInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
//создаем функцию котоая возвращает случаынй элемент массива
const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

//создаём массив с объектами которые описывают комментарии
const getComments = () => ({
  id: getRandomPositiveInteger(0, 30),
  avatar: `img/${getRandomPositiveInteger(1, 6)}.svg`,
  message: MESSAGES[getRandomPositiveInteger(0, MESSAGES.length)],
  name: NAMES[getRandomPositiveInteger(0, NAMES.length)],
});

//создаем комментарии
const createPhotoDescription = () => ({
  id: getRandomPositiveInteger(1, 25),
  avatar: `img/${getRandomPositiveInteger(1, 6)}.svg`,
  description: getRandomArrayElement(DESCRIPTION),
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
  likes: getRandomPositiveInteger(15, 200),
  comments: getRandomArrayElement(getComments),
});
const PhotoObj = Array.from ({length: objectsValue}, createPhotoDescription);
window.console.log(PhotoObj);
