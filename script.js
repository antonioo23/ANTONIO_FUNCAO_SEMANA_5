const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultados");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual dos seguintes não é um subcampo da Inteligência Artificial?",
        alternativas: [

            {
                texto: "Processamento de Linguagem Natural.",
                afirmacao: "Você está correto! É uma forma mais comun de comunicação, onde as perguntas podem ser mais simples e a máquina irá entender da mesma forma."
            },
            {
                texto: "Realidade Virtual.",
                afirmacao: "Você não está correto! A Inteligência Artificial (IA) permite que as aplicações informáticas imitem a inteligência humana e possam resolver problemas, fazer previsões e apresentar soluções. A Realidade Aumentada (RA) melhora os objectos do mundo real numa plataforma virtual para criar um ambiente imersivo."
            },

        ]
    },

    {
        enunciado: "Qual é uma das principais técnicas de aprendizado utilizadas em IA?",
        alternativas: [

            {
                texto: "Métodos Estatísticos.",
                afirmacao: "Você está correto! A ia utiliza uma método de agrupar e categorizar os grupos de dados."
            },
            {
                texto: "Programação Orientada a Objetos.",
                afirmacao: "Você não está correto! Este método permite que nossas soluções sejão escaláveis e flexíveis, e a principal são os métodos estatísticos."
            },

        ]
    },

    {
        enunciado: "Qual é uma das preocupações éticas relacionadas à IA?",
        alternativas: [

            {
                texto: "Violação da privacidade e discriminação algorítmica.",
                afirmacao: "Você está correto! Existe uma grande preucupação de para onde nosso histórico de busca pode estar indo, assim invadindo e discriminalizando seus usuários."
            },
            {
                texto: "Desenvolvimento de novas tecnologias.",
                afirmacao: "Você não está correto! O desenvolvimento de novas tecnologias é algo benéfico para as pessoas, e não algo em que devemos nos preocupar."
            },

        ]
    },

    {
        enunciado: "Em qual área a Visão Computacional é amplamente utilizada?",
        alternativas: [
            {
                texto: "Reconhecimento de voz.",
                afirmacao: "Sua resposta está incorreta! Por mais que existam as assistentes virtuais, elas não a área maia ampla onde a IA é utilizada."
            },
            {
                texto: "Robótica.",
                afirmacao: "Sua resposta está correta! A área da robótica é mais amplamente usada, seja na criação de braços robóticos,"
            },

        ]
    },

    {
        enunciado: "Qual é um dos maiores desafios éticos relacionados à Inteligência Artificial?",
        alternativas: [
            {
                texto: "A falta de controle humano sobre as máquinas.",
                afirmacao: "Você está correto! Com o avanço das inteligências artificias, pode-se chegar a um ponto em que elas se auto comandem."
            },
            {
                texto: "A falta de aplicabilidade prática da IA.",
                afirmacao: "Você não está correto! Pois na nossa atualidade ela está em praticamente todos os aspectos sociais."
            },

        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2029...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}

mostraPergunta();