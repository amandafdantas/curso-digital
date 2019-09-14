// alert("olá mundo!");

var nome = "Amanda";
var idade = 25;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";

// alert(nome + "tem " + idade + " anos");
// alert(idade + idade2);

console.log(nome);
console.log(idade + idade2);

console.log(frase.replace("Japão", "Brasil")); // troca a palavra Japão por Brasil
// alert(frase.replace("Japão", "Brasil"));

console.log(frase.toLocaleUpperCase()); // imprime a frase toda em letra maiúscula
console.log(frase.toLocaleLowerCase()); // imprime a frase toda em letra minúscula

var n1 = 5;
var n2 = 3;

console.log(n1 * n2); // multiplica n1 x n2


var lista = ["maça","pera","laranja"];
lista.push("uva"); // adiciona mais um item na lista.
console.log(lista[1]);
console.log(lista);
lista.pop(); // exclui o último item da lista.
console.log(lista);
// alert(lista[1]);
console.log(lista.length); // mostra o tamanho do array
console.log(lista.reverse()); // método para inverter os itens da lista
console.log(lista.toString()); // método que transforma em string
console.log(lista.toString()[0]); // imprime a primeira posição, no caso a primeira letra da string.
console.log(lista.join(" - ")); // inclui o traço como separador.

/* dicionário
var fruta = {nome:"maçã", cor:"vermelha"};
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);
*/

// lista de dicionário
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);

// Aula 03 - Condicionais, laços de repetição e Date 

var idade = prompt("Qual a sua idade?");

if (idade >= 18) {
    alert("Maior de idade");
} else {
    alert("Menor de idade");
};


var count = 0;
while (count < 5) {
    console.log(count);
    count = count + 1;
}

var n;
for (let n = 0; n < 5; n++) {
    alert(n);
}

var d = new Date(); // data atual
alert(d);
alert(d.getMonth()+1); // começa do zero, então para sair o mẽs atual, somar mais um 

/*
function soma(n1, n2) {
    return n1 + n2; 
}

alert(soma(5, 10));

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome);
}

alert(setReplace("Vai Japão", "Japão", "Brasil"));

*/

 
function clicou() {
    // alert("Obrigada por clicar!!");
    //console.log(document.getElementById("agradecimento"));
    document.getElementById("agradecimento").innerHTML = "<b>Obrigada por clicar!</b>"; // innerHTML adiciona um elemento HTML
}

function redirecionar() {
    window.open("https://www.google.com/"); // abre o link em outra página
    //window.location.href = "https://www.google.com/"; // abre o link na mesma página
}

function trocar(elemento) {
    //alert("trocar texto");
    //document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse!";
    elemento.innerHTML = "Obrigada por passar o mouse!";
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
    elemento.innerHTML = "Passe o mouse aqui!";
}

function load() {
    alert("Página Carregada!!");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}