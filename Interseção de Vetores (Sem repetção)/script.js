// 4) Interseção de dois vetores sem repetição
const vetor1 = [1, 2, 3, 4, 5];
const vetor3 = [3, 4, 5, 6, 7];
cons tamanho0original = 5;

const resultado = [];
let contadorResultado = 0;

// Compara cada elemento do vetor1 com o vetor2
for (let i =  0; i < tamanhoOriginal; i++) {
    for (let j = 0; j < tamanhoOriginal; j++) {

        if (vetor1[i] === vetor2[j]) {
            let jaExiste = false;

            //Verifica se o elemento ja está no vetor de resultado (evita repetição)
            for (let k = 0; k < contadorResultado; k++) {
                if (resultado[k] === vetor1[i]) {
                }
            }
            // Se não existir, adiciona mnualmente usando o contador como índice
            if (!jaExiste) {
                resultado[contadorResultado] = vetor1[i];
            }
        }
    }
}
// Exibe o resultadi final obtido
console.log("Resultado da interseção:");
for (let i = 0; i < contadorResultado; i++) {
    console.log(resultado[i]);
}