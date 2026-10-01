// mostrar/ocultar senha

// pega o olhinho
let btn = document.querySelector('.lnr-eye');

// clicou no olho
btn.addEventListener('click', function() {

    let input = document.querySelector('#password');

    // se ta como senha vira texto, se ta texto volta pra senha
    if(input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type', 'password');
    }

});