//4.1
const btnToClick = document.getElementById("btnToClick");
btnToClick.addEventListener("click", function (event) {
  console.log("Evento de click:", event);
});

//4.2
const textInput = document.querySelector("input");
textInput.addEventListener('focus', function() {
    console.log('Input en foco, valor actual:', textInput.value); 
});

//4.3
textInput.addEventListener('input', function() {
    console.log('Valor actual del input:', textInput.value);
});