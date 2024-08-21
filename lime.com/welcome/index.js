let Username = document.getElementById("Username");
let Email = document.getElementById("Email");
let Password = document.getElementById("Password");
const btn = document.getElementById("btn");

class user {
    constructor(Username, Email, Password) {
        Username: '';
        Password: '';
        Email: "";
    }
}

btn.onclick = function submit() {

    const account = new user(Username.value, Password.value, Email.value);
    console.log(user)
}