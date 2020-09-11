console.log("fundamentos.js")

// Criação de variável 
// Nome seguindo a regra lowerCamelCase
// const = constante
const aluguelMensal = 500;
const aluguelAnual = 12 * aluguelMensal;

// String
console.log('Aluguel Anual = ' + aluguelAnual);

// Tipos números, strings e booleanos
const primeiroNome = "Patrick"; // let pode ser alterado
const segundoNome = "Libardo"; // const não pode ser alterado

// Comentado para não dar erro
// primeiroNome = 'Fulano';
// segundoNome = 'De Tal';

const idade = 16; // n° inteiro (int)
const altura = 1.76; // n° real (Float)
const peso = 102;

// Concatenação das Strings e Números com váriaveis
let frase1 = "Meu nome é " + primeiroNome + " " + segundoNome +
" e tenho " + idade + " anos, minha altura é de " + altura +
"m, e peso " + peso + "kg. Este sou eu!";

console.log(frase1);

// Uso de Template String para escrever uma frase
// Ao invés de aspas, usa-se a crase
frase2 = `Meu nome é ${primeiroNome} ${segundoNome} e tenho ${idade} anos, \
minha altura é de ${altura}m, e peso ${peso}kg. Este sou eu!`;

console.log(frase2);

// Variável do tipo booleano (boolean)
// São variáveis que recebem verdadeiro (true) ou falso (false)
const ceuEhAzul = true; // Verdadeiro
console.log('Tipo da variável Céu é azul:' + typeof(ceuEhAzul));

// Uso em controle de Fluxo com IF - ELSE
if (ceuEhAzul) {
    console.log("O céu é azul");
} else {
    console.log("Eu pensava que o céu fosse azul");
}

if (1 + 1 === 2) {
    console.log("1 + 1 nem sempre é 2!");
    console.log(typeof(1+1===2));
} else {
    console.log("Impossível!");
}

// Controle de Fluxo composto else if
let amigosNoCinema = 10;
if (amigosNoCinema === 0) {
    console.log("Vai sobrar mais Pipoca!");
} else if (amigosNoCinema < 10) {
    console.log("Vai dar para ver o filme sussa!");
} else {
    console.log("A gente veio aqui para fazer festa!");
}

// Laço ou Loop
amigosNoCinema = 0;
amigosNoCinema = amigosNoCinema + 1; // Incremento de 1 = 1
amigosNoCinema = amigosNoCinema + 1; // Incremento de 1 = 2
amigosNoCinema = amigosNoCinema + 1; // Incremento de 1 = 3
amigosNoCinema = amigosNoCinema + 1; // Incremento de 1 = 4
amigosNoCinema = amigosNoCinema + 1; // Incremento de 1 = 5
amigosNoCinema = amigosNoCinema + 1; // Incremento de 1 = 6
amigosNoCinema = amigosNoCinema + 1; // Incremento de 1 = 7
amigosNoCinema = amigosNoCinema + 1; // Incremento de 1 = 8
amigosNoCinema = amigosNoCinema + 1; // Incremento de 1 = 9
amigosNoCinema = amigosNoCinema + 1; // Incremento de 1 = 10
amigosNoCinema = amigosNoCinema + 1; // Incremento de 1 = 11
console.log(`Amigos no cinema: ${amigosNoCinema}`)

amigosNoCinema = 0;
while (amigosNoCinema < 10) {
    amigosNoCinema += 1; // Incremento de 1
}
console.log(`[While] Amigos no Cinema: ${amigosNoCinema}`);

amigosNoCinema = 0;
for (let i = 0; i < 10; i++) {
    amigosNoCinema++; // incremento de 1
}
console.log(`[for] Amigos no cinema: ${amigosNoCinema}`);

// Função
function adicionarDois(numero) {
    return numero + 2;
}

const respostaFinal = adicionarDois(8);
console.log(`Resposta Final = ${respostaFinal}`);

function digaOlah(primeiroNome, segundoNome, titulo, saudacao) {
    return `${primeiroNome} ${segundoNome}, ${titulo}, ${saudacao}`;
}
console.log(digaOlah('Patrick', 'Libardo', 'aluno', 'Aobaa!'));
console.log(digaOlah('Jack', 'Sparrow', 'capitão', 'Warrrr!'));

// Visbilidade e escopo
function adicionarCinco(numero) {
    // Variável criada dentro da função
    // Não pode ser vista fora dela sem o return
    const total = numero + 5;
    return total;
}

console.log("O valor total é: " + adicionarCinco(25));

const pessoa = {
    primeiroNome: 'Patrick',
    segundoNome: 'Libardo',
    peso: 102,
    altura: 1.76,
    idade: 16
};

console.log(pessoa);

const frase = `${pessoa.primeiroNome} ${pessoa.segundoNome}, tem \
${pessoa.idade} anos, pesa ${pessoa.peso}kg e mede ${pessoa.altura}m de altura.`;
console.log(frase);

// Objeto com Função
const pessoa2 = {
    primeiroNome: 'Patrick',
    segundoNome: 'Libardo',
    peso: 102,
    altura: 1.76,
    idade: 16,
    imc() {
        const valor = this.peso/(this.altura*this.altura);
        return valor;
    }
};

console.log(pessoa2.nome + " tem imc = " + pessoa2.imc());
pessoa2.peso = 78;
console.log("Emagrecendo o Patrick!: " + pessoa2.peso);
console.log(pessoa2.nome + " tem imc = " + pessoa2.imc());

// Objeto de Objeto - Notação Json
const pessoa3 = {
    nome: {
        primeiro: "Patrick",
        segundo: "Libardo",
    },
    endereco: {
        rua: 'dos bobos',
        numero: '0',
        cidade: 'Bruxxque'
    }
};

console.log(`${pessoa3.nome.primeiro} ${pessoa3.nome.segundo} mora \
na Rua ${pessoa3.endereco.rua} número ${pessoa3.endereco.numero} na cidade de \
${pessoa3.endereco.cidade}`);

// Arrays
const diaDaSemana = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado'
];

console.log(diaDaSemana);
console.log(diaDaSemana[0]);
console.log(diaDaSemana[6]);

for(let i=0; i<7; i++)
console.log(`O dia de hoje é ${diaDaSemana[i]}`);

// Array de Objetos
const cursos = [
    {professor: 'Tarcísio', UCr: 'LWEB'},
    {professor: 'Rodrigo', UCr: 'CMBD'},
    {professor: 'Rozana', UCr: 'Inglês'}
];

for(let i=0; i<cursos.length; i++)
console.log(`Nome: ${cursos[i].professor} - UCr: ${cursos[i].UCr}`)