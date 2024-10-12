document.addEventListener("DOMContentLoaded", () => {


  const form = document.getElementById('registration-form');
  const feedbackDiv = document.getElementById('form-feedback');
  form.addEventListener('submit', function () {
    event.preventDefault();


    // validation variable
    const isValid = true;
    const messages = ['Username must be at least 3 characters long', 'Please enter a valid email address.', 'Password must be at least 6 characters long.']
    //username validating
    const usernameInput = document.getElementById('username');
    trim(); console.log(trimmedusernameInput);
    if (usernameInput.value.length < 3) {
      isValid = false + messages[0];
      return;
    } else {

    }

    // email validation
    const userEmail = document.getElementById('email');
    trim(); console.log(trimmeduserEmail);
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(userEmail.value)) {
      isValid = false + messages[1];
    } else {

    }

    // password  validation
    const userPassword = document.getElementById('password');
    trim(); console.log(trimmeduserPassword);
    if (userPassword.value.length < 8) {
      isValid = false + messages[2];
    } else {

    }

    form.submit();
     //displaying feedback
     feedbackDiv.style.display = "block";
  if (isValid = true) {
    feedbackDiv.textContent = 'Registration successfu', feedbackDiv.style.color = "#28a745";
  } else {
   feedbackDiv.innerHTML(messages.join(br)), feedbackDiv.style.color = "#dc3545";
  }
 });
  });

 
 
