
const inputEl = /** @type {HTMLInputElement} */ (document.querySelector('#userchoice'));
const formEl = document.querySelector('form');
const userEmoji = document.querySelector('#user');
const compEmoji = document.querySelector('#comp');
const paraEl = document.querySelector('#display');

/** State */
const state = {
  playerScore: 0,
  compScore: 0,
  isGameOver: false,
  maxScore: 3,
  lastRound: null // { userMove, compMove, result }
};

/** Allowed moves */
const MOVES = ['rock', 'paper', 'scissors'];

/** Logic (pure functions) */
function compChoice() {
  const i = Math.floor(Math.random() * MOVES.length);
  return MOVES[i];
}

function decideWinner(userMove, compMove) {
  if (userMove === compMove) return 'draw';

  if (
    (userMove === 'rock' && compMove === 'scissors') ||
    (userMove === 'paper' && compMove === 'rock') ||
    (userMove === 'scissors' && compMove === 'paper')
  ) return 'user';

  return 'computer';
}

/** State updater */
function applyRoundResult(result) {
  if (result === 'user') state.playerScore += 1;
  if (result === 'computer') state.compScore += 1;

  if (state.playerScore >= state.maxScore || state.compScore >= state.maxScore) {
    state.isGameOver = true;
  }
}

/** Output (render) */
function render() {
  if (!state.lastRound) {
    paraEl.textContent = `First to ${state.maxScore} wins. Enter rock/paper/scissors.`;
    userEmoji.textContent = '';
    compEmoji.textContent = '';
    return;
  }

  const { userMove, compMove, result } = state.lastRound;
  userEmoji.textContent = `You: ${userMove}`;
  compEmoji.textContent = `Comp: ${compMove}`;

  if (result === 'draw') {
    paraEl.textContent = `Draw — both chose ${userMove}. Scores — You: ${state.playerScore} Comp: ${state.compScore}`;
  } else if (result === 'user') {
    paraEl.textContent = `You win this round! Scores — You: ${state.playerScore} Comp: ${state.compScore}`;
  } else {
    paraEl.textContent = `Computer wins this round. Scores — You: ${state.playerScore} Comp: ${state.compScore}`;
  }

  if (state.isGameOver) {
    const winner = state.playerScore > state.compScore ? 'You' : 'Computer';
    paraEl.textContent += `\nGame Over — ${winner} won the match.`;
    inputEl.disabled = true;
    ensureRestartButton();
  }
}

/** Input handler */
function handlePlay(e) {
  e.preventDefault();
  if (state.isGameOver) return;

  const raw = inputEl.value.toLowerCase().trim();
  if (!MOVES.includes(raw)) {
    paraEl.textContent = `Invalid move: "${inputEl.value}" — enter rock, paper, or scissors.`;
    return;
  }

  const userMove = raw;
  const compMove = compChoice();
  const result = decideWinner(userMove, compMove);

  state.lastRound = { userMove, compMove, result };
  applyRoundResult(result);
  render();
  inputEl.value = '';
  inputEl.focus();
}

function restartGame() {
  state.playerScore = 0;
  state.compScore = 0;
  state.isGameOver = false;
  state.lastRound = null;
  inputEl.disabled = false;
  render();
}

/** Ensure there's a restart button visible when game ends */
function ensureRestartButton() {
  let btn = document.querySelector('#rps-restart');
  if (!btn) {
    btn = document.createElement('button');
    btn.id = 'rps-restart';
    btn.textContent = 'Restart';
    btn.addEventListener('click', (ev) => {
      ev.preventDefault();
      restartGame();
    });
    document.body.appendChild(btn);
  }
}

/** Wire up events and initial render */
if (formEl) formEl.addEventListener('submit', handlePlay);
render();


