let usuario = prompt("Qual o seu nome: ");

let renda_m = Number(prompt("Qual sua renda mensal: "));
let validacao_renda = isNaN(renda_m);


while (validacao_renda === true) {
    renda_m = Number(prompt("Qual sua renda mensal: "));
    validacao_renda = isNaN(renda_m);
}

let qtd_despesas = Number(prompt("Qual sua quantidade de despesas: "));
let validacao_despesas = isNaN(qtd_despesas);


while (validacao_despesas === true) {
    qtd_despesas = Number(prompt("Qual sua quantidade de despesas: "));
    validacao_despesas = isNaN(qtd_despesas);
}

let soma_despesas = 0;
let despesas = qtd_despesas;


if (despesas < 1) {
    despesas = 1;
} else if (despesas > 5) {
    despesas = 5;
}


for (let x = 0; x < despesas; x++) {
    let valor_despesas = Number(prompt("Qual o valor da despesa"));

    while (isNaN(valor_despesas)) {
        valor_despesas = Number(prompt("Digite um valor válido para a despesa"));
    }

    soma_despesas = soma_despesas + valor_despesas;
}

let sobra = renda_m - soma_despesas;


if (soma_despesas > renda_m) {
    console.log("⚠️ Atenção: você gastou mais do que ganhou");
}
else if (sobra >= renda_m * 0.3) {
    console.log("✅ Ótimo: boa margem de sobra");
}
else {
    console.log("🙂 Ok: dá para melhorar a sobra");
}

let resultado = `
Nome: ${usuario}
Renda: R$ ${renda_m}
Despesas: R$ ${soma_despesas}
Sobra: R$ ${sobra}
`

console.log(resultado);

