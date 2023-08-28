'use strict';
// please do not delete the 'use strict' line above

document.getElementById('color-button').addEventListener('click', changeColor);
document.getElementById('be-exorbitant').addEventListener('click', getAnimal);
document.getElementById('back-ground-button').addEventListener('click', changeBackGround);

function changeColor() {
  console.log('Button clicked!'); // feel free to change/delete this line
  document.body.style.backgroundColor = `#FFC0CB`;
  document.getElementById(`color-button`).style.backgroundColor = `green`;
}

function getAnimal() {
  document.getElementById(`be-exorbitant`).style.backgroundColor = `red`;
  alert("ウキー！ウキキウキー！ウキ？🤔");
  let outPutAnimal = document.getElementById("text-animal"); 
  outPutAnimal.innerHTML += "🙈🙉🙊🙈🙉🙊";
}

function changeBackGround() {
  document.body.style.backgroundImage = "url(1.jpg)";
  document.getElementById(`back-ground-button`).style.backgroundColor = `#FFCCFF`;
}

