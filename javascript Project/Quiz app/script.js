const quizData = [
  {
    que: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    que: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    que: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    que: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

let index = 0;
let totle = quizData.length;
let right = 0;
let wrong = 0;

let queBox = document.getElementById("que-box");
let optionInput = document.querySelectorAll(".options");

const loadQuetion = () => {
  if (index === totle) {
    endQuiz();
  }
  reset();
  let data = quizData[index];
  queBox.innerText = `${index + 1}.  ${data.que}`;

  optionInput[0].nextElementSibling.innerText = data.a;
  optionInput[1].nextElementSibling.innerText = data.b;
  optionInput[2].nextElementSibling.innerText = data.c;
  optionInput[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
  let data = quizData[index];
  const ans = getAnswer();
  console.log(ans, data.correct);
  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuetion();
  return;
};

const getAnswer = () => {
  let answer;
  optionInput.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

const reset = () => {
  optionInput.forEach((input) => {
    input.checked = false;
  });
};

const endQuiz = () => {
  document.getElementById("box").innerHTML = `<div style="text-align:center">
  <h3>Thank you playing the quiz </h3>
  <h2>${right} / ${totle} are correct!</h2>
  </div>
  `;
};

loadQuetion();
