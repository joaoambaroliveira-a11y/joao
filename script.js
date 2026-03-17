const form = document.getElementById('form-cadastro');
const tabelaBody = document.querySelector('#tabela-clientes tbody');

// Função para carregar dados do LocalStorage e desenhar a tabela
function renderizarTabela() {
    tabelaBody.innerHTML = ''; // Limpa a tabela antes de desenhar
    const clientes = JSON.parse(localStorage.getItem('clientes')) || [];

    clientes.forEach((cliente, index) => {
        const linha = document.createElement('tr');

        linha.innerHTML = `
            <td>${cliente.nome}</td>
            <td>${cliente.email}</td>
            <td>
                <button class="btn-excluir" onclick="removerCliente(${index})">Excluir</button>
            </td>
        `;
        tabelaBody.appendChild(linha);
    });
}

// Função para adicionar cliente
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const novoCliente = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        cpf: document.getElementById('cpf').value
    };

    const clientes = JSON.parse(localStorage.getItem('clientes')) || [];
    clientes.push(novoCliente);
    localStorage.setItem('clientes', JSON.stringify(clientes));

    form.reset();
    renderizarTabela(); // Atualiza a visualização
});

// Função para remover cliente
window.removerCliente = function(index) {
    const clientes = JSON.parse(localStorage.getItem('clientes')) || [];
    clientes.splice(index, 1); // Remove o item pelo índice
    localStorage.setItem('clientes', JSON.stringify(clientes));
    renderizarTabela();
};

// Inicializa a tabela ao abrir a página
renderizarTabela();
