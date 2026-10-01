const botaoEntrar = document.getElementById("entrarBtn");
const inputUsuario = document.getElementById("username");
const inputSenha = document.getElementById("password");

botaoEntrar.addEventListener("click", function(event) {
    const usuario = inputUsuario.value;
    const senha = inputSenha.value;
    
    if (usuario === "" || senha === "") {
    alert("Por favor, preencha todos os campos.");
    return;
    }

    console.log("Usuário:", usuario);
    console.log("Senha:", senha);
    
});