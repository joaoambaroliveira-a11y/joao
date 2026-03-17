document.getElementById('form-cadastro').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const cpf = document.getElementById('cpf').value;

    // Cria um objeto para o cliente
    const cliente = {
        nome,
        email,
        telefone,
        cpf
    };

    // Recupera a lista de clientes já salvos ou cria uma nova
    const clientesSalvos = JSON.parse(localStorage.getItem('clientes')) || [];

    // Adiciona o novo cliente à lista
    clientesSalvos.push(cliente);

    // Salva a lista atualizada no LocalStorage
    localStorage.setItem('clientes', JSON.stringify(clientesSalvos));

    // Feedback para o usuário
    alert('Cliente ' + nome + ' cadastrado com sucesso!');

    // Limpa o formulário
    this.reset();
    
    console.log('Lista de Clientes Atualizada:', clientesSalvos);
});
