const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KRY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    //form 숨김
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const inputUsername = loginInput.value;
    localStorage.setItem(USERNAME_KRY, inputUsername);
    //user정보 input으로부터 온다
    paintGreetings(inputUsername);
}

function paintGreetings(username){
    greeting.innerText = `Hello  ${username}`;
    //h1을 띄움
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KRY);

if(savedUsername === null){
    //form hidden를 지움 -> form 띄움
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //user정보가 localStorage로부터 온다
    paintGreetings(savedUsername);
}
