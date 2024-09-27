//3.1

const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];
const ul = document.createElement("ul");
for (const country of countries) {
  const li = document.createElement("li");
  li.textContent = country;
  ul.appendChild(li);
}
document.body.appendChild(ul);

//3.2

const p = document.querySelector(".fn-remove-me");
p.remove();

//3.3

const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];
const carsContainer = document.querySelector('[data-function="printHere"]');
const newUl = document.createElement("ul");
for (const car of cars) {
  const li = document.createElement("li");
  li.textContent = car;
  newUl.appendChild(li);
}
carsContainer.appendChild(newUl);

//3.4

const fotos = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

for (const foto of fotos) {
  const div = document.createElement("div");
  const h4 = document.createElement("h4");
  h4.textContent = foto.title;
  const img = document.createElement("img");
  img.src = foto.imgUrl;
  img.alt = foto.title;
  div.appendChild(h4);
  div.appendChild(img);
  div.classList.add("imágenes");
  document.body.appendChild(div);
}

//3.5

const button = document.createElement("button");
button.textContent = "Eliminar último div";
document.body.appendChild(button);


button.addEventListener("click", () => {
  const divs = document.querySelectorAll(".imágenes");
  if (divs.length > 0) {
    for (let i = 0; i < divs.length; i++) {
      divs[divs.length - 1].remove();
    }
  }
});

//3.6

const divisores = document.querySelectorAll(".imágenes");
for (let i = 0; i < divisores.length; i++) {
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Eliminar divisor";
  divisores[i].appendChild(removeBtn);

  removeBtn.addEventListener("click", () => {
    divisores[i].remove();
  });
}
