function signUp(e) {        //signup function
    // e.preventDefault();      //prevent from action
    let msg = document.getElementById("msg");    //error message
    let inp = document.getElementsByTagName("input");    //inputs node list
    let fn = inp[0].value;
    let ln = inp[1].value;
    let email = inp[2].value;
    let phn = inp[3].value;
    let pw = inp[4].value;
    let cpw = inp[5].value;

    if (!fn || !ln || !email || !phn || !pw || !cpw) {      // fields validation
        msg.style.display = "block";
        msg.innerText = "All fields are mandatory";
        return false
    }
    if (pw !== cpw) {       // password validation
        msg.style.display = "block";
        msg.innerText = "Password and Confirm Password must be same";
        return false
    }
    if (JSON.parse(localStorage.getItem("users"))?.some((s) => s.email === email)) {  // new user validation
        msg.style.display = "block";
        msg.innerText = "user already present";
        return false
    }

    let user = { fn, ln, phn, email, pw, cpw };
    let usersStored = localStorage.getItem('users')   // getting data from local storage
    let users = []
    if (usersStored) {       // checking local storage data is empty or not
        users = JSON.parse(usersStored);
    }
    users.push(user)
    localStorage.setItem("users", JSON.stringify(users))  // storing data in local storage
    return true
}

function logIn(e) {     //login function
    e.preventDefault();      //prevent from action
    const form = document.querySelector("form")


    let email = document.getElementById("email");   //email input
    let password = document.getElementById("password")      //password input
    let msg = document.getElementById("msg")      // error message

    if (!password.value || !email.value) {      //fields validation
        msg.style.display = "block"
        msg.innerText = "All fields are mandatory"
        return false
    }
    const userPresent = JSON.parse(localStorage.getItem("users"))?.find((s) => (s.email === email.value) && (s.pw === password.value))
    if (!userPresent) {   // credentials(email and password) validation
        msg.style.display = "block"
        msg.innerText = "wrong credentials"
        return false
    } else if (userPresent) {
        alert(`${userPresent?.fn + ' ' + userPresent?.ln} login successfully`)
        return true
    }


}