let pedidos = [];
let totalGeral = 0;

function adicionarPedido() {
    const cliente = document.getElementById('cliente').value;
    const dia = document.getElementById('dia').value;
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const valor = parseFloat(document.getElementById('valor').value);

    if (!cliente || !dia || !quantidade || !valor) {
        alert('Preencha todos os campos!');
        return;
    }

    const total = quantidade * valor;
    pedidos.push({ cliente, dia, quantidade, valor, total });

    totalGeral += total;
    atualizarTabela();

    
    document.getElementById('cliente').value = '';
    document.getElementById('dia').value = '';
    document.getElementById('quantidade').value = '';
    document.getElementById('valor').value = '';
}

function atualizarTabela() {
    const tbody = document.querySelector('#tabela tbody');
    tbody.innerHTML = '';

    pedidos.forEach(p => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${p.cliente}</td>
            <td>${p.dia}</td>
            <td>${p.quantidade}</td>
            <td>R$${p.valor.toFixed(2)}</td>
            <td>R$${p.total.toFixed(2)}</td>
        `;
        tbody.appendChild(tr);
    });

    let total = document.getElementById('totalGeral')
    
    total.innerHTML = `Total : R$${totalGeral.toFixed(2)}`;
}
