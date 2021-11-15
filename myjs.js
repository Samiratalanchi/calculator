var value = "";
var temp = 0
var firstOperand;
var secondOperand ;
var operation ="";
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
    if(value!="") {
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

function dot() {
    if(value = 0){
        temp="0.";
    } else {
        temp=".";
    }
    value += temp;
    document.getElementById("number").innerText = value;
}
function plus() {
    if (value != "") {
        if(operation == "") {
            firstOperand = parseInt(value);
            document.getElementById("previous").innerText += value + "+"
            value ="";
            operation ="plus";
        } else if (operation == "plus") {
            secondOperand = parseInt(value);
            document.getElementById("previous").innerText += value + "+"
            value = firstOperand + secondOperand;
            document.getElementById("number").innerText = value;
            firstOperand = value;
            value = ""
            secondOperand = 0;
            operation = "plus";
        } else if (operation == "sub") {
            secondOperand = parseInt(value);
            document.getElementById("previous").innerText += value + "+"
            value = firstOperand - secondOperand;
            document.getElementById("number").innerText = value;
            firstOperand = value;
            value = ""
            secondOperand = 0;
            operation = "plus";
        } else if (operation == "mul") {
            secondOperand = parseInt(value);
            document.getElementById("previous").innerText += value + "+"
            value = firstOperand * secondOperand;
            document.getElementById("number").innerText = value;
            firstOperand = value;
            value = ""
            secondOperand = 0;
            operation = "plus";
        }
    }
}
function sub() {
    if (value != "") {
        if(operation == "") {
            firstOperand = parseInt(value);
            document.getElementById("previous").innerText += value + "-"
            value ="";
            operation ="sub";
        } else if (operation == "sub") {
            secondOperand = parseInt(value);
            document.getElementById("previous").innerText += value + "-"
            value = firstOperand - secondOperand;
            document.getElementById("number").innerText = value;
            firstOperand = value;
            value = ""
            secondOperand = 0;
            operation = "sub";
        } else if (operation == "plus") {
            secondOperand = parseInt(value);
            document.getElementById("previous").innerText += value + "-"
            value = firstOperand + secondOperand;
            document.getElementById("number").innerText = value;
            firstOperand = value;
            value = ""
            secondOperand = 0;
            operation = "sub";
        } else if (operation == "mul") {
            secondOperand = parseInt(value);
            document.getElementById("previous").innerText += value + "-"
            value = firstOperand * secondOperand;
            document.getElementById("number").innerText = value;
            firstOperand = value;
            value = ""
            secondOperand = 0;
            operation = "sub";
        }
    }
}
function mul() {
    if (value != "") {
        if(operation == "") {
            firstOperand = parseInt(value);
            document.getElementById("previous").innerText += value + "*"
            value ="";
            operation ="mul";
        } else if (operation == "mul") {
            secondOperand = parseInt(value);
            document.getElementById("previous").innerText += value + "*"
            value = firstOperand * secondOperand;
            document.getElementById("number").innerText = value;
            firstOperand = value;
            value = ""
            secondOperand = 0;
            operation = "mul";
        } else if (operation == "sub") {
            secondOperand = parseInt(value);
            document.getElementById("previous").innerText += value + "*"
            value = firstOperand - secondOperand;
            document.getElementById("number").innerText = value;
            firstOperand = value;
            value = ""
            secondOperand = 0;
            operation = "mul";
        } else if (operation == "plus") {
            secondOperand = parseInt(value);
            document.getElementById("previous").innerText += value + "*"
            value = firstOperand + secondOperand;
            document.getElementById("number").innerText = value;
            firstOperand = value;
            value = ""
            secondOperand = 0;
            operation = "mul";
        }
    }
}
