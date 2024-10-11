document.addEventListener("DOMContentLoaded", () => {
const form = document.getElementById('registration-form');
const feedbackDiv = document.getElementById('form-feedback');
form.addEventListener('submit', function () {
  event.preventDefault();


  // validation variable
  const isValid = true;
  const message = ['Username must be at least 3 characters long', 'Please enter a valid email address.', 'Password must be at least 6 characters long.']
  //username validating
  const usernameInput = document.getElementById('username');
  if (usernameInput.value.length < 3) {
    isValid = false + message[0];
    return;
  } else {

  }

  // email validation
  const userEmail = document.getElementById('email');
  if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(userEmail.value)) {
    isValid = false + message[1];
  } else {

  }

  // password  validation
  const userPassword = document.getElementById('password');
  if (userPassword.length < 8) {
    isValid = false + message[2];
  } else {

  }
  feedbackDiv.style.display = "block";
  if (isValid = true) {
    feedbackDiv.textContent = 'REgistration successful!', feedbackDiv.style.color = "#28a745";
  } else {
    feedbackDiv.style.color = "#dc3545"
  }
  form.submit();
});

feedbackDiv.style.display = "block";
if (isValid = true) {
  feedbackDiv.textContent = 'REgistration successful!', feedbackDiv.style.color = "#28a745";
} else {
  feedbackDiv.style.color = "#dc3545"
}
});
