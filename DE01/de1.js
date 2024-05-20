window.addEventListener("load", function () {
  var bannerText = document.getElementById("bannerText");
  bannerText.style.opacity = 0;

  var fadeIn = function () {
    var opacity = parseFloat(bannerText.style.opacity);
    if (opacity < 1) {
      opacity += 0.1;
      bannerText.style.opacity = opacity;
      setTimeout(fadeIn, 100);
    }
  };

  fadeIn();
});

window.addEventListener("DOMContentLoaded", function () {
  usernameInput.focus();
});
document.addEventListener("DOMContentLoaded", function () {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const loginButton = document.getElementById("loginButton");

  usernameInput.addEventListener("input", validateInputs);
  passwordInput.addEventListener("input", validateInputs);

  function validateInputs() {
    if (
      usernameInput.value.trim() !== "" &&
      passwordInput.value.trim() !== ""
    ) {
      loginButton.disabled = false;
    } else {
      loginButton.disabled = true;
    }
  }

  usernameInput.focus();
});

const toggleNavBtn = document.querySelector(".toggle-nav-btn");
const navList = document.querySelector(".nav ul");

toggleNavBtn.addEventListener("click", () => {
  navList.classList.toggle("show");
});

function showLoginForm() {
  var loginForm = document.getElementById("loginForm");
  loginForm.style.display = "block";
  document.getElementById("username").focus();
}

function okLogin() {
  var roleSelect = document.getElementById("role");
  var role = roleSelect.options[roleSelect.selectedIndex].text;
  if (role === "Admin") {
    // window.location.href = "ex2.html";
    alert("Bạn đã đăng nhập thành công với tư cách " + role);
  } else {
    var loginForm = document.getElementById("loginForm");
    loginForm.style.display = "none";
    var usernameInput = document.querySelector("input[type='text']");
    var passwordInput = document.querySelector("input[type='password']");
    usernameInput.value = "";
    passwordInput.value = "";
    alert("Bạn đã đăng nhập thành công với tư cách " + role);
  }
}
