const inputElement = document.querySelector("#name-input");
const outputElement = document.querySelector("#name-output");

inputElement.addEventListener("input", event => {
  const value = event.currentTarget.value.trim();

  outputElement.textContent = value.length === 0 ? 'Anonymous': value;
});