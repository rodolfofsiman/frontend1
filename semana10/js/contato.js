const mensagem = document.querySelector("#mensagem");
const contador = document.querySelector("#contador");

mensagem.addEventListener("input", () => {
    const quantidade = mensagem.value.length;

    contador.textContent = `${quantidade}/500 caracteres`;

    contador.classList.toggle("alerta", quantidade > 450);
});

const formulario = document.querySelector("#form-contato");
const feedback = document.querySelector("#feedback");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const assunto = document.querySelector("#assunto");
const consentimento = document.querySelector("#consentimento");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    feedback.textContent = "";
    feedback.classList.remove("erro", "sucesso");

    if (nome.value.trim().length < 5) {
        feedback.textContent = "Digite seu nome completo com pelo menos 5 caracteres.";
        feedback.classList.add("erro");
        nome.focus();
        return;
    }

    if (email.value.trim() === "" || !email.validity.valid) {
        feedback.textContent = "Digite um e-mail válido.";
        feedback.classList.add("erro");
        email.focus();
        return;
    }

    if (assunto.value === "") {
    feedback.textContent = "Selecione um assunto.";
    feedback.classList.add("erro");
    assunto.focus();
    return;
}

if (mensagem.value.trim() === "") {
    feedback.textContent = "Escreva uma mensagem.";
    feedback.classList.add("erro");
    mensagem.focus();
    return;
}

if (!consentimento.checked) {
    feedback.textContent = "Marque a autorização de uso dos dados para continuar.";
    feedback.classList.add("erro");
    consentimento.focus();
    return;
}

feedback.textContent = "Todos os campos foram validados! Este formulário é uma demonstração e não envia dados.";

feedback.classList.add("sucesso");

formulario.reset();
contador.textContent = "0/500 caracteres";
contador.classList.remove("alerta");

});