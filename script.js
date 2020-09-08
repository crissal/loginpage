const mainPlaceHolder = document.getElementById("mainPlaceHolder"),
      divLogin = document.getElementById("divLogin"),
      divLoginFailed = document.getElementById("divLoginFailed"),
      divLoginSuccess = document.getElementById("divLoginSuccess");

const loginButton = document.getElementById("loginButton"),
      logoutButton = document.getElementById("logoutButton"),
      retryButton = document.getElementById("retryButton"),
      userNameInput = document.getElementById("usernameInput"),
      passwordInput = document.getElementById("passwordInput");

const correctName = "test",
      correctPassword = "1234"

let isLoggedIn = localStorage.getItem("isLoggedIn") == null ? false : true;

function redirectDiv(desiredDiv){
    mainPlaceHolder.innerHTML = "";
    mainPlaceHolder.appendChild(desiredDiv);

    if(desiredDiv == divLogin){
        userNameInput.value = "";
        passwordInput.value = "";
    }
}

if(isLoggedIn){
    redirectDiv(divLoginSuccess);
}
else{
    redirectDiv(divLogin);
}

loginButton.addEventListener("click", () => {
    const userName = userNameInput.value;
    const password = passwordInput.value;

    if(userName == correctName && password == correctPassword){
        localStorage.setItem("isLoggedIn", true);
        redirectDiv(divLoginSuccess);
    }

    else{
        redirectDiv(divLoginFailed);
    }
});

logoutButton.addEventListener("click", () =>{
    localStorage.removeItem("isLoggedIn");
    redirectDiv(divLogin);
})

retryButton.addEventListener("click", () => {
    redirectDiv(divLogin);
})