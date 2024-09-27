//4.1

const btnToClick = document.getElementById("btnToClick");

btnToClick.addEventListener("click", (event) => {
  console.log(event);
});

//4.2

const focusInput = document.querySelector(".focus");

focusInput.addEventListener("focus", () => {
  console.log(focusInput.value);
});

//4.3

const valueInput = document.querySelector(".value");

valueInput.addEventListener("input", () => {
  console.log(valueInput.value);
});

//4.4

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const ul = document.createElement("ul");

for (const album of albums) {
  const li = document.createElement("li");
  li.textContent = album;
  ul.appendChild(li);
}

document.body.appendChild(ul);
