document.write('Задание 1<br>');
const name = prompt('Введитете ваше имя', 'Николай');
const age = prompt('Введитете ваш возраст', '29');
const city = prompt('Введитете ваш город', 'Парохонск');
const phone = prompt('Введитете ваш номер телефона', '+375 44 474-45-67');
const email = prompt('Введитете ваш адрес электронной почты', 'Tesa@gmail.com');
const company = prompt('Введитете ваше место работы', 'Ижевский сталелитейный завод');
document.write('Меня зовут ', name, '. Мне ', age, ' лет. Я проживаю в городе ', city, ' и работаю в компании ', company, '. Мои контактные данные: ', phone, ', ', email, '. <br>');

document.write('<br>Задание 2. Год рождения<br>');
const year = 2020 - age;
document.write(name, ' родился в ', year, ' году.<br>');

document.write('<br>Задание 3. Сумма трех цифр<br>');
const sixNumber = prompt('Введите 6 чисел', '123402');
let i=0;
let sumStart3 = 0;
let sumEnd3 = 0;
for (i; i<sixNumber.length/2; i++){
    sumStart3 += +sixNumber[i];
}
for (i=sixNumber.length/2; i<sixNumber.length; i++){
    sumEnd3 += +sixNumber[i];
}
if (sumStart3===sumEnd3){
    document.write('Да, сумма первых чисел равна сумме последних<br>')
} else {
    document.write('Нет, сумма первых чисел НЕ равна сумме последних<br>')
}

document.write('<br>Задание 4. Положительное число или отрицательное<br>');
let a1 = prompt('Введи число а1', '5');
if (a1>0){
    document.write('Верно<br>')
} else if (a1<0){
    document.write('Не верно<br>')
} else {
    document.write('Вы ввели 0<br>')
}

document.write('<br>Задание 5. Математические выражения<br>');
let a=10, b=2;
document.write('Сума чисел: ', a+b, '<br>Разность чисел: ', a-b, '<br>Произведение чисел: ', a*b, '<br>Отношение чисел: ', a/b, '<br>');
if (a+b > 1){
    document.write('Сумма в квадрате (если сумма  больше 1): ', (a+b)**2, '<br>')
}

document.write('<br>Задание 6. Проверка на И/ИЛИ<br>');
if ((a > 2 && a < 11) || (b >= 6 && b < 14)){
    document.write('Верно<br>')
} else {
    document.write('Не верно<br>')
}

document.write('<br>Задание 7. Определить четверть часа<br>');
let n = prompt('Введите число от 0 до 59 для определения в какой четверти часа оно находится', '23');
if (n >= 0 && n <= 14) {
    document.write('Число ', n, ' находится в первой четверти часа<br>')
} else if (n >= 15 && n <= 29){
    document.write('Число ', n, ' находится во второй четверти часа<br>')
} else if (n >= 30 && n <= 44){
    document.write('Число ', n, ' находится в третьей четверти часа<br>')
} else if (n >= 45 && n <= 59){
    document.write('Число ', n, ' находится в четвертой четверти часа<br>')
} else {
    document.write('Вы ввели неправильное число<br>')
}

document.write('<br>Задание 8. Определить декаду месяца<br>');
let day = prompt('Введите число от 1 до 31 для определения декады месяца', '13');
if (day >= 1 && day <= 10) {
    document.write('Число ', day, ' находится в первой декаде месяца<br>')
} else if (day >= 11 && day <= 20){
    document.write('Число ', day, ' находится во второй декаде месяца<br>')
} else if (day >= 21 && day <= 31){
    document.write('Число ', day, ' находится в третьей декаде месяца<br>')
} else {
    document.write('Вы ввели неправильное число<br>')
}

document.write('<br>Задание 9. Перевод дней в года, месяцы, недели, часы, минуты, секунды<br>');
let days = prompt('Введите количество дней', '457');
if (days >= 365) {
    document.write(days, ' дней - это ', days/365, ' лет<br>');
} else{
    document.write(days, ' дней - это меньше 1 года<br>');
}
if (days >= 31) {
    document.write(days, ' дней - это ', days/31, ' месяцев<br>');
} else{
    document.write(days, ' дней - это меньше 1 месяца<br>');
}
if (days >= 7) {
    document.write(days, ' дней - это ', days/7, ' недель<br>');
} else{
    document.write(days, ' дней - это меньше 1 недели<br>');
}
document.write(days, ' дней - это ', days*24, ' часов<br>');
document.write(days, ' дней - это ', days*24*60, ' минут<br>');
document.write(days, ' дней - это ', days*24*60*60, ' секунд<br>');

document.write('<br>Задание 10. Определить месяц и пору года<br>');
if (day<=365) {
    document.write(day, ' день - это ', Math.round((+day+15)/31), ' месяц<br>');
} else  if (day<=1460){
    document.write('Вы ввели больше одного года. В итоге ', day, ' дней - это ', Math.round((+day+15)/365), ' года и ', Math.round(((+day+15)%365)/31), ' месяцев<br>');
} else {
    document.write('Вы ввели больше одного года. В итоге ', day, ' дней - это ', Math.round((+day+15)/365), ' лет и ', Math.round(((+day+15)%365)/31), ' месяцев<br>');
}
let month =  Math.round(((+day+15)%365)/31);
switch (month){
    case 1:
    case 2:
    case 12:
        document.write('Это зима<br>');
        break;
    case 3:
    case 4:
    case 5:
        document.write('Это весна<br>');
        break;
    case 6:
    case 7:
    case 8:
        document.write('Это лето<br>');
        break;
    case 9:
    case 10:
    case 11:
        document.write('Это осень<br>');
        break;
}