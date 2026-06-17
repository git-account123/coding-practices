/** @type {HTMLInputElement} */
const rangeInput1 = document.querySelector("#from");

/** @type {HTMLInputElement} */
const rangeInput2 = document.querySelector("#to");
/** @type {HTMLInputElement} */
const guessInput = document.querySelector("#num")
const paraEl = document.querySelector("p");
const btnEL= document.querySelector("button");

function randomNumber(min,max){
   return Math.floor(Math.random() * (max - min + 1)) + min;
}




function playGame(){
   const guessChoice = Number(guessInput.value);
  const min = Number(rangeInput1.value);
  const max = Number(rangeInput2.value);

  const computerChoice = randomNumber(min, max);
   if(!guessInput.value) return;

   if(guessChoice === computerChoice){
      paraEl.textContent = `Kudos!!! u have guessed ${guessChoice} matches  the number ${computerChoice}`
 } else if(guessChoice > computerChoice){
      paraEl.textContent = "too high";
   } else{
      paraEl.textContent = " too low"
   };
   guessInput.value = '';
   guessInput.focus();
    
    
};

btnEL.addEventListener('click', (e) => {
e.preventDefault();
playGame();
});


