var value = "";
var temp = 0

function one() {
    temp=1;
    value += temp;
    document.getElementById("number").innerText = value;
}
function two() {
    temp=2;
    value += temp;
    document.getElementById("number").innerText = value;
}
function three() {
    temp=3;
    value += temp;
    document.getElementById("number").innerText = value;
}
function four() {
    temp=4;
    value += temp;
    document.getElementById("number").innerText = value;
}
function five() {
    temp=5;
    value += temp;
    document.getElementById("number").innerText = value;
}
function six() {
    temp=6;
    value += temp;
    document.getElementById("number").innerText = value;
}
function seven() {
    temp=7;
    value += temp;
    document.getElementById("number").innerText = value;
}
function eight() {
    temp=8;
    value += temp;
    document.getElementById("number").innerText = value;
}
function nine() {
    temp=9;
    value += temp;
    document.getElementById("number").innerText = value;
}
function zero() {
    temp=0;
    value += temp;
    document.getElementById("number").innerText = value;
}

function C() {
    value="";
    temp = 0;
    document.getElementById("number").innerHTML= "";
    document.getElementById("previous").innerText= "";
}

function negative() {
    if(value!=0) {
        if(value >0) {
            temp=value
            value = "-";
            value += temp;
            document.getElementById("number").innerText = value;
        } else {
            temp = value.slice(1);
            value = temp;
            document.getElementById("number").innerText = value;
        }
    }
}