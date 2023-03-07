function verify() {
  const usernameConst = document.getElementById('username');
  const passwordConst = document.getElementById('password');

  let usernameEntered = username.value;
  let passwordEntered = password.value;
  let usernameReal = 'admin';
  let passwordReal = 'password';

  if ((usernameEntered === usernameReal) && (passwordEntered == passwordReal)) {
    location.href = 'homePage.html';
  } else {
    alert("You have entered an incorrect username and/or password.");
    location.href = 'index.html';
  }
}