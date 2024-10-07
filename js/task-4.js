const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", event => {
  event.preventDefault();

  const elements = event.target.elements;
  const result = [];

  for (const element of elements) {
    if (element.tagName !== "INPUT") {
      continue;
    }

    const value = element.value.trim();
    if (value === "") {
      alert("All form fields must be filled in");
      break;
    }

    result.push({[element.name]: element.value});
  }

  console.log(result);

  event.currentTarget.reset();
});
