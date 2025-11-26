// Inicia validação
(function validar() {

    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        console.log("Formulário capturado com sucesso!");

        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("senha").value.trim();

        const emailValido = validarEmail(email);
        const senhaValida = validarSenha(senha);

        if (emailValido && senhaValida) {
            console.log("Formulário válido. Enviando...");

            // Apenas sanitiza ao enviar
            const emailSeguro = sanitizarInput(email);
            const senhaSegura = sanitizarInput(senha);

            // Aqui você poderia enviar via fetch/AJAX ou:
            // form.submit();

        } else {
            console.log("Formulário inválido. Corrija os campos acima.");
        }
    });

    document.getElementById("email").addEventListener("input", () => {
        document.getElementById("erro-email").textContent = "";
    });

    document.getElementById("senha").addEventListener("input", () => {
        document.getElementById("erro-senha").textContent = "";
    });

})();


// Sanitização básica contra XSS
function sanitizarInput(texto) {
    return texto
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#x27;")
        .replace(/\//g, "&#x2F;");
}


// Validação de email
function validarEmail(email) {
    const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const valido = padraoEmail.test(email);

    const span = document.getElementById("erro-email");
    span.textContent = valido ? "" : "Por favor, insira um email válido.";

    if (!valido) console.log("Email inválido!");

    return valido;
}


// Validação de senha
function validarSenha(senha) {
    const padraoSenha =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    const valido = padraoSenha.test(senha);

    const span = document.getElementById("erro-senha");
    span.textContent = valido
        ? ""
        : "Senha inválida. Deve conter letra maiúscula, minúscula, número, caractere especial e mínimo de 8 caracteres.";

    if (!valido) console.log("Senha inválida!");

    return valido;
}