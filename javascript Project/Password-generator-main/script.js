const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "!@#$%&*/*-+";

const passBox = document.getElementById("pass-box");
const totleChar = document.getElementById("totle-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numbersInput = document.getElementById("numbers");
const symbolsInput = document.getElementById("symbols");

const getRandomData = (dataSet) => {
  
  return dataSet[Math.floor(Math.random() * dataSet.length)];
};

// console.log(getRandomData(upperSet));
// var randomDecimal = Math.random();
// console.log(randomDecimal * 26);

const generatePassword = (password = "") => {
  if (upperInput.checked) {
    password += getRandomData(upperSet);
  }
  if (lowerInput.checked) {
    password += getRandomData(lowerSet);
  }
  if (numbersInput.checked) {
    password += getRandomData(numberSet);
  }
  if (symbolsInput.checked) {
    password += getRandomData(symbolSet);
  }
  if (password.length < totleChar.value) {
    return generatePassword(password);
  }
  passBox.innerText = truncatString(password, totleChar.value);
};

// generatePassword();

document.getElementById("btn").addEventListener("click", function () {
  generatePassword();
});

function truncatString(str, num) {
  if (str.length > num) {
    let Substr = str.substring(0, num);
    // console.log(Substr.length);
    return Substr;
  } else {
    return str;
  }
}
