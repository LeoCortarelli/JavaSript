// Seleção de elementos
const tarefaForm = document.querySelector("#tarefa-form"); // Pegando do ID 
const tarefaInput = document.querySelector("#tarefa-input"); 
const tarefaList = document.querySelector("#tarefa-list");
const editFom = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditbtn = document.querySelector("#cancel-edit-btn");

let oldInputValue; // ultilizando uma variavel global para salvar o titulo antigo

/* -------------------------------------------------------------------------------- */
// Funções
const saveTarefa = (text) => {
    /* Criando essa div em JavaScripit

    <div class="tarefa-list" id="tarefa-list">
        <div class="tarefa done">
            <h3>Testando titulo tarefa</h3>
            <button class="finish-tarefa">
                <i class="check"><img src="img/inconFinalizar.png" width="11"></i>
            </button>
        </div>
    </div>
    */
    const tarefa = document.createElement("div");
    tarefa.classList.add("tarefa");

    const tarefaTitle = document.createElement("h3");
    tarefaTitle.innerText = text;
    tarefa.appendChild(tarefaTitle); // pegando a tarefa da linha 26

    // Botões 
    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-tarefa");
    doneBtn.innerHTML = '<i class="check"><img src="img/inconFinalizar.png" width="11"></i>' // colocando o botão com o incon
    tarefa.appendChild(doneBtn); // colocando o botão na div tarefa

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-tarefa");
    editBtn.innerHTML = '<i class="pen"><img src="img/inconEditar.png" width="11"></i>' // colocando o botão com o incon
    tarefa.appendChild(editBtn); // colocando o botão na div tarefa

    const removeBtn = document.createElement("button")
    removeBtn.classList.add("remove-tarefa");
    removeBtn.innerHTML = '<i class="xmark"><img src="img/incondelete.png" width="11"></i>' // colocando o botão com o incon
    tarefa.appendChild(removeBtn); // colocando o botão na div tarefa

    tarefaList.appendChild(tarefa); // Salva todo codigo acima e joga na tarefaList

    tarefaInput.value = ""; // deixa o input vazio quando o usuario terminar de digitar
    tarefaInput.focus(); // cola o placeholder novamente
}

// Função para a edição da tarefa
const toggleForms = () => {
    editFom.classList.toggle("hide"); // esconde a classe editform (div)
    tarefaForm.classList.toggle("hide") // esconde a classe TarefaForm (div)
    tarefaList.classList.toggle("hide") // esconde a classe tarefaList (div)
    /* Permite que você esconde essas div para que o usuario não se confunda */


}

const updateTarefa = (text) => {
    const todos = document.querySelectorAll(".tarefa")

    todos.forEach((tarefa) => {
        let tarefaTitulo = tarefa.querySelector("h3")

        if(tarefaTitulo.innerText === oldInputValue){
            tarefaTitulo.innerText = text
        }
    })

}




/* -------------------------------------------------------------------------------------- */

// Eventos
// Evento adcionar tarefa
tarefaForm.addEventListener("submit", (e) => {
    e.preventDefault() // faz com que o formulario não seja enviado quando ele precionar o botão

    const inputValue = tarefaInput.value

    if(inputValue){ // garante que o usuario não crie tarefas sem titulo !!
        saveTarefa(inputValue) // chamando a função savaTarefa
    }
})

// Evento Clicando em botões
document.addEventListener("click", (e) => {  // Marcando a opção de tarefa para feita ou vice versa
    const targetEl = e.target
    const parentEl = targetEl.closest("div") // selecionou a div mais proxima
    let tarefaTitulo;

    if (parentEl && parentEl.querySelector("h3")) {
        tarefaTitulo = parentEl.querySelector("h3").innerText
    }

    if(targetEl.classList.contains("finish-tarefa")){
        parentEl.classList.toggle("done")
    }

    if(targetEl.classList.contains("remove-tarefa")){ // Removendo a tarefa
        parentEl.remove(); // removendo a classe pai que tem a (div)
    }

    if(targetEl.classList.contains("edit-tarefa")){ // 
        toggleForms()

        editInput.value = tarefaTitulo // Você primairamente muda o valor do imput, ele tem que vir com o valor preenchido
        oldInputValue = tarefaTitulo // E depois você sava ele
    }
})

cancelEditbtn.addEventListener("click", (e) => {
    e.preventDefault()

    toggleForms();
})

editFom.addEventListener("submit", (e) => {
    e.preventDefault()
    const editInputValue = editInput.value

    if(editInputValue){
        // Atualizar valor
        updateTarefa(editInputValue) // chamando a função update
    }

    toggleForms()
})