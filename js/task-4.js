const loginForm = document.querySelector('.login-form');

const extractInputElements = (elements) => {
  return Array.from(elements)
    .filter(element => element.tagName === 'INPUT')
    .map(element => {
      element.value = element.value.trim();

      return element;
    });
};

const isValid = (elements) => {
  return !extractInputElements(elements).some(element => element.value === '');
};

loginForm.addEventListener('submit', event => {
  event.preventDefault();
  const elements = event.target.elements;

  if (isValid(elements)) {
    const result = extractInputElements(elements)
      .map(element => ({ [element.name]: element.value }));

    console.log(result);
    event.currentTarget.reset();
  } else {
    alert('All form fields must be filled in');
  }
});
