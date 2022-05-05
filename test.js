const para = document.getElementById('para');

const xhrregister = new XMLHttpRequest();
const xhrlogin = new XMLHttpRequest();

const usernameE = document.getElementById('username');
const passwordE = document.getElementById('password');
const rusernameE = document.getElementById('rusername');
const rpasswordE = document.getElementById('rpassword');

function register() {
    xhrregister.open("POST", "http://localhost:8000/api/register/", true);
    xhrregister.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    let val = {
        username: rusernameE.value,
        password: rpasswordE.value,
    };
    xhrregister.send(JSON.stringify(val));
    xhrregister.onreadystatechange = function() {
        console.log(xhrregister.responseText)
        if (xhrregister.readyState === 4 && xhrregister.status === 200) {
            para.innerHTML = "Register: " + xhrregister.responseText;
        }
    }
}

function login() {
    xhrlogin.open("POST", "http://localhost:8000/api/login/", true);
    xhrlogin.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    let val = {
        username: usernameE.value,
        password: passwordE.value
    };
    xhrlogin.send(JSON.stringify(val));
    xhrlogin.onreadystatechange = function() {
        console.log(xhrlogin.responseText)
        if (xhrlogin.readyState === 4 && xhrlogin.status === 200) {
            para.innerHTML = "Login: " + xhrlogin.responseText;
        }
    }
}