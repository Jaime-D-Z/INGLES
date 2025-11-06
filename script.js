const questions = [
  {
    question:
      '1. Elige la opción correcta para completar la oración: **"She always ______ to work by bus."**',
    options: [
      {
        text: "go",
        isCorrect: false,
        rationale:
          "El verbo 'go' en la forma base solo se usa con I, you, we, they.",
      },
      {
        text: "goes",
        isCorrect: true,
        rationale:
          "En el Presente Simple, los verbos con 'he', 'she' o 'it' deben terminar en -s o -es para indicar la tercera persona del singular.",
      },
      {
        text: "is going",
        isCorrect: false,
        rationale:
          "Esta es la forma del Presente Continuo, usada para acciones que ocurren ahora mismo, no para hábitos.",
      },
      {
        text: "went",
        isCorrect: false,
        rationale: "Esta es la forma del pasado, no del Presente Simple.",
      },
    ],
    hint: "Recuerda la regla de la 's' para la tercera persona del singular (She).",
  },
  {
    question:
      "2. ¿Cuál es la forma negativa correcta para la frase **'We watch TV'**?",
    options: [
      {
        text: "We doesn't watch TV",
        isCorrect: false,
        rationale:
          "El auxiliar 'doesn't' es solo para la tercera persona del singular (he, she, it).",
      },
      {
        text: "We no watch TV",
        isCorrect: false,
        rationale:
          "Se necesita el auxiliar 'do' en su forma negativa para formar la negación en inglés.",
      },
      {
        text: "We don't watch TV",
        isCorrect: true,
        rationale:
          "La forma negativa para 'I, you, we, they' es 'don't' seguido del verbo en su forma base.",
      },
      {
        text: "We aren't watch TV",
        isCorrect: false,
        rationale:
          "'Aren't' es para el verbo 'to be', no para la negación en Presente Simple.",
      },
    ],
    hint: "El auxiliar para el sujeto 'We' no lleva '-s'.",
  },
  {
    question:
      '3. Completa la rutina diaria: **"I ______ breakfast at 8:00 AM."**',
    options: [
      {
        text: "have",
        isCorrect: true,
        rationale:
          "La frase 'have breakfast' significa 'desayunar'. El sujeto 'I' usa la forma base del verbo.",
      },
      {
        text: "has",
        isCorrect: false,
        rationale: "'Has' es incorrecto; solo se usa con he, she, it.",
      },
      {
        text: "having",
        isCorrect: false,
        rationale:
          "El gerundio ('-ing') es incorrecto sin un auxiliar del verbo 'to be'.",
      },
      {
        text: "is have",
        isCorrect: false,
        rationale: "Esa construcción no existe en inglés.",
      },
    ],
    hint: "El verbo correcto para 'tomar' o 'comer' la primera comida del día es *have*.",
  },
  {
    question:
      '4. Elige la palabra auxiliar correcta: **"______ your brother study engineering?"**',
    options: [
      {
        text: "Do",
        isCorrect: false,
        rationale: "'Do' es para I, you, we, they.",
      },
      {
        text: "Does",
        isCorrect: true,
        rationale:
          "'Your brother' es tercera persona del singular (he), por lo tanto, se usa el auxiliar 'Does' para hacer la pregunta.",
      },
      {
        text: "Is",
        isCorrect: false,
        rationale:
          "'Is' es para el verbo 'to be', no para preguntar sobre una acción habitual.",
      },
      {
        text: "Have",
        isCorrect: false,
        rationale:
          "'Have' no funciona como auxiliar para este tipo de pregunta.",
      },
    ],
    hint: "Tu sujeto es una sola persona (él). ¿Qué auxiliar necesita la 's'?",
  },
  {
    question:
      '5. ¿Cuál es la estructura correcta para la pregunta? **"What time ______ you ______ up?"**',
    options: [
      {
        text: "do / wake",
        isCorrect: true,
        rationale:
          "La estructura correcta es WH-word + do + subject + base form verb.",
      },
      {
        text: "does / wakes",
        isCorrect: false,
        rationale: "'Does' y 'wakes' son incorrectos para el sujeto 'you'.",
      },
      {
        text: "is / wake",
        isCorrect: false,
        rationale:
          "'Is' es para el Presente Continuo. 'Wake' necesita el auxiliar 'do'.",
      },
      {
        text: "do / waking",
        isCorrect: false,
        rationale: "Se usa la forma base ('wake'), no el gerundio ('waking').",
      },
    ],
    hint: "La pregunta sobre tu horario usa el auxiliar 'do' y el verbo en su forma base.",
  },
  {
    question:
      '6. La forma correcta de la oración negativa es: **"He ______ work on Saturdays."**',
    options: [
      {
        text: "don't",
        isCorrect: false,
        rationale: "'Don't' es para I, you, we, they.",
      },
      {
        text: "doesn't",
        isCorrect: true,
        rationale:
          "El auxiliar negativo para 'he' es 'doesn't'. El verbo principal ('work') permanece en la forma base.",
      },
      {
        text: "not",
        isCorrect: false,
        rationale:
          "Necesitas el auxiliar 'do' o 'does' para formar la negación en Presente Simple.",
      },
      {
        text: "no works",
        isCorrect: false,
        rationale:
          "Se necesita el auxiliar 'doesn't' y el verbo en la forma base ('work').",
      },
    ],
    hint: "El sujeto 'He' necesita un auxiliar que lleve la '-s'.",
  },
  {
    question:
      '7. Elige la forma correcta del verbo: **"My mom often ______ coffee in the kitchen."**',
    options: [
      {
        text: "drink",
        isCorrect: false,
        rationale: "Le falta la 's' de la tercera persona del singular.",
      },
      {
        text: "drinks",
        isCorrect: true,
        rationale:
          "'My mom' es 'she', por lo tanto, se añade '-s' al verbo 'drink'.",
      },
      {
        text: "is drink",
        isCorrect: false,
        rationale: "Esta construcción es incorrecta en inglés.",
      },
      {
        text: "drank",
        isCorrect: false,
        rationale: "Este es el pasado de 'drink'.",
      },
    ],
    hint: "Piensa en la regla de la 's' para 'My mom' (ella).",
  },
  {
    question:
      '8. Completa la rutina: **"Before bed, I usually ______ a book."**',
    options: [
      {
        text: "reading",
        isCorrect: false,
        rationale:
          "El gerundio ('-ing') es incorrecto sin un auxiliar del verbo 'to be'.",
      },
      {
        text: "read",
        isCorrect: true,
        rationale:
          "El sujeto 'I' usa la forma base del verbo para hábitos. 'Read a book' es una rutina común.",
      },
      {
        text: "reads",
        isCorrect: false,
        rationale: "'Reads' es incorrecto, solo se usa con he, she, it.",
      },
      {
        text: "am read",
        isCorrect: false,
        rationale: "Esta construcción es gramaticalmente incorrecta.",
      },
    ],
    hint: "¿Qué haces con un libro antes de dormir? El sujeto es 'I'.",
  },
  {
    question:
      '9. ¿Cómo preguntarías si ellos tienen una rutina? **"______ they go to the park on Sundays?"**',
    options: [
      {
        text: "Does",
        isCorrect: false,
        rationale: "'Does' es solo para he, she, it.",
      },
      {
        text: "Is",
        isCorrect: false,
        rationale: "El auxiliar 'Is' es para el verbo 'to be'.",
      },
      {
        text: "Do",
        isCorrect: true,
        rationale:
          "El sujeto 'they' requiere el auxiliar 'Do' para formar la pregunta en Presente Simple.",
      },
      {
        text: "Are",
        isCorrect: false,
        rationale: "El auxiliar 'Are' es para el verbo 'to be'.",
      },
    ],
    hint: "El auxiliar para el sujeto 'They' es el más sencillo (sin la 's').",
  },
  {
    question:
      '10. Elige la opción correcta: **"We ______ English class twice a week."**',
    options: [
      {
        text: "has",
        isCorrect: false,
        rationale: "'Has' es solo para he, she, it.",
      },
      {
        text: "have",
        isCorrect: true,
        rationale:
          "El sujeto 'We' utiliza la forma base del verbo 'have' para indicar una actividad o posesión.",
      },
      {
        text: "having",
        isCorrect: false,
        rationale: "Incorrecto, se necesita la forma base del verbo.",
      },
      {
        text: "do have",
        isCorrect: false,
        rationale:
          "Aunque gramaticalmente posible para énfasis, 'have' solo es la opción más simple y común.",
      },
    ],
    hint: "'We' no es tercera persona del singular.",
  },
  {
    question: '11. Corrige el error: **"The cat don\'t like milk."**',
    options: [
      {
        text: "The cat not like milk",
        isCorrect: false,
        rationale:
          "Se necesita el auxiliar 'do' o 'does' en su forma negativa.",
      },
      {
        text: "The cat doesn't like milk",
        isCorrect: true,
        rationale:
          "'The cat' es 'it' (tercera persona del singular), por lo que el auxiliar negativo correcto es 'doesn't', y el verbo permanece en la forma base.",
      },
      {
        text: "The cat don't likes milk",
        isCorrect: false,
        rationale:
          "Doble error: 'don't' es incorrecto, y el verbo principal no lleva '-s' después del auxiliar.",
      },
      {
        text: "The cat no likes milk",
        isCorrect: false,
        rationale: "Esa construcción es incorrecta en inglés.",
      },
    ],
    hint: "Recuerda que 'The cat' (el gato) es singular (it).",
  },
  {
    question:
      '12. Completa la pregunta: **"Where ______ she ______ after school?"**',
    options: [
      {
        text: "do / go",
        isCorrect: false,
        rationale: "'Do' es incorrecto para 'she', y la forma base es 'go'.",
      },
      {
        text: "does / goes",
        isCorrect: false,
        rationale:
          "'Does' es correcto, pero el verbo principal ya no lleva '-s'.",
      },
      {
        text: "does / go",
        isCorrect: true,
        rationale:
          "La pregunta con 'she' usa 'does' como auxiliar y el verbo en su forma base ('go').",
      },
      {
        text: "do / goes",
        isCorrect: false,
        rationale: "Ambos son incorrectos para 'she'.",
      },
    ],
    hint: "El auxiliar *does* ya lleva la 's', el verbo principal va en su forma base (infinitivo sin 'to').",
  },
  {
    question:
      '13. ¿Qué haces al final del día? **"I usually ______ at 11 PM."**',
    options: [
      {
        text: "wake up",
        isCorrect: false,
        rationale: "'Wake up' (despertarse) sucede al comienzo del día.",
      },
      {
        text: "sleep",
        isCorrect: true,
        rationale:
          "La hora 11 PM se relaciona más comúnmente con la acción de dormir o ir a la cama ('sleep').",
      },
      {
        text: "wash up",
        isCorrect: false,
        rationale:
          "'Wash up' (lavarse/asearse) puede ser en la mañana o en la noche.",
      },
      {
        text: "do homework",
        isCorrect: false,
        rationale:
          "Aunque posible, 'sleep' es la rutina más probable a las 11 PM.",
      },
    ],
    hint: "11 PM es la hora de descansar y terminar la jornada.",
  },
  {
    question: '14. ¿Es correcta la pregunta? **"Do he work in a bank?"**',
    options: [
      {
        text: "Sí, es correcta.",
        isCorrect: false,
        rationale:
          "La pregunta es incorrecta debido al auxiliar usado. 'He' requiere 'Does'.",
      },
      {
        text: "No, debería ser 'Does he work in a bank?'.",
        isCorrect: true,
        rationale:
          "El sujeto 'he' requiere el auxiliar 'Does' para formar la pregunta en Presente Simple.",
      },
      {
        text: "No, debería ser 'Is he work in a bank?'.",
        isCorrect: false,
        rationale:
          "Se utiliza 'Does', no 'Is' para preguntar sobre una profesión habitual.",
      },
      {
        text: "No, debería ser 'Do he works in a bank?'.",
        isCorrect: false,
        rationale:
          "El verbo principal va en forma base ('work') después de un auxiliar.",
      },
    ],
    hint: "Verifica el auxiliar que corresponde al pronombre 'he'.",
  },
  {
    question:
      '15. Elige la forma correcta del verbo: **"My friend Ana ______ the piano every day."**',
    options: [
      {
        text: "play",
        isCorrect: false,
        rationale: "Le falta la 's' de la tercera persona del singular.",
      },
      {
        text: "plays",
        isCorrect: true,
        rationale:
          "'My friend Ana' es 'she', por lo que el verbo 'play' debe llevar la terminación '-s'.",
      },
      {
        text: "playing",
        isCorrect: false,
        rationale:
          "El gerundio ('-ing') es incorrecto sin un auxiliar del verbo 'to be'.",
      },
      {
        text: "is play",
        isCorrect: false,
        rationale: "Esta construcción es incorrecta.",
      },
    ],
    hint: "El nombre 'Ana' es singular (ella). Aplica la regla de la 's'.",
  },
];

