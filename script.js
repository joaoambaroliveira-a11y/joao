function filtrarClientes() {
    const input = document.getElementById('busca');
    const filtro = input.value.toLowerCase();
    const tabela = document.getElementById('tabela-clientes');
    const linhas = tabela.getElementsByTagName('tr');

    // Começa do 1 para pular o cabeçalho (th)
    for (let i = 1; i < linhas.length; i++) {
        const colunaNome = linhas[i].getElementsByTagName('td')[0];
        
        if (colunaNome) {
            const textoNome = colunaNome.textContent || colunaNome.innerText;
            
            if (textoNome.toLowerCase().indexOf(filtro) > -1) {
                linhas[i].style.display = "";
            } else {
                linhas[i].style.display = "none";
            }
        }
    }
}
