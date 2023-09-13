let money = prompt("Podaj hajs")
let banknotyMonety = [ 500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01 ] 

document.write("Money: ", money, '<br />')

for(let i = 0; i <= banknotyMonety.length; i++) {
    let counter = Math.floor(money / banknotyMonety[i]) 
    if(money >= banknotyMonety[i]){
        document.write(counter," x ", banknotyMonety[i], "zł<br />")
        money = money - (counter * banknotyMonety[i]) 
        money = money.toFixed(2)
    }
}