//! Zadanie 3 

// let data = new Date()

// document.write(data.toLocaleString())
// document.write(data.toUTCString())

//! Zadanie 4 

// document.write("Round ", Math.round((Math.random() * 10000000).toFixed(3) + 10000000), "<br />")
// document.write("Ceil ", Math.ceil((Math.random() * 10000000).toFixed(3)), "<br />")
// document.write("Floor ", Math.floor((Math.random() * 10000000).toFixed(3)), "<br />")
// document.write("liczba ",(Math.random() * 10000000).toFixed(3), "<br />")

//! Zadanie 6 

// let num = new Int32Array(10)

// for (let index = 0; index < 10; index++) {
//     num[index] = Math.round((Math.random() * 100) + 100)
// }

// document.write(num.join(" - "), "<br />")

// num.sort()
// document.write(num.join(" - "), "<br />")

// num.reverse()
// document.write(num.join(" - "), "<br />")

//? Zadanie egzaminacyjne 2

let num = []

for (let index = 0; index <= 100; index++) {
    num[index] = Math.round(Math.random() * 5) + 1
}
document.write(num, "<br />")

let counter = 0

for (let index = 1; index < 7; index++) {
    num.map(ele => {
        if(index == ele) {
            counter++
        }
    })
    document.write(index, " ", counter, "<br />")
    counter = 0
}

document.write(num.length)

// let btn = document.querySelector(".btn")

// btn.addEventListener("click", () => {
//     let a = parseInt(prompt("Podaj długość boku a"))
//     let b = parseInt(prompt("Podaj długość boku b"))
//     let c = parseInt(prompt("Podaj długość boku c"))

//     let ob = a + b + c;
//     let p = ob / 2
//     let pole = Math.sqrt(p*(p-a)*(p-b)*(p-c))

//     alert("Obwód wynosi: " + ob)
//     alert("Pole wynosi: " + pole + " cm<sup>2</sup>")
// })