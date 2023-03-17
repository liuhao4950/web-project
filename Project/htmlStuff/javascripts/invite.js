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


var Redirecting = false;

var ava1 = document.getElementById("ava1");
ava1.onmouseup = function(){
    this.classList.remove("darker");

    var msg = document.getElementById("errmsg");
    var paragraph = document.createElement("i");
    var failmsg = document.createElement("p");


    var time1 = document.getElementById("time_a_s").value;
    var time2 = document.getElementById("time_a_u").value;
    var F_name = document.getElementById("firstname").value;
    var L_name = document.getElementById("lastname").value;

    var IntTime = {
        "Start_Hour": 0,
        "Start_Minute": 0,
        "End_Hour": 0,
        "End_Minute": 0
    }

    if(!time1 && !time2){
        msg.innerHTML = "";
        paragraph.innerHTML = "Please do not leave your availability times empty!";
        failmsg.appendChild(paragraph);
        failmsg.classList.add("fail-message");
        msg.appendChild(failmsg);
    }
    else if(time1.length < 5 || time2.length < 5){
        msg.innerHTML = "";
        paragraph.innerHTML = "Please enter a valid time!";
        failmsg.appendChild(paragraph);
        failmsg.classList.add("fail-message");
        msg.appendChild(failmsg);
    }
    else if(!Redirecting){
        var sbstr = time1.substring(0, 2);
        IntTime.Start_Hour = parseInt(sbstr);

        sbstr = time1.substring(3, 2);
        IntTime.Start_Minute = parseInt(sbstr);

        sbstr = time2.substring(0, 2);
        IntTime.End_Hour = parseInt(sbstr);

        sbstr = time2.substring(3, 2);
        IntTime.End_Minute = parseInt(sbstr);
        if(!F_name && !L_name){
            msg.innerHTML = "";
            paragraph.innerHTML = "Please do not leave your names empty!";
            failmsg.appendChild(paragraph);
            failmsg.classList.add("fail-message");
            msg.appendChild(failmsg);
        }
        else {
            msg.innerHTML = "";
            Redirecting = true;
            paragraph.innerHTML = "Receiving your availability informatiion...";
            failmsg.appendChild(paragraph);
            failmsg.classList.add("success-message");
            msg.appendChild(failmsg);
            console.log(time1);
            console.log(time2);
            console.log(F_name);
            console.log(L_name);
        }
    }
};

var ava2 = document.getElementById("ava2");
ava2.onmouseup = function(){
    this.classList.remove("darker");

    var msg = document.getElementById("errmsg");
    var paragraph = document.createElement("i");
    var failmsg = document.createElement("p");

    var F_name = document.getElementById("firstname").value;
    var L_name = document.getElementById("lastname").value;

    if(!F_name && !L_name){
        msg.innerHTML = "";
        paragraph.innerHTML = "Please do not leave your names empty!";
        failmsg.appendChild(paragraph);
        failmsg.classList.add("fail-message");
        msg.appendChild(failmsg);
    }
    else if(!Redirecting){
        paragraph.innerHTML = "Receiving your availability informatiion...";
        failmsg.appendChild(paragraph);
        failmsg.classList.add("success-message");
        msg.appendChild(failmsg);
        console.log(F_name);
        console.log(L_name);
    }
};