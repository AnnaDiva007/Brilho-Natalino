// INICIO VOLTAR AO TOPO
window.onscroll = function () {
    const botaoTopo = document.getElementById("botaoTopo");
    if (document.documentElement.scrollTop > 300) { // Mostra o botão após 300px de rolagem
        botaoTopo.style.display = "block";
    } else {
        botaoTopo.style.display = "none";
    }
};

// Função para rolar a página até o topo
function voltarAoTopo() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
// FIM VOLTAR AO TOPO

// INICIO CARROSSEL
let indiceAtual = 0;
const slides = document.querySelectorAll('.imagem-carrossel');
const indicadores = document.querySelectorAll('.indicador');

// Função para avançar para o próximo slide
function proximoSlide() {
    indexAtual = (indexAtual + 1) % slides.length;
    mostrarSlide(indexAtual);
}

// Chama a função proximoSlide a cada 3 segundos para o loop infinito
setInterval(proximoSlide, 3000); // Troca de slide a cada 3 segundos




// Função para mudar o slide
function mudarSlide(direcao) {
    indiceAtual += direcao;
    if (indiceAtual < 0) indiceAtual = slides.length - 1;
    if (indiceAtual >= slides.length) indiceAtual = 0;
    atualizarCarrossel();
}

// Função para ir diretamente a um slide específico
function irParaSlide(indice) {
    indiceAtual = indice;
    atualizarCarrossel();
}

// Função para atualizar a posição do carrossel e os indicadores
function atualizarCarrossel() {
    const larguraSlide = slides[indiceAtual].clientWidth;
    document.querySelector('.slides').style.transform = `translateX(-${indiceAtual * larguraSlide}px)`;

    // Atualizar o indicador ativo
    indicadores.forEach((indicador, i) => {
        indicador.classList.toggle('active', i === indiceAtual);
    });
}

// Passagem automática a cada 3 segundos
setInterval(() => mudarSlide(1), 3000);

// Inicializa o primeiro slide e indicador
atualizarCarrossel();

// FIM CARROSSEL

// INICIO CONTAGEM
// Defina a data alvo para o Natal
const dataNatal = new Date("December 25, " + new Date().getFullYear() + " 00:00:00").getTime();

function atualizarContagemRegressiva() {
    const agora = new Date().getTime();
    const diferenca = dataNatal - agora;

    // Calcule os dias, horas, minutos e segundos
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    // Exiba os resultados no HTML
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;

    // Quando chegar ao Natal, exiba uma mensagem
    if (diferenca < 0) {
        clearInterval(contagem);
        document.getElementById("contador").textContent = "Feliz Natal!";
    }
}

// Atualize a contagem a cada segundo
const contagem = setInterval(atualizarContagemRegressiva, 1000);
// FIM CONTAGEM





// Duplicar as imagens para um efeito contínuo
images.forEach(image => {
    const clone = image.cloneNode(true);
    track.appendChild(clone);
});

function sortear() {
    const criancas = document.querySelectorAll('#child-profile img');
    criancas.forEach(crianca => crianca.classList.remove('highlight'));

    // Animação de embaralhamento com tempo determinado
    let counter = 0;
    const interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * criancas.length);
        criancas.forEach(crianca => crianca.classList.remove('highlight'));
        criancas[randomIndex].classList.add('highlight');
        
        if (++counter === 10) {  // Número de embaralhamentos
            clearInterval(interval);
        }
    }, 200);
}