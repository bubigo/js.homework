//ДЗ от субботы по функциям
// функция: сортировка по возр 2 и2 2 22 
let numbers= [ 1, 6, 2, 10, 15 ];
function sortByAscending(a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
}
numbers.sort(sortByAscending);
console.log(numbers);


//функция: является ли слово палиндромом
let word = 'Mom';
let wordLower = word.toLowerCase();
let reverseWord = wordLower.split('').reverse().join('');
    if (wordLower === reverseWord){
        console.log(`${word} is a palindrome`);
    } else {
        console.log(`${word} isn't a palindrome`);
}


//ДЗ от четверга 3 из 4
//сумму чисел в массиве, учесть тип
let arrNumbers = [6, 2, 3, '5', 3];
let sum = 0;
for (let i = 0; i < arrNumbers.length; i++) {
    if (typeof arrNumbers[i] === 'number') {
        sum += arrNumbers[i];
    }
}
console.log(sum);

//разделить совершеннолетних и несовершеннолетних
let users = [
    {name: 'Ivan', age: 18},
    {name: 'Petr', age: 12},
    {name: 'Sidor', age: 25}
];
let legalAge = 18;
let underage = [];
let ofAge = [];
users.forEach((user) => {
    if (user.age < legalAge) {
        underage.push(user.name);
    } else {
       ofAge.push(user.name);
    }
});
console.log('Of Age:' + ofAge);
console.log('Underage:' + underage);

// пока нет задачи по поиску в массиве


// сколько одинаковых строк содержит массив
let repeatArr = ['a', 'b', 'c', 'a', 'v', 'v', 'v'];
let result = {};
for (let value of repeatArr){
    result[value] = value in result ? result[value] + 1 : 1;
}
console.log(result);

// калькулятора пока нет










