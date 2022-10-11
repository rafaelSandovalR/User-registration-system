const loginForm = document.getElementById('loginForm');
const loginButton = document.getElementById('login-form-submit');
const loginErrorMsg = document.getElementById('login-form-error');

loginButton.addEventListener('click',(e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    // fetch("http://127.0.0.1:5500/", {
    //     method: "POST",
    //     headers: {
    //       Accept: "application/json, text/plain, */*",
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //     email: username,
    //     password: password,
    //     }),
    // })
    //     .then((response) => response.json())
    //     .then((data) => console.log(data))
    //     .catch((err) => {
    //     console.log(err);
    //     });

    let usersStr = window.localStorage.users ? window.localStorage.users : "{}";
    let users = JSON.parse(usersStr);

    if (username in users && password === users[username]["password"]) {
        alert("You have successfully logged in.");
        const d = new Date();
        d.setTime(d.getTime() + (1*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = "AuthenticationCookie" + "=" + "giahg674627" + ";" + expires + ";path=/";
        location.href = "HomePage.html";
    }
    else {
        loginErrorMsg.style.display = "block";
    }
});