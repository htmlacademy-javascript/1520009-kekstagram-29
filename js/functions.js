// 1. Задание: функция для проверки длины строки (сравниваем строку и максимальную длину возврать true если str < заданной длины, false если <).

function checkStringLength (string, length) {
  return string.length < length; //возвращаем проверку строки на общую длину
}
window.console.log(checkStringLength('длина строки', 20));
//2. Задание: функция для проверки строки на палиндромность (взять строку с пробелами и проверить на одинаковость чтения с двух сторон).

// function isPolindrom(string) {
//   const normalizedString = string.replaceAll(' ', '').toLowerCase(); //убираем пробелы приводим в верхний регистр
//   let newString = ''; //создаем пустую строку и сохраняем в новую переменную

//   for (let i = normalizedString.length -1; i>= 0; i--) {
//     newString += normalizedString[i];
//     return newString == normalizedString;
// }
//вариант с методом at:
function isPalindrom(string) {
  const normalizedString = string.replaceAll(' ', '').toLowerCase(); //убираем пробелы приводим в верхний регистр
  for (let i = 0; i < string.length; i++) {
    if (normalizedString.at(i) !== normalizedString.at(-i - 1)) {
      return false;
    }
  }
  return true;
}
window.console.log(isPalindrom('топот'));
//вариант с методом split (как подсказал наставник Юрий)
// const isPolindrom = (string) => {
//   const normalizedString = string.replaceAll(' ', '').toLowerCase();
//   const reversedString - normalizedString.split('').reverse().join(''); //split переводит строку посимвольно на массив а reverse переворачивает символы в массиве, метод join переведет символы в массиве в строку
//   return reversedString == normalizedString; // операция сравнения символов который возвращает или правда или ложь
// }

//3. Дополнительное задание: извлечение из строки цифр от 0 до 9

function extractNumber(arg) {
  const string = arg.toString(); //переводим массив пришедших данных в строку
  let result = ''; //заводим пустую переменную
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string[i], 10))) { //если parseInt вернуло нам число и оно на Nan записываем его
      result += string[i]; // записываем символ в результирующую строку если вернется NaN то символ в результирующую строку не запишется
    }
  }

  return parseInt(result, 10); //на выходе получаем только числа из всего массива строки
}

window.console.log(extractNumber('2023 год'));
//последняя функция ругается на то что i не определено, не могу понять почему, если есть возможность оставить коментарий, был бы благодарен
