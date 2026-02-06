let str = prompt('coloque 3 frases separadas por ;');

let separa = str.split(';');

for (let i = 0; i < separa.length; i++) {
    separa[i] = separa[i].trim();
}

console.log(separa)


//   frase1;        frase2;          frase3

// Próximo nível (conceito, sem obrigação)

// Depois de limpar, você poderia:

// mostrar cada frase em uma linha

// numerar as frases

// contar quantas frases foram digitadas

