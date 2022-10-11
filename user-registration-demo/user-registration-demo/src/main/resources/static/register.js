function register() {
    let userType = null;
    let regForm = null;
    if(document.hasOwnProperty("MentorForm")) {
        userType = "mentor";
        regForm = document.MentorForm;
    } else if(document.hasOwnProperty("MenteeForm")) {
        userType = "mentee";
        regForm = document.MenteeForm;
    } else {
        return;
    }
    const email = regForm.userEmail.value;
    let usersStr = window.localStorage.users ? window.localStorage.users : "{}";
    
    let users = JSON.parse(usersStr);
    if(email in users) {
        console.log("You are already registred.");
        return;
    }
    const user = {
        "email": email,
        "password": regForm.userPassword.value,
        "inMyShoesID": regForm.inMyShoesID.value,
        "fname": regForm.fname.value,
        "lname": regForm.lname.value,
        "major": regForm.major.value
    }

    if (userType === "mentor") {
        users.mentorTranscript = regForm.mentorTranscript.value;
    }
    users[email] = user;
    usersStr = JSON.stringify(users);
    window.localStorage.users = usersStr;
    return;
}