const container = document.querySelector("#container");
const redP = document.createElement("p");
redP.classList.add("redP");
redP.textContent = "Hey I'm red!";
container.appendChild(redP);
redP.style.color = ("red");

const blueH3 = document.querySelector("h3");
blueH3.classList.add("blueH3");
blueH3.textContent = "I'm a blue h3!";
container.appendChild(blueH3);
blueH3.style.color = ("blue");
