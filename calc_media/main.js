const form = document.getElementById('form')
const imgAprovado = '<img src="./images/aprovado.png" />'
const imgReprovado = '<img src="./images/reprovado.png" />'
const totalAtividades = []
const notas = []
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'

let linhas = ''

form.addEventListener("submit", function(e){
    e.preventDefault()

    addLinhas()
    atualizaTabela()
    atualizaMediaFinal()

})

function addLinhas() {
    const atividade = document.getElementById('nome')
    const nota = document.getElementById('nota')

    if (totalAtividades.includes(atividade.value)){
        alert(`A atividade: ${atividade.value} já foi inserida`)
    } else {
        let linha = '<tr>'
        linha += `<td>${atividade.value}</td>`
        linha += `<td>${nota.value}</td>`
        linha += `<td>${nota.value >= 7 ? imgAprovado :  imgReprovado}</td>`
        linha += '</tr>' 
    
        linhas += linha
    }

    totalAtividades.push(atividade.value)
    notas.push(parseFloat(nota.value))

    atividade.value = ''
    nota.value = ''
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal()

    document.getElementById('media-final-valor').innerHTML = mediaFinal
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= 7 ? spanAprovado : spanReprovado
}

function calculaMediaFinal() {
    let somaNotas = 0

    for (let i = 0; i <notas.length; i++){
        somaNotas += notas[i]
    }

    return somaNotas / notas.length

}