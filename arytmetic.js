//! Zadanie egzaminacyjne 2 

let jumpScare = document.querySelector(".kaczka__Jump")
let jumpScareBig = document.querySelector(".kaczka__Jump__big")

jumpScare.addEventListener("click", () => {
    jumpScareBig.style.display = "block" 
    // jumpScare.style.height = "100vh"
})

//! Zadanie egzaminacyjne 1

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

//! Zadanie 3 

//? HTML

//! Zadanie  4

// let Notifi = document.querySelector(".Notifi")
// let localTest = document.querySelector(".test")

// localTest.addEventListener("mouseover", () => {
//     Notifi.textContent = "Najechałeś na mnie"
// })
// localTest.addEventListener("mouseout", () => {
//     Notifi.textContent = "I poszoł"
// })

//! Zadanie 5 

// let localTest = document.querySelector(".test")
// let countElement = document.querySelector(".count")
// let counter = 0;

// countElement.textContent = counter

// localTest.addEventListener("click", () => {
//     counter++;
//     countElement.textContent = counter
// })

const validateEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};