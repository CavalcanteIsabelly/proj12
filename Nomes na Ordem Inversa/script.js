// 1) Programa de leitura e inversão de nomes
const nomes = ["Anna","Isabelly", "Aliane" "Mikhael", "Josafá", "Alana", "Lucca"];
const totalNomes = 7;

console.log("Liatagem dos nomes na ordem inversa:");

// Percorre o vetor do último elemento (indice 6) até o primeiro (indice 0)
for (let i = totalNomes - 1; i >= 0; i--) {
    console.log(nomes[i]);
}