document.addEventListener('DOMContentLoaded', () => {

  // --- BANCO DE DADOS ---
  const subaulaData = {
    substantivo: { title: "Substantivo", video: "https://www.youtube.com/embed/cxqPHPPq1Jc?si=WBZUu2q2WfGSCyEu", materia: "portugues" },
    adjetivo: { title: "Adjetivo", video: "https://www.youtube.com/embed/_jT2TQLFsMU?si=TVsMKanQkpc0LpcU", materia: "portugues" },
    artigo: { title: "Artigo", video: "https://www.youtube.com/embed/kAsAFBfAaVE?si=5vR__K8pSNbvXrc1", materia: "portugues" },
    numeral: { title: "Numeral", video: "https://www.youtube.com/embed/M9ftWtNF26Y?si=YSBfW7HNfu25uFR7", materia: "portugues" },
    fotossintese: { title: "Fotossíntese das Plantas", video: "https://www.youtube.com/embed/noPhBVXeXww?si=s-m1tz0SNp_UsVQK", materia: "ciencias" },
    ecossistemas: { title: "Ecossistemas", video: "https://www.youtube.com/embed/ZcOdBxnDylM?si=F1qeYKLf9UObJtZt", materia: "ciencias" },
    cadeiaalimentar: { title: "Cadeia Alimentar", video: "https://www.youtube.com/embed/JNy9lxAIIwE?si=rTLyqwavT0dVnQjF", materia: "ciencias" },
    rotacaoTranslacao: { title: "Rotação e Translação", video: "https://www.youtube.com/embed/87L0bZFzdyE?si=5S4FBJ1HMam0_Fhg", materia: "ciencias" }
  };

  // --- QUIZZES INDEPENDENTES ---
  const quizzes = {
    portugues: {
      substantivo: [
        { q: "O que é um substantivo?", options: ["Palavra que descreve uma ação", "Palavra que dá nome aos seres", "Palavra que indica uma qualidade", "Palavra que liga orações"], correct: 1 },
        { q: "Qual é a principal função do substantivo?", options: ["Indicar tempo", "Dar nome aos seres", "Expressar sentimentos", "Modificar o verbo"], correct: 1 },
        { q: "Qual das alternativas apresenta um substantivo próprio?", options: ["cidade", "Brasil", "escola", "livro"], correct: 1 },
        { q: "Qual é a diferença entre substantivo comum e próprio?", options: ["O comum é escrito com letra maiúscula", "O próprio nomeia seres específicos", "O comum é sempre plural", "O próprio é sempre abstrato"], correct: 1 },
        { q: "Qual das palavras abaixo é um substantivo composto?", options: ["mesa", "guarda-chuva", "livro", "cachorro"], correct: 1 }
      ],
      adjetivo: [
        { q: "Qual é a função principal do adjetivo em uma frase?", options: ["Nomear seres, objetos ou lugares", "Indicar ação ou estado", "Atribuir características ou qualidades a um substantivo", "Substituir o substantivo"], correct: 2 },
        { q: "Na frase 'O céu está azul', qual é o adjetivo?", options: ["Céu", "Está", "Azul", "O"], correct: 2 },
        { q: "Qual das alternativas apresenta um adjetivo no grau superlativo absoluto sintético?", options: ["Bonito", "Mais bonito", "Bonitíssimo", "Muito bonito"], correct: 2 },
        { q: "Na frase 'Ela é uma excelente aluna', qual é a classificação do adjetivo 'excelente'?", options: ["Simples", "Derivado", "Composto", "Pátrio"], correct: 0 },
        { q: "Qual é o adjetivo na frase 'Ele tem um sorriso encantador'?", options: ["Ele", "Tem", "Sorriso", "Encantador"], correct: 3 }
      ],
      artigo: [
        { q: "Qual é a principal função do artigo na língua portuguesa?", options: ["Acompanhar o verbo", "Acompanhar o adjetivo", "Acompanhar o substantivo", "Acompanhar o advérbio"], correct: 2 },
        { q: "Qual das alternativas apresenta um artigo definido?", options: ["Um", "Uma", "O", "Uns"], correct: 2 },
        { q: "Qual é a forma do artigo definido no plural para o gênero feminino?", options: ["As", "A", "As", "Os"], correct: 0 },
        { q: "Qual é a forma do artigo indefinido no singular para o gênero masculino?", options: ["Um", "Uma", "Ums", "Uns"], correct: 0 },
        { q: "Qual das frases abaixo está correta?", options: ["Vi um livro interessante.", "Vi a livro interessante.", "Vi os livro interessante.", "Vi um livro interessante."], correct: 0 }
      ],
      numeral: [
        { q: "O que é um numeral?", options: ["Palavra que indica ação", "Palavra que dá nome aos seres", "Palavra que indica quantidade, ordem ou fração", "Palavra que descreve uma qualidade"], correct: 2 },
        { q: "Qual das alternativas apresenta um numeral cardinal?", options: ["Primeiro", "Terceiro", "Dez", "Meio"], correct: 2 },
        { q: "Qual é a função principal do numeral ordinal?", options: ["Indicar quantidade", "Indicar ordem ou posição", "Indicar fração", "Indicar intensidade"], correct: 1 },
        { q: "Qual das palavras abaixo é um numeral multiplicativo?", options: ["Duas", "Terço", "Dobro", "Meio"], correct: 2 },
        { q: "O numeral 'quarto' é classificado como:", options: ["Cardinal", "Ordinal", "Multiplicativo", "Fracionário"], correct: 1 }
      ]
    },
    ciencias: {
      fotossintese: [
        { q: "O que é fotossíntese?", options: ["Quando as plantas comem insetos", "Quando as plantas usam luz do sol, água e ar para fazer seu alimento", "Quando as plantas dormem", "Quando as plantas ficam verdes"], correct: 1 },
        { q: "Qual parte da planta faz a fotossíntese?", options: ["Raiz", "Flor", "Folha", "Semente"], correct: 2 },
        { q: "Do que a planta precisa para fazer a fotossíntese?", options: ["Só água e solo", "Luz do sol, água e dióxido de carbono (ar)", "Chocolate e música", "Fogo"], correct: 1 },
        { q: "O que as plantas liberam no ar depois de fazer fotossíntese?", options: ["Fumaça", "Oxigênio", "Gás carbônico", "Poeira"], correct: 1 },
        { q: "Por que a fotossíntese é importante para os seres vivos?", options: ["Porque dá sombra", "Porque produz alimento para as plantas e oxigênio para respirar", "Porque deixa a planta vermelha", "Porque acende luzes"], correct: 1 }
      ],
      ecossistemas: [
        { q: "O que é um ecossistema?", options: ["Um tipo de planta", "Um ambiente com seres vivos, clima, solo, água, ar que interagem entre si", "Apenas os animais de uma floresta", "O espaço entre árvores"], correct: 1 },
        { q: "Qual desses elementos faz parte de um ecossistema?", options: ["Computadores", "Plantas, animais, solo, água, luz do sol", "Carros", "Lojas"], correct: 1 },
        { q: "O que significa 'interação' em um ecossistema?", options: ["Seres vivos que não se veem", "Seres vivos vivendo sozinhos", "Quando os seres vivos e o ambiente influenciam uns aos outros", "Apenas os animais se alimentando"], correct: 2 },
        { q: "Qual dos exemplos abaixo é um ecossistema natural?", options: ["Um parque de diversões", "Uma floresta", "Uma cidade inteira", "Um prédio"], correct: 1 },
        { q: "Por que os ecossistemas são importantes?", options: ["Porque só produzem oxigênio", "Porque ajudam a manter o equilíbrio da natureza, fornecem alimento, abrigo, água limpa e mantêm o clima", "Porque são bonitos", "Porque existem para que possamos tirar fotos"], correct: 1 }
      ],
      cadeiaalimentar: [
        { q: "O que é uma cadeia alimentar?", options: ["Quando os animais cantam juntos", "Série de seres vivos onde cada um serve de alimento para outro", "Um mapa de florestas", "Um tipo de comida especial"], correct: 1 },
        { q: "Quem normalmente está no início da cadeia alimentar?", options: ["Animais carnívoros", "Produtores (plantas e algas)", "Seres humanos", "Víboras"], correct: 1 },
        { q: "O que fazem os consumidores primários?", options: ["Só comem carne", "Se alimentam dos produtores", "Produzem seu próprio alimento", "Moram na água"], correct: 1 },
        { q: "Qual é o papel dos decompositores na cadeia alimentar?", options: ["Comer poluição", "Transformar matéria orgânica morta em nutrientes para o solo", "Roubar alimento de outros animais", "Serem grandes predadores"], correct: 1 },
        { q: "Por que a cadeia alimentar é importante?", options: ["Porque permite que todos os seres vivos obtenham energia", "Porque deixa as florestas mais belas", "Porque todos comem ao mesmo tempo", "Porque evita que haja plantas demais"], correct: 0 }
      ],
      rotacaoTranslacao: [
        { q: "Qual é o movimento da Terra que causa a alternância entre dia e noite?", options: ["Translação", "Rotação", "Inclinação axial", "Ejeção solar"], correct: 1 },
        { q: "Quanto tempo a Terra leva para completar uma volta completa em torno do próprio eixo?", options: ["12 horas", "24 horas", "365 dias", "30 dias"], correct: 1 },
        { q: "O que é causado pelo movimento de translação da Terra?", options: ["As estações do ano", "O ciclo da lua", "A maré alta", "O nascer e pôr do sol"], correct: 0 },
        { q: "Quantos dias a Terra leva para dar uma volta completa em torno do Sol?", options: ["365 dias", "24 horas", "30 dias", "12 horas"], correct: 0 },
        { q: "Qual é a importância do movimento de rotação da Terra?", options: ["Determina a duração das estações do ano", "Causa o ciclo de dia e noite", "Define a órbita da Terra ao redor do Sol", "Afeta a gravidade na Terra"], correct: 1 }
      ]
    }
  };

  // --- VARIÁVEIS DE ESTADO ---
  let currentMateria = null;
  let currentSubaula = null;

  // --- ELEMENTOS DO DOM ---
  const sections = {
    escolha: document.getElementById('escolha'),
    portugues: document.getElementById('portugues'),
    ciencias: document.getElementById('ciencias'),
    subaula: document.getElementById('subaula')
  };
  const subaulaTitle = document.getElementById('subaula-title');
  const subaulaVideo = document.getElementById('subaula-video');
  const quizContainer = document.getElementById('questions');
  const quizResultDiv = document.getElementById('quizResult');
  const submitQuizBtn = document.getElementById('submitQuiz');
  const resetQuizBtn = document.getElementById('resetQuiz');

  // --- FUNÇÕES DE NAVEGAÇÃO E CONTEÚDO ---
  function mostrarSecao(id) {
    Object.values(sections).forEach(sec => sec.classList.add('oculto'));
    if (sections[id]) {
      sections[id].classList.remove('oculto');
      sections[id].scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function mostrarSubaula(subaulaId) {
    const data = subaulaData[subaulaId];
    if (!data) return;

    currentMateria = data.materia;
    currentSubaula = subaulaId;

    subaulaTitle.textContent = data.title;
    subaulaVideo.src = data.video;
    subaulaVideo.title = `Vídeo sobre ${data.title}`;

    buildQuiz(currentMateria, currentSubaula);
    mostrarSecao('subaula');
  }

  // --- FUNÇÕES DO QUIZ ---
  function buildQuiz(materia, subaula) {
    quizContainer.innerHTML = '';
    const questions = quizzes[materia][subaula];
    if (!questions) return;

    questions.forEach((item, idx) => {
      const qdiv = document.createElement('div');
      qdiv.className = 'question';
      qdiv.innerHTML = `<strong>Q${idx + 1}.</strong> ${item.q}`;

      const optWrap = document.createElement('div');
      optWrap.className = 'options';
      item.options.forEach((opt, i) => {
        const label = document.createElement('label');
        label.className = 'option';
        label.innerHTML = `<input type="radio" name="q${idx}" value="${i}"> <span>${opt}</span>`;
        optWrap.appendChild(label);
      });
      qdiv.appendChild(optWrap);
      quizContainer.appendChild(qdiv);
    });
    resetQuiz();
  }

  function gradeQuiz() {
    if (!currentMateria || !currentSubaula) return;

    let score = 0;
    const questions = quizzes[currentMateria][currentSubaula];
    const total = questions.length;
    const feedbacks = [];

    questions.forEach((item, idx) => {
      const selected = quizContainer.querySelector(`input[name="q${idx}"]:checked`);
      const optionsLabels = quizContainer.querySelectorAll(`input[name="q${idx}"]`);

      optionsLabels.forEach(opt => opt.parentElement.classList.remove('correta', 'incorreta'));

      if (!selected) {
        feedbacks.push(`<strong>Pergunta ${idx + 1}:</strong> sem resposta.`);
      } else {
        const answer = parseInt(selected.value, 10);
        if (answer === item.correct) {
          score++;
          selected.parentElement.classList.add('correta');
          feedbacks.push(`<strong>Pergunta ${idx + 1}:</strong> correta!`);
        } else {
          selected.parentElement.classList.add('incorreta');
          const correctInput = quizContainer.querySelector(`input[name="q${idx}"][value="${item.correct}"]`);
          if (correctInput) correctInput.parentElement.classList.add('correta');
          feedbacks.push(`<strong>Pergunta ${idx + 1}:</strong> incorreta. A resposta certa é "${item.options[item.correct]}".`);
        }
      }
    });

    quizResultDiv.innerHTML = `<h3>Resultado: Você acertou ${score} de ${total}.</h3>` + feedbacks.join('<br>');
    quizContainer.querySelectorAll('input[type=radio]').forEach(i => i.disabled = true);
    submitQuizBtn.disabled = true;
  }

  function resetQuiz() {
    quizContainer.querySelectorAll('input[type=radio]').forEach(i => {
      i.checked = false;
      i.disabled = false;
      i.parentElement.classList.remove('correta', 'incorreta');
    });
    quizResultDiv.innerHTML = '';
    submitQuizBtn.disabled = false;
  }

  // --- GERENCIADOR DE EVENTOS PRINCIPAL ---
  document.body.addEventListener('click', (event) => {
    const target = event.target;
    const action = target.dataset.action;

    if (action) {
      const param = target.dataset.target;
      switch (action) {
        case 'mostrar-materia':
          mostrarSecao(param);
          break;
        case 'mostrar-subaula':
          mostrarSubaula(param);
          break;
        case 'voltar-escolha':
          mostrarSecao('escolha');
          break;
        case 'voltar-materia':
          if (currentMateria) mostrarSecao(currentMateria);
          break;
      }
    }
  });

  submitQuizBtn.addEventListener('click', gradeQuiz);
  resetQuizBtn.addEventListener('click', resetQuiz);

});
