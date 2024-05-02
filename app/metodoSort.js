let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreço);
function ordenarLivrosPorPreço(){
    let livrosOrdendos = livros.sort((a, b) => a.preco - b.preco);
    exibirLivrosNaTela(livrosOrdendos);
}