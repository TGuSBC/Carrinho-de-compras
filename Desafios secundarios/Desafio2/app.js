let a = Number(prompt('digite o primeiro numero'));
let b = Number(prompt('digite o segundo numero'));

if(isNaN(a) || isNaN(b)){
    console.log(`Precisa ser um numero`);
} else {
    let soma = a + b;

console.log(`o resultado da soma de ${a} + ${b} é ${soma}`);
}
