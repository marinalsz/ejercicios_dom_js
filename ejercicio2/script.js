//2.1

const nuevoDiv = document.createElement("div");
document.body.appendChild(nuevoDiv);

//2.2

const newDiv = document.createElement("div");
const nuevoParrafo = document.createElement("p");
newDiv.appendChild(nuevoParrafo);
document.body.appendChild(newDiv);

//2.3

const newDivisor = document.createElement("div");
for (let i = 0; i < 6; i++) {
  const nuevoP = document.createElement("p");
  newDivisor.appendChild(nuevoP);
}
document.body.appendChild(newDivisor);

//2.4

const p = document.createElement("p");
p.textContent = "Soy dinámico!";
document.body.appendChild(p);

//2.5

const h2 = document.querySelector(".fn-insert-here");
h2.textContent = "Wubba Lubba dub dub";

//2.6

const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
const ul = document.createElement("ul");
for (const app of apps) {
  const li = document.createElement("li");
  li.textContent = app;
  ul.appendChild(li);
}
document.body.appendChild(ul);

//2.7

const removedElements = document.querySelectorAll(".fn-remove-me");
for (const element of removedElements) {
  element.remove();
}

//2.8

const newP = document.createElement("p");
newP.textContent = "Voy en medio!";
const divisor = document.querySelector("div");
divisor.insertAdjacentElement("afterend", newP);

//2.9

const divs = document.querySelectorAll("div.fn-insert-here");
for (const div of divs) {
  const insideP = document.createElement("p");
  insideP.textContent = "Voy dentro!";
  div.appendChild(insideP);
}
