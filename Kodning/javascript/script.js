const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const backButton = document.getElementById('back-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
  nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

startButton.addEventListener('click', startGame)
  backButton.addEventListener('click', () => {
  currentQuestionIndex++
  setcurrentQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else{
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
}
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct){
    element.classList.add('correct')
  } else{
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Har du mistet en som står dig nær?',
    answers: [
      { text: 'Ja', correct: true},
      { text: 'Nej', correct: false},
    ]
  },
  {
    question: 'Hvor gammel er du?',
    answers: [
      { text: 'Ja', correct: true},
      { text: 'Nej', correct: false},
    ]
  },
  {
    question: 'Har du indimellem svært ved at koncentrere dig i løbet af dagen?',
    answers: [
      { text: 'Ja', correct: true},
      { text: 'Nej', correct: false},
    ]
  },
  {
    question: 'Har du indimellem svært ved at overskue selv små ting i hverdagen?',
    answers: [
      { text: 'Ja', correct: true},
      { text: 'Nej', correct: false},
    ]
  },
  {
    question: 'Føler du dig indimellem ensom?',
    answers: [
      { text: 'Ja', correct: true},
      { text: 'Nej', correct: false},
    ]
  },
  {
    question: 'Bliver du ofte sur eller ked af det over små ting?',
    answers: [
      { text: 'Ja', correct: true},
      { text: 'Nej', correct: false},
    ]
  },
  {
    question: 'Føler du, at du ikke rigtig får talt med dine venner om, at din mor/far er bortgået?',
    answers: [
      { text: 'Ja', correct: true},
      { text: 'Nej', correct: false},
    ]
  },
  {
    question: 'Føler du, at du ikke rigtig får talt med dine forældre om din mors/fars død?',
    answers: [
      { text: 'Ja', correct: true},
      { text: 'Nej', correct: false},
    ]
  },
  {
    question: 'Har du ofte svært ved at falde i søvn eller sover du uroligt om natten?',
    answers: [
      { text: 'Ja', correct: true},
      { text: 'Nej', correct: false},
    ]
  },
  {
    question: 'Kan du føle, at du har for stort ansvar derhjemme?',
    answers: [
      { text: 'Ja', correct: true},
      { text: 'Nej', correct: false},
    ]
  }
]
