//ЧИСЛА
/*console.log(40+52);
var myNamber = 10;
myNamber +=90;
console.log (myNamber);
console.log (Math.floor(5.1));
*/
// CТRIHG
/*var myString = "Hi, Vasya !";
console.log(myString + " How are you?");
console.log(myString.toUpperCase());*/

//Масивы
/*var names = ["Vasya", "Petya", "Ilya"];
console.log(names[0].toUpperCase());
names[0] = "Masha";
console.log(names[0]);
names.push("Sveta");
console.log(names);*/

//УСЛОВИЕ
/*if ("Vasya" != "Petya") {
	console.log("the condition is true".toUpperCase())
}
else{
	console.log(" ten less than five")
}*/

//ЦЫКЛЫ
/*for (var i = 1; i <= 10; i++) {
	if (i == 5) {
		break
	}
	console.log(i);
}

var names =  ["Vasya", "Petya", "Ilya"];
	for (var i  = 0; i < names.length; i++) {
		console.log(names[i]);
	}
var i = 0;
while(i < 10){
	console.log(i);
	i++;
};*/

//ФУНКЦИИ
/*function test(){
	console.log("Gqqqqq");
}
test();*/
/*function sum(a,b){
	console.log(a * b);
}
sum(10,33);
 
*/
/*function sum(a,b){
	return a + b;
}
var resalt = sum(10,12);
console.log(resalt);
var resal = sum(3,4);
console.log(resal);
console.log(sum(100,89));*/
// ОБЬЕКТЫ
/*var myObject = {
	name: "Вася ",
	sername: "Васин",
	age: 26
}
console.log(myObject.name);*/
/*let vopros = prompt('какое настоящее название JS ?', '' )
	if (vopros == 'ECMAScript') {
		alert('Верно!')
	}else{
		alert('Не знаете? ECMAScript')
	}*/

	/*let value = prompt('Ведите число', []);
	 if(value > 0){
	 	alert("1")
	 } else if (value < 0){
	 	alert("-1")
	 }else{
	 	alert("0")
	 }*/
	/*
	 let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}
// ?
let result = (a + b < 4) ? 'Мало': 'Много';*/
/*
let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}

Развивал сайт под рекламу, заработал около 3 доллара, вчера заработал 17 центов за клики по рекламе :)
eekonom.ru - 12 центов
pouznaval.ru - 5 центов

Учу JS)))

// c помощью ?
let message = (login == 'Сотрудник') ? 'Привет':
		      (login == 'Директор') ? 'Здравствуйте':
		      (login == '') ? 'Нет логина':
		      '';
		      */
 /*let userName = prompt( 'who is there ?', '')


 if (userName == 'admin') {

 let pass = prompt( 'Какой пароль ?')

 if (pass == 'i boss') {
 	alert( "Здравствуйте!" )
 } else if ( pass == '' || pass == null){
 	alert( "Отменено" ); 
 } else {
 	alert( ' Пароль веден не правильно! ');
 }

} else if ( userName == '' || userName == null  ){
	alert( "Отменено" );
} else {
	alert ( "i don't know you" );
}
*/
 /*
  let sum = 0;

while (true) {

  let value = +prompt("Введите число", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Сумма: ' + sum );*/
/*

for(i = 0; i <= 10; i++) {
	if ( i % 2 == 0) {
	alert( i);
 }
}*/
/*
for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
*/
let i = 0
while( i < 3 ){
	alert( `number ${i}!`);
	i++
}