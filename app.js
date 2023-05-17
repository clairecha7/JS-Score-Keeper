const btnPlayer1 = document.getElementById('btnPlayer1');
const btnPlayer2 = document.querySelector('#btnPlayer2');
const btnReset = document.getElementsByTagName('button')[2];
// console.log(btnReset);
const inputWinScore = document.getElementById('winScore');
const spanPlayer1 = document.getElementById('spanPlayer1');
const spanPlayer2 = document.getElementById('spanPlayer2');

let scoreP1 = 0;
let scoreP2 = 0;
let winScore = Number(inputWinScore.value);

// function handlePlayer1Click() {
//   //   let score = Number(spanPlayer1.textContent);
//   //   score += 1;
//   scoreP1++;
//   spanPlayer1.textContent = scoreP1;
//   if (scoreP1 >= winScore) {
//     console.log('Player1 won');
//     spanPlayer1.style.color = 'green';
//     spanPlayer2.style.color = 'red';
//     // btnPlayer1.removeEventListener('click', handlePlayer1Click);
//     btnPlayer1.disabled = true;
//     btnPlayer2.disabled = true;
//   }
// }

// function handlePlayer2Click() {
//   scoreP2++;
//   spanPlayer2.textContent = scoreP2;
//   if (scoreP2 >= winScore) {
//     spanPlayer2.style.color = 'green';
//     spanPlayer1.style.color = 'red';
//     btnPlayer1.disabled = true;
//     btnPlayer2.disabled = true;
//   }
// }

function handlePlayerClick(e) {
  console.log(e.target.id);
  if (e.target.id === 'btnPlayer1') {
    scoreP1++;
    spanPlayer1.textContent = scoreP1;
    if (scoreP1 >= winScore) {
      console.log('Player1 won');
      spanPlayer1.style.color = 'green';
      spanPlayer2.style.color = 'red';
      btnPlayer1.disabled = true;
      btnPlayer2.disabled = true;
    }
  } else {
    scoreP2++;
    spanPlayer2.textContent = scoreP2;
    if (scoreP2 >= winScore) {
      spanPlayer2.style.color = 'green';
      spanPlayer1.style.color = 'red';
      btnPlayer1.disabled = true;
      btnPlayer2.disabled = true;
    }
  }
}

btnPlayer1.addEventListener('click', handlePlayerClick);
btnPlayer2.addEventListener('click', handlePlayerClick);

btnReset.addEventListener('click', () => {
  // window.location.reload();
  scoreP1 = 0;
  scoreP2 = 0;
  spanPlayer1.textContent = 0;
  spanPlayer2.textContent = 0;
  spanPlayer1.style.color = 'black';
  spanPlayer2.style.color = 'black';
  btnPlayer1.disabled = false;
  btnPlayer2.disabled = false;
});

document.querySelector('.buttons').addEventListener('click', (e) => {
  console.log('from buttons div');
  console.log(e.target.children);
});