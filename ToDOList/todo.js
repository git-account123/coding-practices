const formEl = document.querySelector('form');
const ulList = document.querySelector('#tasklist');
const inputEl  = document.querySelector('#input');

//input: button click, task input

//state: currentInput, isAdded

//logic: adding input to list,preventing from adding duplicates,
// delete task, adit task and mark completed;

//output: update the UI;
let tasks = [];


const colors = ['blue','orange','green','yellow'];
function randomColor(){
    const randomIndex =  Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}
function addTask(){
   let currentValue = inputEl.value.trim();

    if(!tasks.includes(currentValue)){
        tasks.push(currentValue);
        console.log(tasks);
      render(currentValue);
      inputEl.value = '';
    } else{
        alert(`this task ${currentValue} is already in todos`)
    }
   }


function render(value){
    const li = document.createElement('li');
    li.textContent = value;
    li.style.width = '200px';
    li.style.height = '40px';
    li.style.borderLeft = `2px solid ${randomColor()}`;
    li.style.padding = '10px';
    li.style.color = 'white';
    li.style.backgroundColor = `${randomColor()}`;
    li.style.marginBottom = '20px'
    ulList.appendChild(li);
};

formEl.addEventListener('submit',(e) => {
    e.preventDefault();
    console.log('am clicked');
    addTask();
})
