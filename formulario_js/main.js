const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('acc-name')
let formValido = false

function validaNome(nomeCompleto)  {
    const nomeArray = nomeCompleto.split(' ');
    return nomeArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroConta = document.getElementById('acc-number')
    const valor = document.getElementById('dep-value')
    const msgSucesso = `Montante de <b>${valor.value}</b> depositado para o cliente <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroConta.value}</b>`;

    
    formValido = validaNome(nomeBeneficiario.value)
    if (formValido) {

        const containerMsgSucesso = document.querySelector('.mensagem-sucesso')
        document.querySelector('.mensagem-erro').style.display = 'none'
        document.querySelector('.mensagem-sucesso').innerHTML = msgSucesso
        containerMsgSucesso.style.display = 'block'

        nomeBeneficiario.value = ''
        numeroConta.value = ''
        valor.value = ''
    } else {
        nomeBeneficiario.style.border = '1px solid red'
        document.querySelector('.mensagem-erro').style.display = 'block'
    }

});

nomeBeneficiario.addEventListener('keyup', function(e){
    formValido = validaNome(e.target.value)

    if (!formValido) {
        nomeBeneficiario.classList.add('error')
        document.querySelector('.mensagem-erro').style.display = 'block'

    } else {
        document.querySelector('.mensagem-erro').style.display = 'none'
        nomeBeneficiario.classList.remove('error')

    }
    
})