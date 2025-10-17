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

const blueH3 = document.createElement("h3");
blueH3.classList.add("blueH3");
blueH3.textContent = "I'm a blue h3!";
container.appendChild(blueH3);
blueH3.style.color = ("blue");

const divHtml = document.createElement("div");
divHtml.classList.add("divHtml");
container.appendChild(divHtml);
divHtml.style.border = ("1px solid black");
divHtml.style.height = ("125px");
divHtml.style.width = ("250px");
divHtml.style.background = ("pink");

const divH1 = document.createElement("h1");
divH1.classList.add("divH1");
divH1.textContent = "I'm in a div."
divHtml.appendChild(divH1);
divH1.style.textAlign = ("center");

const divP = document.createElement("p");
divP.classList.add("divP");
divP.textContent = "So am I!";
divHtml.appendChild(divP);
