function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector("#controls input");
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const rootBox = document.querySelector("#boxes");

const isValid = (amount) => {
  const amountNumber = Number.parseInt(amount);

  if (isNaN(amountNumber) || amountNumber > 100 || amountNumber < 0) {
    alert('Amount of boxes is out of range [1-100]');

    return false;
  }

  return true;
};

const createDiv = (side) => {
  const div = document.createElement("div");
  div.style.width = div.style.height = `${side}px`;
  div.style.backgroundColor = getRandomHexColor();

  return div;
};

const getBoxes = (amount, start, step) => {
  const boxes = [];
  let side = start;

  for (let i = 0; i < amount; i++) {
    boxes.push(createDiv(side));
    side += step;
  }

  return boxes;
}

const createBoxes = (amount) => {
  if (!isValid(amount)) {
    return;
  }

  rootBox.innerHTML = "";
  const boxes = getBoxes(amount, 30, 10);
  rootBox.append(...boxes);
};

createBtn.addEventListener("click", event => {
  createBoxes(inputNumber.value);
  inputNumber.value = "";
});

destroyBtn.addEventListener("click", event => {
  rootBox.innerHTML = "";
});
