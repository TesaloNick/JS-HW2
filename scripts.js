// document.write('Задание 1<br>');
// const name = prompt('Введитете ваше имя', 'Николай');
// const age = prompt('Введитете ваш возраст', '29');
// const city = prompt('Введитете ваш город', 'Парохонск');
// const phone = prompt('Введитете ваш номер телефона', '+375 44 474-45-67');
// const email = prompt('Введитете ваш адрес электронной почты', 'Tesa@gmail.com');
// const company = prompt('Введитете ваше место работы', 'Ижевский сталелитейный завод');
// document.write('Меня зовут ', name, '. Мне ', age, ' лет. Я проживаю в городе ', city, ' и работаю в компании ', company, '. Мои контактные данные: ', phone, ', ', email, '. <br>');

// document.write('Задание 2. Год рождения<br>');
// const year = 2020 - age;
// document.write(name, ' родился в ', year, ' году.<br>');

// document.write('Задание 3. Сумма трех цифр<br>');
// const sixNumber = prompt('Введите 6 чисел', '123402');
// let i=0;
// let sumStart3 = 0;
// let sumEnd3 = 0;
// for (i; i<sixNumber.length/2; i++){
//     sumStart3 += +sixNumber[i];
// }
// for (i=sixNumber.length/2; i<sixNumber.length; i++){
//     sumEnd3 += +sixNumber[i];
// }
// if (sumStart3===sumEnd3){
//     document.write('Да, сумма первых чисел равна сумме последних<br>')
// } else {
//     document.write('Нет, сумма первых чисел НЕ равна сумме последних<br>')
// }

// document.write('Задание 4. Положительное число или отрицательное<br>');
// let a1 = prompt('Введи число а1', '5');
// if (a1>0){
//     document.write('Верно<br>')
// } else if (a1<0){
//     document.write('Не верно<br>')
// } else {
//     document.write('Вы ввели 0<br>')
// }

// document.write('Задание 5. Математические выражения<br>');
// let a=10, b=2;
// document.write('Сума чисел: ', a+b, '<br>Разность чисел: ', a-b, '<br>Произведение чисел: ', a*b, '<br>Отношение чисел: ', a/b, '<br>');
// if (a+b > 1){
//     document.write('Сумма в квадрате (если сумма  больше 1): ', (a+b)**2, '<br>')
// }

// document.write('Задание 6. Проверка на И/ИЛИ<br>');
// if ((a > 2 && a < 11) || (b >= 6 && b < 14)){
//     document.write('Верно<br>')
// } else {
//     document.write('Не верно<br>')
// }

document.write('Задание 7. Определить четверть часа<br>');
let n = prompt('Введите число от 0 до 59 для определения в какой четверти часа оно находится', '23');
if (n >= 0 && n <= 14) {
    document.write('Число находится в первой четверти<br>')
} else if (n >= 15 && n <= 29){
    document.write('Число находится во второй четверти<br>')
} else if (n >= 30 && n <= 44){
    document.write('Число находится в третьей четверти<br>')
} else if (n >= 45 && n <= 59){
    document.write('Число находится в четвертой четверти<br>')
} else {
    document.write('Вы ввели неправильное число<br>')
}