let currentQuestionIndex = 0;
let score = 0;
let isAnswered = false;

const questionTextElement = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score");
const progressBar = document.getElementById("progress-bar");
const quizContent = document.getElementById("quiz-content");

// Función para cargar la pregunta actual
function loadQuestion() {
  isAnswered = false;
  nextButton.disabled = true;
  feedbackElement.classList.remove("show");
  feedbackElement.innerHTML = "";
  optionsContainer.innerHTML = "";

  if (currentQuestionIndex < questions.length) {
    const currentQuestion = questions[currentQuestionIndex];

    // Actualizar barra de progreso y score
    progressBar.textContent = `Pregunta ${currentQuestionIndex + 1} de ${
      questions.length
    }`;
    scoreElement.textContent = `Puntaje: ${score}`;

    // Cargar texto de la pregunta
    questionTextElement.innerHTML = currentQuestion.question;

    // Cargar opciones
    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.classList.add("option-button");
      button.textContent = option.text;
      button.onclick = () => checkAnswer(option, button);
      optionsContainer.appendChild(button);
    });
  } else {
    showResults();
  }
}

// Función para verificar la respuesta
function checkAnswer(selectedOption, button) {
  if (isAnswered) return; // Evitar doble clic
  isAnswered = true;

  // Deshabilitar todas las opciones
  Array.from(optionsContainer.children).forEach((btn) => {
    btn.disabled = true;
  });

  // Mostrar retroalimentación
  let feedbackHTML = "";
  const correctOption = questions[currentQuestionIndex].options.find(
    (opt) => opt.isCorrect
  );

  if (selectedOption.isCorrect) {
    score++;
    button.classList.add("correct");
    feedbackHTML = "🎉 **¡Correcto!** ";
  } else {
    button.classList.add("incorrect");
    // Marcar la correcta para enseñanza
    const correctButton = Array.from(optionsContainer.children).find(
      (btn) => btn.textContent === correctOption.text
    );
    if (correctButton) {
      correctButton.classList.add("correct");
    }
    feedbackHTML = "❌ **Incorrecto.** ";
  }

  // Añadir la explicación
  feedbackHTML += ` ${selectedOption.rationale}.<br><span class="rationale">💡 Pista: ${questions[currentQuestionIndex].hint}</span>`;

  feedbackElement.innerHTML = feedbackHTML;
  feedbackElement.classList.add("show");

  nextButton.disabled = false; // Habilitar botón Siguiente
  scoreElement.textContent = `Puntaje: ${score}`;
}

