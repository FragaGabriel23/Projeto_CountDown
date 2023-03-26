//pega os elementos que serão alterados pelo id
const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

//data final 
const dataBanca = "16 sept 2023"

function countDown(){

    //transforma a string de dataBanca em um objeto data dataFim
    const dataFim = new Date(dataBanca)
    //constante objeto com data de hoje
    const dataHoje= new Date()
    //pega os milessegundos resultante da subtração das datas e divide por 1000
    const segundoTotal = (dataFim - dataHoje)/1000

    //pega os segundos totais e divide por 60, por 60 e por 24
    const finalDias = Math.floor(segundoTotal / 60 / 60 /24);
    //pega os segundos totais e divide por 60, por 60 e soma o resto dividido por 24
    const finalHoras= Math.floor(segundoTotal / 60 / 60) % 24;
    //pega os segundos totais e divide por 60 e soma o resto dividido por 60
    const finalMinutos= Math.floor(segundoTotal / 60) % 60;
    //pega os segundos totais e e soma o resto dividido por 60
    const finalSegundos= Math.floor(segundoTotal ) % 60;

    //substitui os HTML
    dia.innerHTML = formatoTempo(finalDias)
    hora.innerHTML = formatoTempo(finalHoras)
    minuto.innerHTML = formatoTempo(finalMinutos)
    segundo.innerHTML = formatoTempo(finalSegundos)

}

function formatoTempo(tempo){

    //se tempo <10 retorna com 0 na frente se ñ apenas retorna o tempo 
    return tempo <10? `0${tempo}` : tempo;
}


//execulta a função countDown
countDown();
//cria um intervalo de execução da função com um delay de 1000 milessegundos(1s)
setInterval(countDown, 1000)


