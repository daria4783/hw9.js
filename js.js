// 1.Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].

// Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.

// const arrayNumber = function(num){
// for (let index = 0; index < num.length; index += 1) {
//     console.log(`${index + 1} - ${num[index]}`);
// }
//     return num;
// }
// const array = ["Mango", "Poly", "Ajax"];
// console.log(arrayNumber(array));

// 2.Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.

// const calculateEngravingPrice = function (message, pricePerWord) {
//     const words = message.split(" ")
//     return words.length * pricePerWord;
// }
// const sentence = prompt("what phrase do you want to have on your jewelery?")
// let price = 0;
// if (sentence.length <= 2) {
//    price = 3;
// } else if (sentence.length > 2) {
//    price = 5;
// }

// console.log(calculateEngravingPrice(sentence, price));

3.