let carrinho = []; // Array para os itens no carrinho
let total = 0; // Total inicial

// Função para adicionar itens ao carrinho
function addToCart(prato, preco) {
    carrinho.push({ prato, preco });
    total += preco;

    updateCartInfo();
    renderCartItems(); // Atualiza os itens visíveis no rodapé
}

// Função para remover um item específico do carrinho
function removeSingleItem(prato) {
    const index = carrinho.findIndex(item => item.prato === prato);

    if (index !== -1) {
        total -= carrinho[index].preco; // Subtrai o preço do total
        carrinho.splice(index, 1); // Remove o item do array
    }

    updateCartInfo();
    renderCartItems(); // Atualiza os itens visíveis no rodapé
}

// Função para atualizar a quantidade de itens e o total
function updateCartInfo() {
    total = Math.max(total, 0); // Garante que o total nunca seja negativo
    document.getElementById('cart-count').textContent = `${carrinho.length} itens`;
    document.getElementById('cart-total').textContent = `Total: R$ ${total.toFixed(2)}`;
}

// Função para renderizar os itens na lista fixa do rodapé
function renderCartItems() {
    const cartList = document.getElementById('cart-items-list');
    cartList.innerHTML = ''; // Limpa a lista antes de renderizar

    carrinho.forEach(item => {
        const li = document.createElement('li');

        // Nome e preço do prato
        const span = document.createElement('span');
        span.textContent = `${item.prato} - R$ ${item.preco.toFixed(2)}`;

        // Botão de remover
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remover';
        removeBtn.onclick = () => removeSingleItem(item.prato);

        // Adiciona o texto e botão ao item da lista
        li.appendChild(span);
        li.appendChild(removeBtn);
        cartList.appendChild(li);
    });
}
