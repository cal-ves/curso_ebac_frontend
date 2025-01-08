const form = document.querySelector('form')
const pResult = document.querySelector('p')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const numMin = document.getElementById('num-min')
    const numMax = document.getElementById('num-max')
    const minValue = parseInt(numMin.value)
    const maxValue = parseInt(numMax.value)

    let resultado = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue)
    pResult.innerHTML = `O número sorteado foi ${resultado}`



    
})
