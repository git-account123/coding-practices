const inputEl = document.querySelector("input");
const btnEL = document.querySelector("#btn");
const listEL = document.querySelector("#list");

function handleSubmit(e) {
   e.preventDefault();
   const inputValue = inputEl.value.trim();
   if (!inputValue) return;

   const li = document.createElement("li");
   const itemSpan = document.createElement("span");
   itemSpan.textContent = inputValue;

   const editBtn = document.createElement("button");
   editBtn.type = "button";
   editBtn.textContent = "Edit";
   editBtn.addEventListener("click", () => {
      const updatedValue = prompt("Edit item:", itemSpan.textContent);
      if (updatedValue !== null) {
         const trimmed = updatedValue.trim();
         if (trimmed) {
            itemSpan.textContent = trimmed;
         }
      }
   });

   const deleteBtn = document.createElement("button");
   deleteBtn.type = "button";
   deleteBtn.textContent = "Delete";
   deleteBtn.addEventListener("click", () => {
      listEL.removeChild(li);
   });

   li.appendChild(itemSpan);
   li.appendChild(editBtn);
   li.appendChild(deleteBtn);

   listEL.appendChild(li);
   inputEl.value = "";
   inputEl.focus();
};

 

btnEL.addEventListener('click', handleSubmit);