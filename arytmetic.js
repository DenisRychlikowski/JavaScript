//! Zadanie 1 

// function dodawanie() {
//     let suma = 0;
//     for (let index = 0; index < arguments.length; index++) {
//         suma+=arguments[index]
//     }
//     return suma;
// }
// function odejmowanie() {
//     let suma = arguments[0];
//     for (let index = 1; index < arguments.length; index++) {
//         suma-=arguments[index]
//     }
//     return suma;
// }
// function mnozenie() {
//     let suma = arguments[0];
//     for (let index = 1; index < arguments.length; index++) {
//         suma*=arguments[index]
//     }
//     return suma;
// }
// function dzielenie() {
//     if(arguments[1] == 0) {
//         alert("Nie dzielimy przez 0")
//     } else {
//         return arguments[0] / arguments[1]
//     }
// }

// document.write("Dodawanie: ",dodawanie(2, 2, 2, 2) , "<br />")
// document.write("Odejmowanie: ",odejmowanie(20, 5, 5, 2) , "<br />")
// document.write("Mnozenie: ",mnozenie(2, 2, 2, 2) , "<br />")
// document.write("Dzielenie: ",dzielenie(2, 2) , "<br />")

//! Zadanie 2 

// const silnia = (silnia) => {
//     let suma = 1;
//     for (let index = 1; index <= silnia; index++) {
//         suma *= index;
//     }
//     return suma
// }

// console.log(silnia(4))

// const power = (potega) => {
//     let suma = 2
//     for (let index = 1; index < potega; index++) {
//         suma * = 2
//     }

//     return suma
// }

// console.log(power(4))