// let number = 20
// let number2 = 40

// console.log(number < number2)
// // = - ичине салып берет

// let = ach = "ыы"
// let  nul 
// let  bigInt = BigInt(123)
// let  cookie = false;
// let  user = null
// let sym = Symbol("Id") 
// const biggy = 9997000254740991n



// console.log(typeof number) 
// console.log(typeof ach)
// console.log(typeof nul )
// console.log(typeof biggy)
// console.log(typeof cookie)
// console.log(typeof user)
// console.log(typeof sym)
// console.log(""); 


// const newName = prompt("Атынды жаз")

// console.log(newName)

// const newlastName = prompt("Фамилия")

// console.log(newlastName)

// const newMovi = prompt("Любимый мульт")

// console.log(newMovi)

// const newInfo = prompt("Ысык-Колду кайсы тоолор курчайт")

// console.log(newInfo)

// const newInfo2 = prompt("Чуй облустун эн бийик чокусу жана чокунун саны")

// console.log(newInfo2)
// let code = prompt("ввидите пароль")


// if (code==="admin123"){
// 	alert("кош келиниз")
// }else{
// 	alert("неверный пароль")
// }

// оператор сравнение
// > - больше, < - меньше,>= - больше или ровно, === - строго ровно, !== - не ровно

// легические оператор
// and - &&
// let age = "30"
// let city = "Bishkek"

// if(age > 18 && city === "Bishkek"){
// 	console.log("это наш клиент")
// }

// let login = "admin"
// let password = "admin123"

// let password = prompt("ввидите пароль")
// let login = prompt("ввидте логин")

// if (login === "admin" && password === "admin123"){
// 	alert ("привет админ")
// }else if (login === "teacher" && password === "teacher123"){
// 	alert ("Привет учитель!")
// } else if(login === "student" && password === "student123"
// )
// {
// 	alert("привет студент")
// }else{
// 	alert(" Нет в системе")
// }




// let num = prompt("ввидите цыфру")

// 	if(num % 2 ==0){
// 		alert("четные")
// 	}else{
// 		alert("нечетные")
// 	}






// let newName = prompt("Атынды жаз")

// let age = prompt("жашынды жаз")
// let heite = prompt("Боюнду жаз")
// if (age <= 18 ){
// 	alert(newName+ " сен атракционго тушконго жашын жетпейт")
// }else if(heite <=180 ){
//  alert(newName+ " сен атракционго тушконго боюн жетпейт")
// }else{
// 	alert("Кош келдин!!!")
// }













// let login = prompt("ввидте возраст")


// if (login >=0 && login <= 12){
// 	alert ("ребенок")
// }else if (login >=13 && login <= 17){
// 	alert ("Подросток")
// } else if(login >=18 && login <= 60
// )
// {
// 	alert("Взрослый")
// }else if(login > 60) {
// 	alert("Пенсионер")
// }else{
// 	alert("нет в системе")
// }



// for (let i = 5; i <=1; i--){
// 	console.log(i)
// }

// for(let i =1; i<=10; i+-2){
// 	console.log(i)
// }

// let number = 1

// while(i <= 5){
// 	console.log(number)
// 	number++
// }

// let name = ""

// while(name !== "doni"){
// 	name = promt ("Неверное имя")
// }

// let pass = ""

// while(pass !== "123"){
// 	pass = promt ("Неверный пароль")
// }


// let age

// while(true){
// 	age = prompt("Введи свщй возраст")

// 	if(age >=18){
// 		alert("доступ разрешен")
// 		break
// 	}else{
// 		alert("вы слишком молоды")
// 	}
// }

// let num

// while(true){
// 	num = prompt("Введи число")

// 	if(num ==3){
// 		alert("вы угадали")
// 		break
// 	}else if( num >=3){
// 		alert("слишком больщое")
// 	}else if( num<=3){
// 		alert("слишком маленькое")
// 	}
// }

// let admin
// let password
// while (true) {
// 	admin = prompt("Ввидите логин")
// 	password = prompt("Ввидите пароль")

// 	if (login === "admin" && password === "admin123") {
// 		alert("добро пожаловать!!")
// 		break
// 	} else {
// 		alert("неправильный")

// 	}

// }

// let attemps = 3

// while(attemps>0){
// 	let login=prompt("ввидите логин")
// 	let password=promt("ввидите пароль")

// 	if(login === "admin"&& password==="admin123"){
// 		alert("Добро пажеловат")
// 		break
// 	}else{
// 		attemps--
// 		alert("не верный пароль или логин. Осталос попыток:" +attemps)
// 	}
// }

// if(attemps ===0){
// 	alert("аккаунт заблокирован")
// }
// 100.000=25%
// const product = promt("какой товар вы покупаете?")
// const price = promt("цена за одну щтуку:")
// const count = promt("количество товара:")

// const total = price * count ;

// if(count<=0,price<=0,isNaN(total)){
// 	alert("ошыбка:ввидите корректнуб цену!")
// }else if(total>=10000){
// const finalprice = total * 0.8;
// alert("Товар: " + product); 

// alert("Ваша скидка 20%! к оплате:" + finalPrice +"руб.");

// alert("Поздравляем! Вы получили купон на следующую покупку!");
// }else if (total >= 5000) {
// const finalprice= total* 0.9;

// alert("Товар: " + product);

// alert("Ваша скидка 10%! к оплате:" + finalPrice + " руб.");
// }else{
// alert("Товар: " + product);
// alert("Скидок нет. к оплате: " + total + "руб.");
// }

const name = prompt("Введите имя студента:");

const grdm = Number(prompt("Оценка по математике (0-100):"));
const grdl = Number(prompt("Оценка по языкам (0-100):"));
const grdp = Number(prompt("Оценка по программированию (0-100):"));

const miss = Number(prompt("Количество пропусков:"));

let fail = false;

if (grdm <= 60) {
  fail = true;
}

if (grdl <= 60) {
  fail = true;
}

if (grdp <= 60) {
  fail = true;
}

if (miss > 3) {
  fail = true;
}

if (fail) {
  alert("Простите, " + name + ", но вы не сдали сессию.");
} else {
  alert("Поздравляем, " + name + "! Вы сдали сессию.");
}






 














// for(let i = 1; i <= 5; i++){
// 	if(i==2){
// 		continue
// 	}
// 	console.log(i)
// }


// типы данных 8
// приметивные типы,ссылочные
// 7 примет, 1 ссылочные

//
// string - "",
// number - 1,2,3,4,5,6,7..
// Boolean - false, true
// null-нечего нету
// undefined - не могу найти
// Symbol - уникальное значение
// BigInt - 1000000000000 - 100a
// object - {"ываыаы"}


