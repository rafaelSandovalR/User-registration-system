window.onload = pageLoadHandler;

function pageLoadHandler() {
    const loginButton = document.getElementById('LoginBtn');
    const logoutButton = document.getElementById('LogoutBtn');
    if (isUserLoggedIn()) {
        loginButton.style.display = 'none';
        logoutButton.style.display = 'block';
    } 
    else {
        logoutButton.style.display = 'none';
        loginButton.style.display = 'block';
    }
};

function isUserLoggedIn() {
    const cookieAuth = getCookie('AuthenticationCookie');
    if (cookieAuth) {
        return true;
    }
    return false;
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function deleteCookie(cname) {
    let cookie = getCookie(cname);
    console.log('cookie');
    console.log(cookie);
    if (cookie) {
        document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/";
    }
}

function logout() {
    deleteCookie('AuthenticationCookie');
    console.log('logged out');
}