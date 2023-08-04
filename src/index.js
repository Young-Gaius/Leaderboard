import './style.css';
// Event listener for the submit button
import addScore from "./add.js";
import refreshScores from "./disply.js";
const submitButton = document.getElementById('btn');
submitButton.addEventListener('click', async() => {
  const nameInput = document.getElementById('f-input');
  const scoreInput = document.getElementById('s-input');

  const name = nameInput.value;
  const score = parseInt(scoreInput.value);

 await addScore(name, score);
  nameInput.value = '';
  scoreInput.value = '';

  console.log(name)
  console.log('Hi')
});

// Event listener for the refresh button
const refreshButton = document.querySelector('.refresh')
refreshButton.addEventListener('click', refreshScores )
window.addEventListener('load', refreshScores)