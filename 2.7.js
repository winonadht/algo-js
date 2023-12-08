let n = parseFloat(prompt("Saisissez un numéro n :",));
let sum = 0 

for (let i = 1; i <= n; i++) {
    let number = prompt("Saisissez un numero" + i );

    sum += parseFloat(number);
    
}

console.log("La somme des nombres est : " + sum);