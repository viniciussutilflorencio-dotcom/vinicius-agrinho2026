 // Dados que alimentam a seção de práticas sustentáveis dinamicamente
const praticasSustentaveis = {
    plantio: {
        titulo: "Sistema de Plantio Direto",
        descricao: "Técnica que cultiva a terra sem arar o solo previamente. Ao manter os restos vegetais da colheita anterior na superfície, protege o solo contra a erosão, retém muito mais umidade e reduz drasticamente a emissão de gases poluentes dos tratores."
    },
    energia: {
        titulo: "Uso de Energia Limpa e Renovável",
        descricao: "O agronegócio moderno aproveita o espaço de galpões e áreas não agricultáveis para instalar placas solares e usinas de biomassa (feitas a partir do bagaço da cana, por exemplo). Isso torna as propriedades autossuficientes e reduz a pegada de carbono do setor."
    },
    reuso: {
        titulo: "Reuso e Manejo Inteligente da Água",
        descricao: "Utilização de sistemas de irrigação gota a gota automatizados por sensores de umidade. Além disso, a captação da água da chuva e o tratamento de efluentes garantem que a produção agrícola utilize os recursos hídricos de maneira responsável e inteligente."
    }
};

// Função para mudar o conteúdo das abas
function mudarAba(chavePratica) {
    // 1. Atualizar o texto na tela
    const containerConteudo = document.getElementById('conteudo-aba');
    const dados = praticasSustentaveis[chavePratica];
    
    containerConteudo.innerHTML = `
        <h3 style="color: #d92b2b; margin-bottom: 15px;">${dados.titulo}</h3>
        <p style="color: #444; max-width: 800px; margin: 0 auto; font-size: 17px;">${dados.descricao}</p>
    `;

    // 2. Atualizar a classe 'ativo' nos botões
    const botoes = document.querySelectorAll('.btn-aba');
    botoes.forEach(botao => {
        botao.classList.remove('ativo');
    });

    // Adiciona a classe ativo ao botão que disparou o evento atual
    const botaoClicado = event.currentTarget;
    botaoClicado.classList.add('ativo');
}

// Inicializa a página mostrando a primeira prática por padrão
window.onload = function() {
    mudarAba('plantio');
};
