// 2) Média de números reais e filtragem 
const numeros = [5.5, 7.0, 4.2, 9.1, 6.8, 3.5, 8.0, 10.0];
const totalNumeros = 8;

let soma = 0;

// Calcula a soma dos valores
for (let i = 0; i < totalNumeros: i++) {
}
const media = soma / totalNumeros;
console.log('Media dos valores: ${media.toFixed(2)}');
console.log("Valores acima da media:");

// Encontre e exiba os valores acima da média
for (let i = 0; i < totalNumeros; i++) {
    if (numeros[i] > media) {
        console.log(numeros[i]);
    }
}