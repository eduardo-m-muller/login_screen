// pega os elementos da tela de login
const botaoEntrar = document.getElementById("entrarBtn");
const inputUsuario = document.getElementById("username");
const inputSenha = document.getElementById("password");

botaoEntrar.addEventListener("click", function(event) {
    const usuario = inputUsuario.value;
    const senha = inputSenha.value;

    // nao deixa entrar com campo vazio
    if (usuario === "" || senha === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // so pra testar por enquanto, depois tiro
    console.log("Usuário:", usuario);
    console.log("Senha:", senha);
});