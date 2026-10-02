// --- TELA DE LOGIN ---
const botaoEntrar = document.getElementById("entrarBtn");
const inputUsuario = document.getElementById("username");
const inputSenha = document.getElementById("password");

// Só executa o código se o botão de entrar existir na página atual
if (botaoEntrar) {
    botaoEntrar.addEventListener("click", function(event) {
        event.preventDefault();
        
        const usuario = inputUsuario.value;
        const senha = inputSenha.value;

        if (usuario === "" || senha === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        console.log("Usuário Login:", usuario);
    });
}

// --- TELA DE CADASTRO ---
const botaoCadastrar = document.getElementById("register-button");
const inputUsername = document.getElementById("username-register");
const inputSenhaCadastrar = document.getElementById("password-register");
const inputConfirmarSenha = document.getElementById("confirm-password");

// Só executa o código se o botão de cadastrar existir na página atual
if (botaoCadastrar) {
    botaoCadastrar.addEventListener("click", function(event) {
        event.preventDefault();
        
        const usuarioRegister = inputUsername.value;
        const senhaRegister = inputSenhaCadastrar.value;
        const confirmarSenha = inputConfirmarSenha.value;

        if (usuarioRegister === "" || senhaRegister === "" || confirmarSenha === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        console.log("Usuário Cadastro:", usuarioRegister);
    });
}