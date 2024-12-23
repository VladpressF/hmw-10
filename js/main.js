// 1. Напиши скрипт який при кліку на кнопку буде виводити на екран повідомлення “Hello World!”. Використовуй колбек в вигляді стрілки.

let button = document.getElementById('myButton');
button.addEventListener('click', () => {
    alert('Hello World!');
});
// 2. Створи програму, яка генерує випадкове число від 1 до 100. Користувач повинен вгадати число, введенням його в текстове поле. При кліку на кнопку "Перевірити" програма повинна повідомити користувача, чи є їх відповідь правильною.
let random = Math.floor(Math.random() * 100) + 1;   
let result = document.getElementById('result');
let guessField = document.getElementById('guessField');
let checkButton = document.getElementById('checkButton');

checkButton.addEventListener('click', () => {
    if (guessField.value === random) {
        result.textContent = 'Вітаємо! Ви вгадали число!';
    } else {
        result.textContent = 'Спробуйте ще раз.';
    } 
}); 
// 3. Створи програму, яка відображає повідомлення про те, скільки разів користувач клікнув на сторінці.
let clickCount = 0;
let clickButton = document.getElementById('clickButton');
clickButton.addEventListener('click', () => {
    clickCount++;
    result.textContent = `Ви клікнули ${clickCount} разів. Клавіатура зламалась.`;
});
// 4. Напиши функцію, яка приймає масив чисел і колбек-функцію. Функція повинна застосовувати колбек-функцію до кожного елементу масиву та повертати новий масив, що містить результати застосування колбек-функції до кожного елементу.

function applyCallbackToEachElement(array, callback) {
    return array.map(callback);
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let squareCallBack = (num) => num * 2;
let resultCallback = applyCallbackToEachElement(arr, squareCallBack);
console.log(resultCallback);    

// 5. Створіть функцію, яка розраховує дисконтну ціну на товар з урахуванням знижки. Функція повинна приймати вартість товару та відсоток знижки як аргументи. Використайте стрілкову функцію та колбек.
const calculateDiscountedPrice = (price, discount, callback) => {
    let discountedPrice = price - (price * discount / 100);
    return callback(discountedPrice);
}
const showDiscountedPrice = (price) => {
    console.log(`Ціна зі знижкою: ${price}`);
}
calculateDiscountedPrice(100, 10, showDiscountedPrice) // 90
