// 1. Задание: функция для проверки длины строки (сравниваем строку и максимальную длину возврать true если str < заданной длины, false если <).

//Вариант со стрелочной функцией:
const checkStringLength = (string, length) => {
console.log(string);
  return string.length <= length; //возвращаем проверку строки на общую длину
}
console.log(checkStringLength("строка длинная длинная строчка <20", 20));
console.log(checkStringLength("проверка строки со второй длиной <18", 18));
console.log(checkStringLength("маленькая строка <10", 10));
console.log(checkStringLength("стр <4", 4));

//вариант с функцией:
// function checkStringLength(string, length) {  //объявляем функцию и присваиваем значение строка и число
//   return string.length <= length;
// }
console.log('--------------------'); //отсечка между заданиями для восприятия на странице

//2. Задание: функция для проверки строки на палиндромность (взять строку с пробелами и проверить на одинаковость чтения с двух сторон).

// function isPolindrom(string) {
//   const normalizedString = string.replaceAll(' ', '').toLowerCase(); //убираем пробелы приводим в верхний регистр
//   let newString = ''; //создаем пустую строку и сохраняем в новую переменную

//   for (let i = normalizedString.length -1; i>= 0; i--) {
//     newString += normalizedString[i];
//     return newString == normalizedString;
// }
//   console.log(isPolindrom('топот'));
//   console.log(isPolindrom('ДовОд'));
//   console.log(isPolindrom('Кекс'));
//   console.log(isPolindrom('Лёша на полке клопа нашёл '));
//   console.log(isPolindrom('К о лок'));
// }

 //вариант с методом at:
 function isPolindrom(string) {
  const normalizedString = string.replaceAll(' ', '').toLowerCase(); //убираем пробелы приводим в верхний регистр
  for (let i = 0; i < string.length; i++) {
    if (normalizedString.at(i) !== normalizedString.at(-i -1)) {
      return false
    }
  }
  return true;
  }
  console.log(isPolindrom('топот'));
  console.log(isPolindrom('ДовОд'));
  console.log(isPolindrom('Кекс'));
  console.log(isPolindrom('Лёша на полке клопа нашёл '));
  console.log(isPolindrom('К о лок'));

//вариант с методом split (как подсказал наставник Юрий)
  // const isPolindrom = (string) => {
  //   const normalizedString = string.replaceAll(' ', '').toLowerCase();
  //   const reversedString - normalizedString.split('').reverse().join(''); //split переводит строку посимвольно на массив а reverse переворачивает символы в массиве, метод join переведет символы в массиве в строку
  //   return reversedString == normalizedString; // операция сравнения символов который возвращает или правда или ложь
  // }
  // console.log(isPolindrom('топот'));
  // console.log(isPolindrom('ДовОд'));
  // console.log(isPolindrom('Кекс'));
  // console.log(isPolindrom('Лёша на полке клопа нашёл '));
  // console.log(isPolindrom('К о лок'));

  console.log('--------------------'); //отсечка между заданиями для восприятия на странице

//3. Дополнительное задание: извлечение из строки цифр от 0 до 9

function extractNumber(arg) {
  const string = arg.toString(); //переводим массив пришедших данных в строку
  let result = ''; //заводим пустую переменную
  for (let i = 0; i < string.length; i++); {
  if (!Number.isNaN(parseInt(string[i], 10))); { //если parseInt вернуло нам число и оно на Nan записываем его
    result += string[i]; // записываем символ в результирующую строку если вернется NaN то символ в результирующую строку не запишется
  }
}

return parseInt(result, 10); //на выходе получаем только числа из всего массива строки
}

 console.log(extractNumber('2023 год'));
 console.log(extractNumber('ECMAScript 2022'));
 console.log(extractNumber('1 кефир, 0.5 батона'));
 console.log(extractNumber('а я томат'));
 console.log(extractNumber('2023'));
 console.log(extractNumber(-1));
 console.log(extractNumber(-1.5));
//последняя функция ругается на 72 и 80 строки, что i не определено, не могу понять почему, если есть возможность оставить коментарий, был бы благодарен
