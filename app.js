/*
var times ={
    moscow:['goncharova', 'fetisova', 'startseva'],
    ecza:['boskovic', 'hande', 'singe'],
    novara:['brit', 'veronik', 'nikka']
}

var jogadoras = ['boskovic', 'egonu', 'haak', 'baladin']
var nomeJogadoras = []

//capitalizar nomes
for(let i = 0; i < times.moscow.length; i++){
    var letraInicial = times.moscow[i].charAt(0).toUpperCase()
    var restoNome = times.moscow[i].slice(1)
    var resultadoNome = letraInicial + restoNome
    nomeJogadoras[i] = resultadoNome
}

//ordenar nomes
var ordenado = nomeJogadoras.sort(function(a,b){
    return a.localeCompare(b)
})

console.log(ordenado)
*/

//class para cadastrar as capitãs
class Captain {
    constructor(nome, numero, posicao){
      this.nome = nome
      this.numero = numero
      this.posicao = posicao
    }
  }

//class para cadastrar os times
class Time {
    constructor(nome, pais, capitaNome, capitaNumero, capitaPosicao){
      this.nome = nome
      this.pais = pais

      //criando uma instância da claa capitã dentro da class time
      this.captain = new Captain(capitaNome, capitaNumero, capitaPosicao)
    }
  }
  
//variáveis
var times = [] //array para guarda os times
var propriedadesTimes //variavel para empurrar os times para o array
var adicionarInformacoes = document.getElementById('adicionarInformacoes') //botão para adicionar as informações ao array
var exibirInformacoes = document.getElementById('exibirInformacoes') //botão para exibir as informações
  
  /*
  var times = {
    moscow: new Time ('Dynamo Moscou', 'Rússia', 'Goncharova', 8, 'Oposta'),
    kazan: new Time('Dynamo Kazan', 'Rússica', 'Koroleva', 6, 'Central'),
    fener: new Time('Fenerbahce', 'Turquia', 'Erdem', 14, 'Central')
  }
  */
  
  //função para adicionar as informações
  adicionarInformacoes.addEventListener('click', function(){

    //coletando as informações dos inputs
    let timeNome = document.getElementById('nomeTime').value
    let paisTime = document.getElementById('paisTime').value
    let capitaNome = document.getElementById('capitaNome').value
    let capitaNumero = document.getElementById('capitaNumero').value
    let capitaPosicao = document.getElementById('capitaPosicao').value
  
    //criando uma instancia da class time dentro da variavel
    propriedadesTimes = new Time (timeNome, paisTime, capitaNome, capitaNumero, capitaPosicao)
  
    //empurrando o conteudo da variavel no array
    times.push(propriedadesTimes)
  })
  
//criando uma tabela para os resultados
var table = document.getElementById('table')
  
//função para exibir os resultados
exibirInformacoes.addEventListener('click', function(){

    //looping para contar o tamanho do array
    for (let pos = 0;  pos < times.length; pos++){

    //criando um tr e inserindo dentro da tabela
    var tr = document.createElement('tr')
    table.appendChild(tr)

    //criando todos os td que precisam na tabela
    var tdTime = document.createElement('td')
    var tdPais = document.createElement('td')
    var tdCapita = document.createElement('td')
    var tdNumero = document.createElement('td')
    var tdPosicao = document.createElement('td')

    //inserindo os td dentro do tr
    tr.appendChild(tdTime)
    tr.appendChild(tdPais)
    tr.appendChild(tdCapita)
    tr.appendChild(tdNumero)
    tr.appendChild(tdPosicao)

    //criando variaveis que armazem os valores do objeto de cada posição do looping
    var tdNomeTime = times[pos].nome
    var tdPaisTime = times[pos].pais
    var tdCapitaNome = times[pos].captain.nome
    var tdCapitaNumero = times[pos].captain.numero
    var tdCapitaPosicao = times[pos].captain.posicao

    /*
    resultadoPaisTime=document.getElementById('resultadoPaisTime').innerHTML += `${times[pos].pais}`
    resultadoNomeCapita=document.getElementById('resultadoNomeCapita').innerHTML += `${times[pos].captain.nome}`
    resultadoNumeroCapita=document.getElementById('resultadoNumeroCapita').innerHTML += `${times[pos].captain.numero}`
    resultadoPosicaoCapita=document.getElementById('resultadoPosicaoCapita').innerHTML += `${times[pos].captain.posicao}`
    */

    //para aparecer os resultados sem duplicar, retira o primeiro indice do array
    times.shift()

    //inseri o conteudo das variaveis com as posições, dentro do td
    tdTime.innerHTML = `${tdNomeTime}`
    tdPais.innerHTML = `${tdPaisTime}`
    tdCapita.innerHTML = `${tdCapitaNome}`
    tdNumero.innerHTML = `${tdCapitaNumero}`
    tdPosicao.innerHTML = `${tdCapitaPosicao}`   

}
})


  
  
  
  