const botoes = document.querySelectorAll (".botao");
const textos = document.querySelectorAll (".aba-conteudo");

for(let i=0;i < botoes.length; i++){
    botoes[i].onclick = function(){

        for(let j=0;j < botoes.length; j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
      botoes[i].classList.add("ativo");
      textos[i].classList.add("ativo");
    }
    console.log();
}

const contadores = document.querySelectorAll (".contador");
let tempoAtual = new Date ();
const tempoObjetivo1 = new Date("2025-12-12T00:00:00") - tempoAtual;
contadores[0].textContent = tempoObjetivo1;
const tempoObjetivo2 = new Date("2029-12-25T00:00:00") - tempoAtual;
contadores[1].textContent = tempoObjetivo2;
const tempoObjetivo3 = new Date("2027-07-10T00:00:00") - tempoAtual;
contadores[2].textContent = tempoObjetivo3;
const tempoObjetivo4 = new Date("2026-06-15T00:00:00") - tempoAtual;
contadores[3].textContent = tempoObjetivo4;