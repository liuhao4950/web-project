const array1 = ["User id", "First Name", "Last Name", "Email address", "Phone number","Email Notification setting", "password"];
const json1 = {
    "id":"a13923",
    "firstname":"michael",
    "lastname":"jeff",
    "emailaddress":"example@email.com",
    "phonenumber":"192939123",
    "emailNot":"0",
    "pass":"password"
};

const array2 = ["Event id", "Event Name", "Event Description", "Year", "Month","Day", "Starting hour", "Starting minute", "Ending hour", "Ending minute", "Finalisation status", "User id"];
const json2 = {
    "EventId":"112931",
    "EventNme":"tmp event",
    "EventDes":"this event is for temporariily useage only you should go and do your work now plz",
    "Year":"2025",
    "Month":"12",
    "Day":"21",
    "StartH":"11",
    "StartM":"12",
    "EndingH":"00",
    "EndingM":"30",
    "Finalise":"0",
    "Userid":"a13923"
};

var main = document.getElementsByTagName("main")[0];
var table = document.getElementsByTagName("table")[0];
const params = new URLSearchParams(window.location.search);
var p = params.get('pg');
var id = 0;

function removeItem(){
    var element = document.getElementById(this.value);
    element.remove();
}

console.log(p);

if(p == 1)
{
    var tr1 = document.createElement("tr");
    for(let i = 0; i < array1.length + 1; i++)
    {
        if(i === array1.length)
        {
            let tmp = document.createElement("th");
            tr1.appendChild(tmp);
        }
        else
        {
            let tmp = document.createElement("th");
            tmp.innerHTML = array1[i];
            tr1.appendChild(tmp);
        }

    }
    table.appendChild(tr1);
    var tr2 = document.createElement("tr");
    for(let x in json1)
    {
        let tmp = document.createElement("td");
        tmp.innerHTML = json1[x];
        tr2.appendChild(tmp);
    }
    let tmp = document.createElement("th");
    let but = document.createElement("button");
    but.innerHTML = "remove";
    but.value = id;
    but.addEventListener("click", removeItem);
    tmp.appendChild(but);
    tr2.appendChild(tmp);
    tr2.id = id;
    id++;
    table.appendChild(tr2);
}
else if(p == 2)
{
    var tr1 = document.createElement("tr");
    for(let i = 0; i < array2.length + 1; i++)
    {
        if(i === array2.length)
        {
            let tmp = document.createElement("th");
            tr1.appendChild(tmp);
        }
        else
        {
            let tmp = document.createElement("th");
            tmp.innerHTML = array2[i];
            tr1.appendChild(tmp);
        }

    }
    table.appendChild(tr1);
    var tr2 = document.createElement("tr");
    for(let x in json2)
    {
        let tmp = document.createElement("td");
        tmp.innerHTML = json2[x];
        tr2.appendChild(tmp);
    }
    let tmp = document.createElement("th");
    let but = document.createElement("button");
    but.innerHTML = "remove";
    but.value = id;
    but.addEventListener("click", removeItem);
    tmp.appendChild(but);
    tr2.appendChild(tmp);
    tr2.id = id;
    id++;
    table.appendChild(tr2);
}