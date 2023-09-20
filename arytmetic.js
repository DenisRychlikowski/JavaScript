//! Zadanie 1 

// let x = 10; 
// let y = 17;
// let z = 23;

// if(y > x && y < z) {
//     document.write("y jest wiekszy od x i mniejszy od z<br />")
// }
// if(x<y && x<z) {
//     document.write("x jest najmniejsza wartoscia<br />")
// }
// if(z>y && z>x) {
//     document.write("z jest najwieksza wartoscia<br />")
// }

//! Zadane 2

let x = -21;
let y = 3421; 
let z = -212;

if(x>=0 && y>=0 && z>=0) {
    document.write("Wszystkie są dodatnie")
}
(x<0 && y<0 && z<0) ? document.write("Wszystkie są ujemne") : document.write("Znaki są różne")
// else if(x<0 && y<0 && z<0) {
//     document.write("Wszystkie są ujemne")
// } else {
//     document.write("Znaki są różne")
// }

//! Zadanie 3

// let a = prompt("Podaj dzien tygodnia")

// switch(a) {
//     case "poniedziałek":
//         document.write("Cały tydzień przed nami")
//         break;
//     case "wtorek":
//         document.write("Kiedy będzie wolne")
//         break;
//     case "środa":
//             document.write("Dopiero środek tygodnia")
//             break;
//     case "czwartek":
//             document.write("Już czwartek")
//             break;
//     case "piątek":
//         document.write("Wreszcie piątek!")
//         break;
//     case "sobota":
//         document.write("Czas na odpoczynek!")
//         break;
//     case "niedziela":
//         document.write("Jutro znowu poniedziałek")
//         break;
//     default:
//         document.write("nie podano dnia tygodnia")
//         break;
// }