const getColor = () => {
  let randomNumber = Math.floor(Math.random() * 16777215);
  let randomCode= "#"+randomNumber.toString(16)
  document.getElementById('code').innerText=randomCode;
  document.body.style.backgroundColor=randomCode
};

document.getElementById("btn").addEventListener("click", getColor);


getColor()



// 16777215
