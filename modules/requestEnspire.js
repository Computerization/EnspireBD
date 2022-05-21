const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const xhrregister = new XMLHttpRequest();
const xhrlogin = new XMLHttpRequest();

function register(val, callback) {
    xhrregister.open("POST", "http://52.69.52.35:8000/api/register/", true);
    xhrregister.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhrregister.send(JSON.stringify(val));
    xhrregister.onreadystatechange = function() {
        if (xhrregister.readyState === 4 && xhrregister.status === 200) {
            callback(xhrregister.responseText)
        }
    }
}

function login(val, callback) {
    xhrlogin.open("POST", "http://52.69.52.35:8000/api/login/", true);
    xhrlogin.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhrlogin.send(JSON.stringify(val));
    xhrlogin.onreadystatechange = function() {
        if (xhrlogin.readyState === 4 && xhrlogin.status === 200) {
            callback(xhrlogin.responseText);
        }
    }
}

exports.register = register;
exports.login = login;