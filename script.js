const inputTarefa = document.getElementById("tarefa-nova")

function adicionarTarefa() {
    const item = document.createElement('li')

    item.innerHTML = `<li>
        <span>${inputTarefa.value}</span>
        <button class="del">x</button>
    </li>`;

    const lista = document.querySelector('#lista')
    lista.appendChild(item)

    inputTarefa.value = ''
}

const botaoAdicionar = document.querySelector('#bt-adicionar')
botaoAdicionar.addEventListener('click', adicionarTarefa)

function limparLista(){
    const lista = document.querySelector('#lista')
    lista.innerHTML = ''
}

const botaoLimpar = document.querySelector('.bt-limpar')
botaoLimpar.addEventListener('click', limparLista)

