document.write('Задание 1<br>');
let name = prompt('Введитете ваше имя', 'Николай');
let age = prompt('Введитете ваш возраст', '29');
let city = prompt('Введитете ваш город', 'Парохонск');
let phone = prompt('Введитете ваш номер телефона', '+375 44 474-45-67');
let email = prompt('Введитете ваш адрес электронной почты', 'Tesa@gmail.com');
let company = prompt('Введитете ваше место работы', 'Ижевский сталелитейный завод');
document.write('Меня зовут ', name, '. Мне ', age, ' лет. Я проживаю в городе ', city, ' и работаю в компании ', company, '. Мои контактные данные: ', phone, ', ', email, '. <br>');

document.write('Задание 2. Год рождения<br>');
let year = 2020 - age;
document.write(name, ' родился в ', year, ' году.');
