const paraEL = document.querySelector('p');
const incBtn = document.querySelector('#increment');
console.log(incBtn);
const decrBtn = document.querySelector('#decrement');

//input
// inc button click
//dec btn click

//state
//count

//logic
// count = count + 1
// count = count - 1
let count = 0;
paraEL.textContent = count;
paraEL.style.marginLeft = '10px';
paraEL.style.marginRight = '10px';

incBtn.classList.add('btn');
incBtn.style.backgroundColor = 'lightblue';
decrBtn.classList.add('btn');
decrBtn.style.backgroundColor = 'red';

function incCount(){
  count = count + 1;
  paraEL.textContent = `${count}`
};

function decCount(){
  if(count > 0){
    count -= 1;
    paraEL.textContent = `${count}`;
  } else{
    paraEL.textContent = '0'
  }
};

incBtn.addEventListener('click',incCount);

decrBtn.addEventListener('click',decCount)