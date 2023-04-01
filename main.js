const form = document.getElementById('form')
form.addEventListener('submit', function(e) {
    e.preventDefault();
    validacao();
})

function validacao() {
var aNumber = document.getElementById('numero-a').value;
var bNumber = document.getElementById('numero-b').value;
if(aNumber < bNumber) {
    document.querySelector('.accept').style.display = 'block'
    document.querySelector('.error').style.display = 'none'
}else{
    document.querySelector('.error').style.display = 'block'
    document.querySelector('.accept').style.display = 'none'
    }
}





