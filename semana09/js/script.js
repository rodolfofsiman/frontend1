const form = document.getElementById('form');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const msg = document.getElementById('mensagem');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nomeVal = nome.value.trim();
    const emailVal = email.value.trim();

    if(!nomeVal || !emailVal){
        msg.textContent = 'Por favor, preencha nome e e-mail!';
        msg.className = 'erro';
        return;
    }

    if(!emailVal.includes('@')){
        msg.textContent = 'E-mail inválido. Verifique o campo!';
        msg.className = 'erro';
        email.focus();
        return;
    }

    msg.textContent = `Obrigado(a), ${nomeVal}! Cadastro enviado!`;
    msg.className = 'sucesso';
    form.reset();
    nome.focus();

});

// Altera o texto do título e adiciona uma classe.
const titulo = document.querySelector('#titulo');

titulo.textContent = 'Bem-vindo ao cadastro!';
titulo.classList.add('destaque');

// Alterna entre o tema claro e o escuro.
const botaoTema = document.querySelector('#botao-tema');

botaoTema.addEventListener('click', () => {
  const escuro = document.body.classList.toggle('escuro');
  botaoTema.textContent = escuro ? 'Modo claro' : 'Modo noturno';
});