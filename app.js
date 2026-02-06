let total = 0

let totalItens = 0;

function adicionar(){
    //recuperar valores nome do produto, quantidade e valor 
    //calcular o preço, o nosso subtotal 
    //adicionar no carrinho 
    //atualizar o valor total 

    const select = document.getElementById('produto');
    const produtoSelecionado = (select.selectedIndex);
    let selectProduto = document.getElementById("produto");
    let textoProduto = selectProduto.options[selectProduto.selectedIndex].text;
    let nomeProduto = textoProduto.split(" - ")[0];
    const valor = Number(select.options[produtoSelecionado].value);
    const qtd = Number(document.getElementById('quantidade').value);



    if(qtd <=0){
        alert('Escolha uma quantidade valida')
        return
    }
    // esse if nao funcionaria caso o const qtd nao tivesse o Number

        const subtotalDoItem = (valor * qtd);
        let valorFinalItem = subtotalDoItem;

    if(qtd >= 3){
    const desconto = 0.1;
    const valorDoDesconto = subtotalDoItem * desconto;
    valorFinalItem = subtotalDoItem - valorDoDesconto;
    }

    total += valorFinalItem;
    totalItens += qtd;

    const areaItens = document.getElementById('itens');

    const item = document.createElement('div');
    item.textContent = `x${qtd} - ${nomeProduto}, valor final R$${valorFinalItem.toFixed(2)}`;

    areaItens.appendChild(item);

    document.getElementById('total').textContent = total.toFixed(2);
    document.getElementById('itenstt').textContent = totalItens;


    document.getElementById('itenstt').textContent = `${totalItens}`;


    console.log(total);
}



function limpar(){
    document.getElementById('itens').textContent = '';

    total = 0;
    document.getElementById('total').textContent = 0;

    document.getElementById('itenstt').textContent = 0; 

    totalItens = 0;
}

