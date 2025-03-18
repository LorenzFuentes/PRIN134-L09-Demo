const ingredientsList = document.getElementById('recipe-ingredients');
const instructionsList = document.getElementById('recipe-instructions');




button1.addEventListener('click', highlightIngredients);
button2.addEventListener('click', checkInstructions);
button3.addEventListener('click', resetInstructions);



function highlightIngredients() {
  const ingredients = ingredientsList.children;
  for (let i = 0; i < ingredients.length; i++) {
    if (i % 2 === 0) {
      ingredients[i].style.backgroundColor = 'yellow';
    } else {
      ingredients[i].style.backgroundColor = '';
    }
  }
}

function checkInstructions() {
  setTimeout(() => {
    const instructions = instructionsList.children;
    for (let i = 0; i < instructions.length; i++) {
      instructions[i].classList.toggle("is-done");
    }
  }, 3000);
}

function resetInstructions() {
  const instructions = instructionsList.children;
  for (let i = 0; i < instructions.length; i++) {
    instructions[i].classList.remove("is-done");
  }
}

function animatedIngredients(){
    const element = document.getElementById("title");
    element.classList.add('animate__animated', 'animate__bounceOutLeft');
}

function animatedInstruction(){
    const element = document.getElementById("title-inst");
    element.classList.add("animate__animated", "animate__tada");
}

function animatedImg(){
    const element = document.getElementById("recipe-title");
    element.classList.add("animate__animated", "animate__lightSpeedInRight");
}

