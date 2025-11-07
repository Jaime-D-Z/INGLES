const questions = [
  {
    question:
      '1. Elige la opción correcta para completar la oración: **"I ______ a student."**',
    options: [
      {
        text: "is",
        isCorrect: false,
        rationale:
          "'Is' se usa solo con He, She, It (tercera persona del singular).",
      },
      {
        text: "am",
        isCorrect: true,
        rationale:
          "'Am' es la forma del Verbo To Be que siempre se usa con 'I'.",
      },
      {
        text: "are",
        isCorrect: false,
        rationale: "'Are' se usa con You, We, They.",
      },
    ],
    hint: "La única forma del Verbo To Be para 'I' es 'am'.",
  },
  {
    question:
      "2. ¿Cuál es la forma negativa correcta? **'They ______ at home right now.'**",
    options: [
      {
        text: "is not",
        isCorrect: false,
        rationale: "'Is not' (isn't) es incorrecto para 'They'.",
      },
      {
        text: "am not",
        isCorrect: false,
        rationale: "'Am not' es incorrecto para 'They'.",
      },
      {
        text: "are not",
        isCorrect: true,
        rationale:
          "La forma negativa correcta para 'They' es 'are not' o su contracción 'aren't'.",
      },
    ],
    hint: "El pronombre 'They' requiere 'are'.",
  },
  {
    question:
      '3. Completa la pregunta: **"______ she happy with her new job?"**',
    options: [
      {
        text: "Are",
        isCorrect: false,
        rationale: "'Are' es incorrecto; se usa con you, we, they.",
      },
      {
        text: "Is",
        isCorrect: true,
        rationale:
          "'Is' es la forma correcta del Verbo To Be para el sujeto 'she'.",
      },
      {
        text: "Am",
        isCorrect: false,
        rationale: "'Am' es solo para 'I'.",
      },
    ],
    hint: "El sujeto es 'she'. ¿Qué forma necesita la tercera persona del singular?",
  },
  {
    question:
      '4. Elige la opción correcta: **"My dog ______ five years old."**',
    options: [
      {
        text: "are",
        isCorrect: false,
        rationale: "'My dog' es singular (it), por lo tanto, no se usa 'are'.",
      },
      {
        text: "is",
        isCorrect: true,
        rationale: "'My dog' es 'it', que requiere la forma 'is'.",
      },
      {
        text: "am",
        isCorrect: false,
        rationale: "'Am' es solo para 'I'.",
      },
    ],
    hint: "'My dog' se refiere a 'It' (es decir, una sola cosa/animal).",
  },
  {
    question:
      '5. ¿Cómo preguntarías si tú estás cansado/a? **"______ I tired?"**',
    options: [
      {
        text: "Are",
        isCorrect: false,
        rationale: "La pregunta 'Are I...' no existe en inglés estándar.",
      },
      {
        text: "Is",
        isCorrect: false,
        rationale: "El sujeto 'I' nunca usa 'Is'.",
      },
      {
        text: "Am",
        isCorrect: true,
        rationale:
          "Para preguntar sobre uno mismo, la estructura es: 'Am I...?'",
      },
    ],
    hint: "La única forma del Verbo To Be para 'I' es 'am', incluso en preguntas.",
  },
  {
    question:
      '6. Completa la oración negativa: **"We ______ from Spain, we are from Mexico."**',
    options: [
      {
        text: "isn't",
        isCorrect: false,
        rationale: "'Isn't' es incorrecto para 'We'.",
      },
      {
        text: "don't",
        isCorrect: false,
        rationale:
          "Se necesita el Verbo To Be ('are not'), no el auxiliar 'don't'.",
      },
      {
        text: "aren't",
        isCorrect: true,
        rationale:
          "La contracción correcta para 'We are not' es 'We aren't' (o 'We're not').",
      },
    ],
    hint: "'We' necesita 'are' en su forma negativa.",
  },
  {
    question:
      '7. Elige la forma correcta: **"They ______ very good friends."**',
    options: [
      {
        text: "is",
        isCorrect: false,
        rationale: "'Is' es solo para He, She, It.",
      },
      {
        text: "are",
        isCorrect: true,
        rationale: "El sujeto 'They' (ellos/ellas) requiere la forma 'are'.",
      },
      {
        text: "am",
        isCorrect: false,
        rationale: "'Am' es solo para 'I'.",
      },
    ],
    hint: "'They' (ellos) es plural y requiere 'are'.",
  },
  {
    question:
      '8. Responde a la pregunta: **"Is your name Sarah?"** (Respuesta afirmativa corta)',
    options: [
      {
        text: "Yes, my name is.",
        isCorrect: false,
        rationale:
          "La respuesta corta requiere usar el pronombre y el Verbo To Be: 'Yes, it is.'",
      },
      {
        text: "Yes, it is.",
        isCorrect: true,
        rationale:
          "'Your name' se reemplaza con el pronombre 'it' en la respuesta corta.",
      },
      {
        text: "Yes, I am.",
        isCorrect: false,
        rationale: "'I am' es incorrecto, la pregunta es sobre el 'name' (it).",
      },
    ],
    hint: "'Your name' es una cosa singular, que se sustituye con el pronombre 'it'.",
  },
  {
    question: '9. ¿Cómo preguntarías sobre la hora? **"What time ______ it?"**',
    options: [
      {
        text: "are",
        isCorrect: false,
        rationale: "'It' requiere 'is'.",
      },
      {
        text: "do",
        isCorrect: false,
        rationinge:
          "Se necesita el Verbo To Be ('is'), no el auxiliar 'do' del Presente Simple.",
      },
      {
        text: "is",
        isCorrect: true,
        rationale:
          "El pronombre 'it' requiere la forma 'is'. La pregunta es 'What time is it?'.",
      },
    ],
    hint: "'It' siempre va con 'is'.",
  },
  {
    question: '10. Elige la contracción correcta: **"He is very tall."**',
    options: [
      {
        text: "He'am very tall.",
        isCorrect: false,
        rationale: "'Am' es solo para 'I'.",
      },
      {
        text: "He're very tall.",
        isCorrect: false,
        rationale: "'Are' es incorrecto para 'He'.",
      },
      {
        text: "He's very tall.",
        isCorrect: true,
        rationale: "La contracción de 'He is' es 'He's'.",
      },
    ],
    hint: "La contracción para 'is' es agregar una apóstrofe y la 's' al pronombre.",
  },
  {
    question:
      '11. Elige la opción correcta para **"The books ______ on the table."**',
    options: [
      {
        text: "is",
        isCorrect: false,
        rationale: "'The books' es plural, por lo tanto, 'is' es incorrecto.",
      },
      {
        text: "are",
        isCorrect: true,
        rationale:
          "'The books' (los libros) es plural (They) y requiere la forma 'are'.",
      },
      {
        text: "am",
        isCorrect: false,
        rationale: "'Am' es solo para 'I'.",
      },
    ],
    hint: "El sujeto ('The books') es plural.",
  },
  {
    question:
      '12. Completa la negación: **"That movie ______ very interesting."**',
    options: [
      {
        text: "am not",
        isCorrect: false,
        rationale: "'Am not' es solo para 'I'.",
      },
      {
        text: "are not",
        isCorrect: false,
        rationale: "'That movie' es singular (it), no plural.",
      },
      {
        text: "isn't",
        isCorrect: true,
        rationale:
          "'That movie' es 'it', y la negación correcta es 'is not' o 'isn't'.",
      },
    ],
    hint: "'That movie' es un objeto singular (it).",
  },
  {
    question:
      '13. Elige la opción correcta para una pregunta de respuesta Sí/No: **"______ you a doctor?"**',
    options: [
      {
        text: "Is",
        isCorrect: false,
        rationale: "'Is' es incorrecto para 'You'.",
      },
      {
        text: "Are",
        isCorrect: true,
        rationale:
          "La pregunta para el sujeto 'You' (tú/ustedes) comienza con 'Are'.",
      },
      {
        text: "Am",
        isCorrect: false,
        rationale: "'Am' es solo para 'I'.",
      },
    ],
    hint: "El pronombre 'You' (tú) siempre usa 'Are'.",
  },
  {
    question: '14. Completa la pregunta: **"Where ______ you from?"**',
    options: [
      {
        text: "is",
        isCorrect: false,
        rationale: "'Is' es incorrecto para 'You'.",
      },
      {
        text: "are",
        isCorrect: true,
        rationale:
          "La estructura es WH-word + are + subject. La pregunta es 'Where are you from?'.",
      },
      {
        text: "do",
        isCorrect: false,
        rationale:
          "La pregunta sobre origen usa el Verbo To Be, no el auxiliar 'do'.",
      },
    ],
    hint: "La pregunta de origen ('de dónde eres') usa la forma 'are'.",
  },
  {
    question:
      '15. ¿Cuál es la respuesta negativa corta correcta? **"Are they students? No, ______."**',
    options: [
      {
        text: "they aren't.",
        isCorrect: true,
        rationale:
          "La respuesta negativa corta es 'No' + sujeto + Verbo To Be en negativo ('aren't').",
      },
      {
        text: "they not are.",
        isCorrect: false,
        rationale: "La estructura es incorrecta.",
      },
      {
        text: "they isn't.",
        isCorrect: false,
        rationale: "'Isn't' es incorrecto para 'They'.",
      },
    ],
    hint: "La respuesta debe usar 'they' y la forma negativa de 'are'.",
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

// Función para mostrar los resultados finales (ACTUALIZADA con el mensaje de la Zanahoria)
function showResults() {
  const finalScore = score;
  const totalQuestions = questions.length;
  const percentage = ((finalScore / totalQuestions) * 100).toFixed(0);

  let message = "";
  let specialMessage = "";

  // --- Lógica del mensaje especial de la zanahoria 🥕 ---
  if (finalScore >= 10) {
    // Mensaje para 10 o más respuestas correctas (¡Felicidades Zanahoria!)
    specialMessage = `<h3 style="color: #E67E22; font-size: 1.5rem; margin-top: 15px;">🎉 ¡FELICIDADES ZANAHORIA! 🥕</h3>
                        <p style="font-weight: 600;">Respondiste **${finalScore} preguntas bien**. ¡Dominas el Verbo To Be y vas por buen camino! 🔥</p>`;
  } else {
    // Mensaje general si son menos de 10
    if (percentage >= 50) {
      message =
        "¡Buen trabajo! 💪 Tienes una base, pero repasa cuándo usar **Is** (He, She, It) y cuándo usar **Are** (You, We, They).";
    } else {
      message =
        "¡Sigue practicando! 💬 Revisa la conjugación del **Verbo To Be** con cada pronombre (I, You, He, She, It, We, They). ¡La práctica hace el progreso!";
    }
  }

  quizContent.innerHTML = `
        <div class="results-container" style="text-align: center; padding: 40px;">
            <h2 style="color: #5B9CC7;">Quiz Terminado - ¡Resultados!</h2>
            <p style="font-size: 1.2rem;">Tu puntaje final es: <strong>${finalScore} de ${totalQuestions}</strong></p>
            <p style="font-size: 2rem; font-weight: 700; color: #5B9CC7;">${percentage}%</p>
            
            ${specialMessage || `<p>${message}</p>`} 
            
            <p style="margin-top: 20px;">**Keep learning, you're doing great!**</p>
            <button class="next-button" onclick="window.location.reload()">Empezar de Nuevo</button>
        </div>
    `;
  progressBar.textContent = "¡Completado!";
}

// Event listener para el botón Siguiente
nextButton.addEventListener("click", nextQuestion);

// Iniciar el quiz
window.onload = loadQuestion;
