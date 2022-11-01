function validate() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username == "test" && password == "test") {
    alert("Login successfully!");
    window.location = "success.html";
    return;
  } else {
    alert("Try again?");
  }
}
