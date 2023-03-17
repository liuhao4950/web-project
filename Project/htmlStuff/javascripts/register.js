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


var passed = false;
var con_pass = document.getElementById("inp-pass_con");

con_pass.oninput = function () {
    var pass = document.getElementById("inp-pass").value;
    var failcon = document.getElementById("con_fail");

    var paragraph = document.createElement("i");
    var failmsg = document.createElement("p");
    if (pass != "") {
        if (con_pass.value != pass) {
            failcon.innerHTML = "";
            passed = false;
            paragraph.innerHTML = "Your passwords does not match!";
            failmsg.appendChild(paragraph);
            failmsg.classList.add("fail-message");
            failcon.appendChild(failmsg);
        }
        else {
            failcon.innerHTML = "";
            passed = true;
            paragraph.innerHTML = "Your password matches";
            failmsg.appendChild(paragraph);
            failmsg.classList.add("success-message");
            failcon.appendChild(failmsg);
        }
    }
};

var register = document.getElementById("register-r");
var registered = false;

register.onmouseup = function () {
    this.classList.remove("darker");

    var failsect = document.getElementById("fail-section");
    var failmsg = document.createElement("p");
    var paragraph = document.createElement("i");


    var fst_name = document.getElementById("inp-firstname").value;
    var lst_name = document.getElementById("inp-lastname").value;
    var email = document.getElementById("inp-email").value;
    var pass = document.getElementById("inp-pass").value;
    var notification = document.getElementById("inp-emailNot").checked;
    if (!registered) {
        if (!fst_name || !lst_name || !email || !pass || !con_pass.value) {
            failsect.innerHTML = "";
            paragraph.innerHTML = "Please fill out all the areas";
            failmsg.appendChild(paragraph);
            failmsg.classList.add("fail-message");
            failsect.appendChild(failmsg);
        }
        else if (passed) {
            if (email != "registered@email.com") {
                failsect.innerHTML = "";
                paragraph.innerHTML = "Register success! Redirecting to login page...";
                failmsg.appendChild(paragraph);
                failmsg.classList.add("success-message");
                failsect.appendChild(failmsg);
                registered = true;

                console.log(fst_name);
                console.log(lst_name);
                console.log(email);
                console.log(pass);
                console.log(notification);
            }
            else {
                failsect.innerHTML = "";
                paragraph.innerHTML = "Conflicting email. This email is already registered in the system.";
                failmsg.appendChild(paragraph);
                failmsg.classList.add("fail-message");
                failsect.appendChild(failmsg);
            }
        }
    }
};
