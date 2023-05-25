function validateForm(event) {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    if (username === '' || password === '') {
      event.preventDefault(); // Prevent form submission
      errorMessage.textContent = 'Please enter both username and password.';
      errorMessage.style.display = 'block';
    } else {
      errorMessage.style.display = 'none';
    }
  }