//AULA LAÇOS I

// exercício while

/*let num = Number(prompt("Digite um número. Para sair digite zero"));
let soma = 0;

while(num !== 0){
    soma = soma + num;//soma += num(igual)
    num = Number(prompt("Digite um número. Para sair digite zero"));
}
alert(`A soma dos números é ${soma}`);*/

// exercício for

/*let num = Number(prompt("Insira um número"));

for(let i = 0; i <= num; i++){
    console.log(i);
}*/

// exercício for com arrays

/*const num = [7, 6, 5, 2, 4, 3, 1];

for(let i = 0; i < num.length; i++){
    console.log(`O índice é ${i} é = ${num[i]}`);
}*/

// exercícios de fixação

// Pra guardar na cabeça 1

/*let tipoUsuario = prompt("Qual seu tipo de usuário: \n A \n B \n C").toUpperCase();

while(tipoUsuario !== "A"){
    console.log("Acesso negado");
    tipoUsuario = prompt("Qual seu tipo de usuário: \n A \n B \n C").toUpperCase();
};
alert("Boas-vindas, admin!");*/

// Pra guardar na cabeça 2

// Com array
/*const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = 0; i < num.length; i++){
    console.log(num[i]*2);
};*/

//só com uma variavel
/*let num

for(let i = 0; i <= 10; i++){
    num = i * 2;
    console.log(num);
};*/

//Pedindo os valóres ao usuário

let fator = +prompt("Escolha a tabuada");
let qtFator = +prompt("Escolha quantas vezes será multiplicado");

for(let i = 0; i <= qtFator; i++){
    console.log(`Tabuada de ${fator} com ${i} = ${i * fator}`);
}

// Pra guardar na cabeça 3

const strings = ["joão", "mateus", "pedro"];

for(let i = 0; i <= strings.length; i++){
    console.log(strings[i].toUpperCase());
};
