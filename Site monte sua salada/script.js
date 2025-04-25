let carrinho = [];
let total = 0;

// Função para adicionar itens ao carrinho
function addToCart(prato, preco) {
    carrinho.push({ prato, preco });
    total += preco;

    updateCartInfo();
    renderCart();
}

// Função para remover itens do carrinho
function removeFromCart(index) {
    total -= carrinho[index].preco; // Subtrai o preço do total
    carrinho.splice(index, 1); // Remove o item do array

    updateCartInfo();
    renderCart();
}

// Função para atualizar as informações do carrinho (contador e total)
function updateCartInfo() {
    // Garante que o total nunca seja negativo
    total = Math.max(total, 0);

    document.getElementById('cart-count').textContent = `${carrinho.length} itens`;
    document.getElementById('cart-total').textContent = `Total: R$ ${total.toFixed(2)}`;
}

// Função para renderizar os itens no carrinho
function renderCart() {
    const listaCarrinho = document.getElementById('lista-carrinho');
    listaCarrinho.innerHTML = ''; // Limpa a lista antes de renderizar

    carrinho.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.prato} - R$ ${item.preco.toFixed(2)}`;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remover';
        removeBtn.onclick = () => removeFromCart(index); // Chama a função de remoção
        li.appendChild(removeBtn);

        listaCarrinho.appendChild(li);
    });
}

// Função para exibir os itens do carrinho (opcional)
function viewCart() {
    const itens = carrinho.map(item => `${item.prato} - R$ ${item.preco.toFixed(2)}`).join('\n');
    alert(`Itens no carrinho:\n${itens}\n\nTotal: R$ ${total.toFixed(2)}`);
}
