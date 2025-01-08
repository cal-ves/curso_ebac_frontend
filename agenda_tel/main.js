const form = document.querySelector('form')
const agenda = document.querySelector('tbody')
let listaTel = ''

form.addEventListener('submit', function(e){
    const head = document.getElementById('head')

    
    head.style.display = 'contents'
    e.preventDefault()
    novoContato()

})

function novoContato(){
    const nome = document.getElementById('nome-contato')
    const tel = document.getElementById('numero-contato')

    let linhaLista = '<tr>'
    linhaLista += `<td>${nome.value}</td>`
    linhaLista += `<td>${tel.value}</td>`
    linhaLista += `</tr>`

    listaTel += linhaLista

    agenda.innerHTML = listaTel
}