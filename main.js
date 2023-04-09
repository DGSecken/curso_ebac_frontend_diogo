$(document).ready (function() {

$('form').on('submit', function(e) {
    e.preventDefault()
    const novoItem = $('#insere').val();
    const itemCriado = $(`<li>${novoItem}</li>`);
    
    $(novoItem).appendTo(itemCriado)
    $(itemCriado).appendTo('ul')
    $('#insere').val ('')

    $(itemCriado).click(function() {
        $(itemCriado).addClass('item-completado');
    })
})
})



