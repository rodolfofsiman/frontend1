// Seleciona o formulário, o campo e a lista.
const form = document.getElementById('form-nova-tarefa');
const inputTarefa = document.getElementById('input-nova-tarefa');
const listaDeTarefas = document.getElementById('lista-de-tarefas');

// Executa quando o formulário é enviado.
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const textoDaTarefa = inputTarefa.value.trim();

  if (textoDaTarefa !== '') {
    adicionarTarefa(textoDaTarefa);
  } else {
    alert('Por favor, insira a descrição da tarefa.');
    inputTarefa.focus();
  }
});

// Cria e adiciona uma tarefa à página.
function adicionarTarefa(texto) {
  const novoItem = document.createElement('li');
  novoItem.textContent = texto;
  listaDeTarefas.append(novoItem);

  inputTarefa.value = '';
  inputTarefa.focus();
}