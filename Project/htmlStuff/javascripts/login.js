var buttons = document.getElementsByTagName("button");

var siz = buttons.length;

for (let i = 0; i < siz; i++) {
    buttons[i].onmouseover = function () {
        this.classList.add("lighter");
    };
    buttons[i].onmouseleave = function () {
        this.classList.remove("lighter");
    };
    buttons[i].onmousedown = function () {
        this.classList.add("darker");
    };
    buttons[i].onmouseup = function () {
        this.classList.remove("darker");
    };
}

var login = document.getElementById("login-l");
var logged_in = false;

login.onmouseup = function () {
    this.classList.remove("darker");

    var failsect = document.getElementById("fail-section");
    var failmsg = document.createElement("p");
    var paragraph = document.createElement("i");


    var email = document.getElementById("inp-email").value;
    var pass = document.getElementById("inp-pass").value;
    if (!logged_in) {
        if (email != "" && pass != "") {
            if (email == "tmp user" && pass == "password") {
                failsect.innerHTML = "";
                failmsg.id = "success-message";
                paragraph.innerHTML = "login successful, redirecting...";
                failmsg.appendChild(paragraph);
                failsect.appendChild(failmsg);
                console.log("yay login successful");
            }
            else {
                failsect.innerHTML = "";
                failmsg.id = "fail-message";
                paragraph.innerHTML = "Login failed, wrong password or email address!";
                failmsg.appendChild(paragraph);
                failsect.appendChild(failmsg);
                console.log(email);
                console.log(pass);
            }
        }
    }
};
