$(document).ready(function() {
    const tarefas = []
    
    
    $('form').on('submit', function(e){
        e.preventDefault()

        addTask()
        
    })

    function addTask(){
        const novaTarefa = $('#nova-task').val()
        const novoItem = $(`<li>${novaTarefa}
            <button type="button">X</button></li>`)

        $(novoItem).appendTo('ul')
        $(novaTarefa).val('')
        $('#nova-task').val('')
            
        $(novoItem).click(function(){
        $(novoItem).css("display", "none")
        })
    }
})