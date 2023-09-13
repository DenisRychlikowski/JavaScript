let num1 = parseFloat(prompt("Podaj pierwsza liczbe"))
let num2 = parseFloat(prompt("Podaj druga liczbe"))

if(num2 == 0) {
    alert("NIE DZIEL PRZEZ 0")
} else {
    document.write("Dzielenie: ", num1 / num2)
}