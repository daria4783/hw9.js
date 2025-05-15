// 1.Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].

// Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.

const arrayNumber = function(num){
for (let index = 0; index < num.length; index += 1) {
    console.log(`${index + 1} - ${num[index]}`);
}
    return num;
}
const array = ["Mango", "Poly", "Ajax"];
console.log(arrayNumber(array));

// 2.Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.

const calculateEngravingPrice = function (message, pricePerWord) {
    const words = message.split(" ")
    return words.length * pricePerWord;
}
const sentence = prompt("what phrase do you want to have on your jewelery?")
let price = 0;
if (sentence.length <= 2) {
   price = 3;
} else if (sentence.length > 2) {
   price = 5;
}

console.log(calculateEngravingPrice(sentence, price));

// 3.Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.

const findLongestWord = function (string) {
    const word = string.split(" ")
    let longestWord = " ";
    for (const element of word) {
        if (element.length > longestWord.length) {
            longestWord = element;
        }
    }
    return longestWord;
}

const sentense = "I love javascript";

console.log(findLongestWord(sentense));


// 4.Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.
// ---Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.
// ----Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає укорочену версію.

const formatString = function (string) {
   if (string.length < 40) {
       return string;
   }
    
    return string.slice(0, 40) + "...";
}

const strShotr = "just string";
const strLong = "too long to be shown on a display so needs to be cut"

console.log(formatString(strShotr));
console.log(formatString(strLong));

// 5.Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє її на вміст слів spam і sale. Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.

const checkForSpam = function (message) {
    const forbiddenWord = "sale";
    const forbiddenWord2 = "spam";
    
    if (message.includes(forbiddenWord) || message.includes(forbiddenWord2)) {
        console.log(true);
    } else {
        console.log(false);
    }
    return message;
}

const withWord = "Lorem ipsum dolor sit amet sale consectetur adipisicing elit.";
const withWord2 = "Lorem ipsum spam dolor sit amet consectetur adipisicing elit.";
const withoutWord = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

console.log(checkForSpam(withWord));
console.log(checkForSpam(withWord2));
console.log(checkForSpam(withoutWord));


// 6.Напиши скрипт з наступним функціоналом:

// При завантаженні сторінки користувачеві пропонується в prompt ввести число. Введення зберігається в змінну input і додається в масив чисел numbers.
// Операція введення числа користувачем і збереження в масив триває до тих пор, пір, поки користувач не натисне Cancel в prompt.
// Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній, необхідно порахувати суму всіх елементів масиву і записати її в змінну total. Використовуй цикл for або for...of. Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.

let input;
const numbers = [];
let total = 0;

while (true) {
    input = Number(prompt("pick a number. to stop press Cancel"))
if (input === null) {
    break;
    }

    if (isNaN(input)) {
        alert("Not a number!!! try again")
        continue
    }

    numbers.push(input);
}


    for (const element of numbers) {
        total += element;
}
    console.log(`Загальна сума чисел дорівнює ${total}`);
    

