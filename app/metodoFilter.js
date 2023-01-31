const botoes=document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener ('click' , filtrarLivros));

function filtrarLivros(){
    const elemntoBtn= document.getElementById (this.id);
    const categoria=elemntoBtn.value;
    let livrosFiltrados = categoria == 'disponivel' ? 
    filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)
    exibirOSLivrosNaTela(livrosFiltrados)

    if(categoria == 'disponivel'){
        const valorTotal=calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        
        exibirValorTotalDosLivrosDispponiveisNaTela(valorTotal)
    }
}
function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDispponiveisNaTela(valorTotal){
    
    elementoComValorTotalDeLivrosDispoiveis.innerHTML=`
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
  </div>
    `
}
