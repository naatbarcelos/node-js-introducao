const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stout
})


const minhaPrimeiraConstanteString = 'Minha primeira constante';
console.log(minhaPrimeiraConstanteString);

let leituraDeCampo;
readLine.question('Por favor digite alguma coisa:', input => {
    leituraDeCampo = input;
    console.log(`o usuario digitou: $(leituraDeCampo)`); 
});



