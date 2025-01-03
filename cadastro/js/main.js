$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            cep: {
                required: true
            },
            endereco: {
                required: true
            }
        },
        messages: {
            nome: "Este campo é obrigatório"
        },
        messages: {
            cpf: "Este campo é obrigatório"
        },
        messages: {
            email: "Este campo é obrigatório"
        },
        messages: {
            telefone: "Este campo é obrigatório"
        },
        messages: {
            cep: "Este campo é obrigatório"
        },
        messages: {
            endereco: "Este campo é obrigatório"
        },
        submitHandler: function(form) {
            alert("Cadastro efetuado com sucesso")
            $('input').val('')
        },
        
    })
})