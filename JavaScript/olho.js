// CloudNest - mostrar/ocultar senha

// Pega o olhinho na página (o "." significa que é uma classe)
let btn = document.querySelector('.lnr-eye');

// Quando clicar no olhinho, roda a função abaixo
btn.addEventListener('click', function() {

    // Pega o campo de senha (o "#" significa que é um id)
    let input = document.querySelector('#password');

    // Se o campo está como senha (bolinhas), vira texto visível.
    // Se está visível, volta a ser senha.
    if(input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type', 'password');
    }

});