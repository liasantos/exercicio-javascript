/* AULA 5 - MANIPULANDO ELEMENTOS DA PÁGINA */

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigade por clicar</b>"; //modifica objetos por causa do DOM / permite injetar qualquer html
    console.log(document);
    //alert("Obrigade por clicar")
}

function redirecionar(){
    window.open("https://digitalinnovation.one/"); // abre em uma nova aba
    //window.location.href = "https://digitalinnovation.one/"; // abre na mesma janela
}

function trocar (elemento){
    elemento.innerHTML = "Obrigade por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigade por passar o mouse"; // modifica o texto quando passa o mouse
    //alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("página carregada");
}

function funcaochange(elemento){
    console.log(elemento.value); //retorna o valor selecionado
}



/* AULA 4 - FUNÇÕES */

//function soma(n1, n2){
//    return n1 + n2;
//}

//alert(soma(5, 10)); //chama a função soma e dá valores para as var

/*function validaIdade(idade){
    var validar; // var pode ser global ou local
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar; // retorna true or false
    }
var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));*/

//function setReplace(frase, nome, novo_nome){
//    return frase.replace(nome, novo_nome);
//}

//alert(setReplace("Vai Japão", "Japão", "Brasil")); //chama a função replace e substitui os valores








/* aula 3 - laços de repetição, condicionais, contador e datas */

/*
var d = new Date();
//alert(d.getMinutes()); //retorna os minutos
alert(d.getDay());
//alert(d.getHours());
//alert(d.getMonth()+1); //retorna o mês -> sempre conta do 0, tem que dar +1 para retornar mês certo
//alert(d); //retorna a data
*/

/*
var count;
for(count=0; count <=5; count++){
    alert(count);
}
*/

/*

var count = 0;
while (count <= 5){
    console.log(count);
    //count = count +1;
    count++; //contador ele +1
    alert(count);
};

*/

/*

var idade = prompt("Qual a sua idade?") ; //para receber valor do usuário
//var idade = 18;
//if (idade > 18){ // retornará menor de idade, porque a condição só retorna verdadeiro se for MAIOR
if (idade >= 18){ //retornará maior de idade, porque a condição para verdadeiro é MAIOR IGUAL
alert("maior de idade");
}else{
    alert("menor de idade");
}; 

*/








/* aula 2 - variáveis, strings, propriedades, lista

1var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}] //lista de dicionários - valores de valores
console.log(frutas);
alert(frutas[1].nome);

//var fruta = {nome:"maça", cor:"vermelha"} //propriedades da variável
//console.log(fruta)
//console.log(fruta.nome); //retorna apenas a propriedade da variável
//alert(fruta.cor);

//var lista = ["maçã", "pêra", "laranja"];
//console.log(lista.length); //retorna quantos itens na lista
//lista.push("tomate");
//console.log(lista[0]); //retorna primeiro elemento da lista
//console.log(lista.toString()[0]); //retorna primeiro elemento da string
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(' . ')); //transforma em string e separa os elementos com o separador definido
//console.log(lista.reverse()); //inverte a lista
//console.log(lista);
//lista.push("uva"); //push acrescenta
//lista.pop(); //remove o último elemento da array
//console.log(lista);

//console.log(lista[1]); //entende os itens da lista na ordem, como posição 0,1,2,3, etc
//alert(lista[0]);
*/




/* aula1 introdução
var nome = "Lia Santos"; //tipagem dinâmica, não precisa declarar o tipo, ele entende automático que é string
//var idade = 26; // colocando entre aspas duplas ele entende como string, sem aspas entende como inteiro
//var idade2 = 10;
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos"); //cria um alert popup
//alert(idade + idade2);
console.log(nome); //f12 console 
//console.log(idade + idade2);
console.log(n1 * n2); 
//console.log(frase.toLowerCase()); //caixa baixa
//console.log(frase.toUpperCase()); //caixa alta
//console.log(frase.replace("Japão", "Brasil")); //substitui
//alert(frase.replace("Japão","Brasil"));

*/