// Función para ir a la siguiente pregunta
function nextQuestion() {
  currentQuestionIndex++;
  loadQuestion();
}

// Función para mostrar los resultados finales
function showResults() {
  const finalScore = score;
  const totalQuestions = questions.length;
  const percentage = ((finalScore / totalQuestions) * 100).toFixed(0);

  let message = "";
  if (percentage >= 80) {
    message =
      "¡Felicidades! 🌟 Tienes un dominio excelente del Presente Simple y las Rutinas Diarias.";
  } else if (percentage >= 50) {
    message =
      "¡Buen trabajo! 💪 Tienes una base sólida, pero revisa la regla de la " +
      (finalScore < 10
        ? "'s' en el auxiliar 'Does'."
        : "forma base del verbo después de 'Do/Does'.");
  } else {
    message =
      "¡Sigue practicando! 💬 Este es un gran comienzo. Concéntrate en la diferencia entre **Do** y **Does**.";
  }

  quizContent.innerHTML = `
        <div class="results-container" style="text-align: center; padding: 40px;">
            <h2 style="color: #5B9CC7;">Quiz Terminado - ¡Resultados!</h2>
            <p style="font-size: 1.2rem;">Tu puntaje final es: <strong>${finalScore} de ${totalQuestions}</strong></p>
            <p style="font-size: 2rem; font-weight: 700; color: #5B9CC7;">${percentage}%</p>
            <p>${message}</p>
            <p style="margin-top: 20px;">**Practice makes progress — not perfection!**</p>
            <button class="next-button" onclick="window.location.reload()">Empezar de Nuevo</button>
        </div>
    `;
  progressBar.textContent = "¡Completado!";
}

