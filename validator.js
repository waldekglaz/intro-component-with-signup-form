const btn = document.querySelector(".btn");
const elFirstName = document.getElementById("first-name");
const elLastName = document.getElementById("last-name");
const elPassword = document.getElementById("password");
const email = document.getElementById("email");

// email validation
function validateEmail(str) {
  const regex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(str)) {
    email.nextElementSibling.style.opacity = "0";
    email.nextElementSibling.nextElementSibling.style.opacity = "0";
  } else {
    email.nextElementSibling.style.opacity = "1";
    email.nextElementSibling.nextElementSibling.style.opacity = "1";
  }
}

function validation(elements) {
  // accepts array of elements
  elements.forEach((element) => {
    // loop through elements
    if (element.value === "") {
      // if it's empty then ...
      element.nextElementSibling.style.opacity = "1";
      element.nextElementSibling.nextElementSibling.style.opacity = "1";
    } else {
      // but if there is value then ...
      element.nextElementSibling.style.opacity = "0";
      element.nextElementSibling.nextElementSibling.style.opacity = "0";
    }
  });
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  validateEmail(email.value);
  validation([elFirstName, elLastName, elPassword]);
});
