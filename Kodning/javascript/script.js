// MIES KODE STARTER HER

const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const backButton = document.getElementById("back-btn");
const questionContainerElement = document.getElementById("question-container");
const finishContainerElement = document.getElementById("finish-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
backButton.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    setNextQuestion();
  }
});
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.ceil() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

// MIES KODE SLUTTER HER

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", (e) => {
      selectAnswer(e, answer);
      answerButtonsElement.removeEventListener;
    });
    answerButtonsElement.appendChild(button);
  });
}

//

function resetState() {
  // Next index 0
  if (currentQuestionIndex <= 0 && !backButton.classList.contains("hide")) {
    console.log("stuped");
    backButton.classList.add("hide");
  }

  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

//------------------------------------------------
function submit() {
  questionContainerElement.classList.add("hide");
  finishContainerElement.classList.remove("hide");
}
//------------------------------------------------

function selectAnswer(e, answer) {
  //////#Gem svar funktion
  // gemmer svaret i questions objekt
  // sætter answer når funktionen bliver kaldt
  questions[currentQuestionIndex].answer = answer;
  ////#Gem svar slutter her
  console.log(answer);
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
    ////#Tilbage knap
    // ----Viser tilbage knappen - afhængig af currentQuestionIndex og hvis den har hide klassse eller ej
    if (currentQuestionIndex > 0 && backButton.classList.contains("hide")) {
      backButton.classList.remove("hide");
    } else if (
      currentQuestionIndex <= 0 &&
      !backButton.classList.contains("hide")
    ) {
      console.log("stuped");
      backButton.classList.add("hide");
    }
  } else {
    startButton.innerText = "Send besvarelse";
    startButton.classList.remove("hide");
    //-------------------------------------------------------------------------------------------------------
    //var somelink = "'https://www.sololearn.com/learning/1024'";   //online link eller lokation til fil
    //startButton.setAttribute("onclick","weblink("+somelink+")");  //Tiliføjer onclik funktion til startButten.
    startButton.setAttribute("onclick","submit()");
    //--------------------------------------------------------------------------------------------------------
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

//----------------------------------------------------------------
function weblink(link) {
  //Indput: Hvis Online, brug url. Hvis offline, brug fil location
  window.location.assign(link);
}
//----------------------------------------------------------------


const questions = [
  {
    question: "Hvor gammel er du?",
    answers: [
      { text: "10 til 18 år", correct: true },
      { text: "over 18 år", correct: false },
    ],
    answer: null,
  },
  {
    question: "Har du mistet en som står dig nær?",
    answers: [
      { text: "Ja", correct: true },
      { text: "Nej", correct: false },
    ],
    answer: null,
  },
  {
    question:
      "Har du indimellem svært ved at koncentrere dig i løbet af dagen?",
    answers: [
      { text: "Ja", correct: true },
      { text: "Nej", correct: false },
    ],
    answer: null,
  },
  {
    question:
      "Har du indimellem svært ved at overskue selv små ting i hverdagen?",
    answers: [
      { text: "Ja", correct: true },
      { text: "Nej", correct: false },
    ],
    answer: null,
  },
  {
    question: "Føler du dig indimellem ensom?",
    answers: [
      { text: "Ja", correct: true },
      { text: "Nej", correct: false },
    ],
    answer: null,
  },
  {
    question: "Bliver du ofte sur eller ked af det over små ting?",
    answers: [
      { text: "Ja", correct: true },
      { text: "Nej", correct: false },
    ],
    answer: null,
  },
  {
    question:
      "Føler du, at du ikke rigtig får talt med dine venner om, at din mor/far er bortgået?",
    answers: [
      { text: "Ja", correct: true },
      { text: "Nej", correct: false },
    ],
    answer: null,
  },
  {
    question:
      "Føler du, at du ikke rigtig får talt med dine forældre om din mors/fars død?",
    answers: [
      { text: "Ja", correct: true },
      { text: "Nej", correct: false },
    ],
    answer: null,
  },
  {
    question:
      "Har du ofte svært ved at falde i søvn eller sover du uroligt om natten?",
    answers: [
      { text: "Ja", correct: true },
      { text: "Nej", correct: false },
    ],
    answer: null,
  },
  {
    question: "Kan du føle, at du har for stort ansvar derhjemme?",
    answers: [
      { text: "Ja", correct: true },
      { text: "Nej", correct: false },
    ],
    answer: null,
  }
  //-----------------
  //Fjernet en del og indsat div i HTML
  //-----------------
];
