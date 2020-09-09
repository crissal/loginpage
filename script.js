let mainPlaceHolder = document.getElementById("mainPlaceHolder"),
    divLogin = document.getElementById("divLogin"),
    divLoginFailed = document.getElementById("divLoginFailed"),
    divLoginSuccess = document.getElementById("divLoginSuccess"),
    loginButton = document.getElementById("loginButton"),
    logoutButton = document.getElementById("logoutButton"),
    retryButton = document.getElementById("retryButton"),
    userNameInput = document.getElementById("usernameInput"),
    passwordInput = document.getElementById("passwordInput");

const CORRECT_NAME = "test",
      CORRECT_PASSWORD = "1234";

let isLoggedIn = localStorage.getItem("isLoggedIn") == null ? false : true;

//Tömmer mainplaceholdern och sätter in önskad vy
function redirectToDesiredDiv(desiredDiv){
    mainPlaceHolder.innerHTML = "";
    mainPlaceHolder.appendChild(desiredDiv);

    //Om användaren hänvisas till inloggningssidan, tömms användarnamn och lösen fältet från det gamla värdet (ifall det finns)
    if(desiredDiv == divLogin){
        userNameInput.value = "";
        passwordInput.value = "";
    }
}

//Om användaren är redan inloggad, då tar vi honom till 
if(isLoggedIn){
    redirectToDesiredDiv(divLoginSuccess);
}
else{
    redirectToDesiredDiv(divLogin);
}

loginButton.addEventListener("click", () => {
    let userName = userNameInput.value;
    let password = passwordInput.value;

    if(userName == CORRECT_NAME && password == CORRECT_PASSWORD){
        localStorage.setItem("isLoggedIn", true);
        redirectToDesiredDiv(divLoginSuccess);
    }

    else{
        redirectToDesiredDiv(divLoginFailed);
    }
})

logoutButton.addEventListener("click", () =>{
    localStorage.removeItem("isLoggedIn");
    redirectToDesiredDiv(divLogin);
})

retryButton.addEventListener("click", () => {
    redirectToDesiredDiv(divLogin);
})