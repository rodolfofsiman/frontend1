const formularioTarefa = document.querySelector("#form-tarefa");
const campoNova = document.querySelector("#nova");
const listaTarefas = document.querySelector("#tarefas");

formularioTarefa.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const texto = campoNova.value.trim();

    if (texto === "") {
        campoNova.focus();
        return;
    }

    const item = document.createElement("li");
    item.textContent = texto;

    item.addEventListener("click", () => {
    item.classList.toggle("feita");
});

    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.type = "button";

    botaoRemover.addEventListener("click", (evento) => {
    evento.stopPropagation();
    item.remove();
});

item.appendChild(botaoRemover);

    listaTarefas.appendChild(item);

    formularioTarefa.reset();
    campoNova.focus();
});