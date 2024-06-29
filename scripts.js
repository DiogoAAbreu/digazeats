let prato = {
    titulo: '',
    valor: '',
}

let bebida = {
    titulo: '',
    valor: '',
}
let sobremesa = {
    titulo: '',
    valor: '',
}

let nome, endereco;




function selecionarPrato(elemento) {
    const pratoSelecionado = document.querySelector('.prato .selecionado');

    if (pratoSelecionado) {
        pratoSelecionado.classList.remove('selecionado');
    }

    elemento.classList.add('selecionado');

    prato.titulo = elemento.querySelector('.titulo').innerHTML;
    prato.valor = elemento.querySelector('.valor').innerHTML;
    prato.valor = ajustarValor(prato.valor);

    ativarBotao()
}

function selecionarBebida(elemento) {
    const bebidaSelecionada = document.querySelector('.bebida .selecionado');

    if (bebidaSelecionada) {
        bebidaSelecionada.classList.remove('selecionado')
    }

    elemento.classList.add('selecionado')

    bebida.titulo = elemento.querySelector('.titulo').innerHTML;
    bebida.valor = elemento.querySelector('.valor').innerHTML;
    bebida.valor = ajustarValor(bebida.valor);

    ativarBotao()
}

function selecionarSobremesa(elemento) {
    const sobremesaSelecionada = document.querySelector('.sobremesa .selecionado');
    const icone = document.querySelector('.escondido')

    if (sobremesaSelecionada) {
        sobremesaSelecionada.classList.remove('selecionado')
    }

    elemento.classList.add('selecionado')

    sobremesa.titulo = elemento.querySelector('.titulo').innerHTML;
    sobremesa.valor = elemento.querySelector('.valor').innerHTML;
    sobremesa.valor = ajustarValor(sobremesa.valor);

    ativarBotao()
}

function ativarBotao() {
    if (prato.titulo !== '' && bebida.titulo !== '' && sobremesa.titulo !== '') {
        const botao = document.querySelector('.finalizar-pedido')
        botao.innerHTML = 'Fechar pedido'
        botao.classList.add('ativo')
    }
}

function ajustarValor(valorProduto) {
    const valor = valorProduto.replace('R$ ', '').replace(',', '.');
    const valorNmr = Number(valor) * 100;
    return valorNmr;
}

function fazerPedido() {

    const over = document.querySelector('.overlay');
    if (prato.titulo !== '' && bebida.titulo !== '' && sobremesa.titulo !== '') {
        over.classList.remove('escondido')
    }

    const valorPrato = (prato.valor / 100).toFixed(2)
    const valorBebida = (bebida.valor / 100).toFixed(2)
    const valorSobremesa = (sobremesa.valor / 100).toFixed(2)

    const valorTotal = ((prato.valor + bebida.valor + sobremesa.valor) / 100).toFixed(2);

    const valor = `R$${valorTotal}`

    document.querySelector('.titulo-prato').innerHTML = prato.titulo;
    document.querySelector('.valor-prato').innerHTML = valorPrato;

    document.querySelector('.titulo-bebida').innerHTML = bebida.titulo;
    document.querySelector('.valor-bebida').innerHTML = valorBebida;

    document.querySelector('.titulo-sobremesa').innerHTML = sobremesa.titulo;
    document.querySelector('.valor-sobremesa').innerHTML = valorSobremesa;

    document.querySelector('.valor-total').innerHTML = valor;

    nome = prompt('Qual seu nome?')
    endereco = prompt('Passa o endereco aí!')
}

function cancelar() {
    const over = document.querySelector('.overlay');
    over.classList.add('escondido')
}

function enviarPedido() {


    const pratoTxt = prato.titulo;
    const bebidaTxt = bebida.titulo;
    const sobremesaTxt = sobremesa.titulo;

    const valorTotal = ((prato.valor + bebida.valor + sobremesa.valor) / 100).toFixed(2);

    const texto = encodeURIComponent(`Olá, gostaria de fazer o pedido:

- Prato: ${pratoTxt}
- Bebida: ${bebidaTxt}
- Sobremesa: ${sobremesaTxt}
Total: R$ ${valorTotal}

Nome: ${nome}
Endereco: ${endereco}`);

    console.log(texto)

    const numero = '5532988141424'

    window.open(`https://wa.me//${numero}?text=${texto}`);
}