// Event Listeners
nextButton.addEventListener("click", nextQuestion);

// Iniciar el quiz
document.addEventListener("DOMContentLoaded", loadQuestion);
// ... (código anterior sin cambios) ...

// Función para mostrar los resultados finales (MODIFICADA)
function showResults() {
  const finalScore = score;
  const totalQuestions = questions.length;
  const percentage = ((finalScore / totalQuestions) * 100).toFixed(0);

  let message = "";
  let specialMessage = "";

  // Lógica del mensaje especial de la zanahoria 🥕
  if (finalScore >= 10) {
    // Mensaje para 10 o más respuestas correctas
    specialMessage = `<h3 style="color: #E67E22; font-size: 1.5rem; margin-top: 15px;">🎉 ¡FELICIDADES ZANAHORIA! 🥕</h3>
                          <p style="font-weight: 600;">Respondiste ${finalScore} preguntas bien. ¡Dominas el Presente Simple!</p>`;
  } else {
    // Mensaje general si son menos de 10
    if (percentage >= 50) {
      message =
        "¡Buen trabajo! 💪 Tienes una base sólida, pero revisa la regla de la " +
        (finalScore < 10
          ? "'s' en el auxiliar 'Does' y sigue practicando."
          : "forma base del verbo después de 'Do/Does'.");
    } else {
      message =
        "¡Sigue practicando! 💬 Este es un gran comienzo. Concéntrate en la diferencia entre **Do** y **Does**. Recuerda: ¡La práctica hace el progreso!";
    }
  }

  quizContent.innerHTML = `
        <div class="results-container" style="text-align: center; padding: 40px;">
            <h2 style="color: #5B9CC7;">Quiz Terminado - ¡Resultados!</h2>
            <p style="font-size: 1.2rem;">Tu puntaje final es: <strong>${finalScore} de ${totalQuestions}</strong></p>
            <p style="font-size: 2rem; font-weight: 700; color: #5B9CC7;">${percentage}%</p>
            
            ${specialMessage || `<p>${message}</p>`} 
            
            <p style="margin-top: 20px;">**Practice makes progress — not perfection!**</p>
            <button class="next-button" onclick="window.location.reload()">Empezar de Nuevo</button>
        </div>
    `;
  progressBar.textContent = "¡Completado!";
}

// Event Listeners
nextButton.addEventListener("click", nextQuestion);

// Iniciar el quiz
document.addEventListener("DOMContentLoaded", loadQuestion);
