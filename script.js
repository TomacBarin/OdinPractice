const container = document.querySelector("#container");

const redP = document.createElement("p");
redP.classList.add("redP");
redP.textContent = "Hey I'm red!";
container.appendChild(redP);
redP.style.color = ("red");

const answerP = document.createElement("p");
answerP.classList.add("answerP");
answerP.textContent = "Hey red, I'm dad!";
container.appendChild(answerP);
answerP.style.fontStyle = ("italic");



