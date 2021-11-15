var value = "";
var temp = 0
var firstOperand,secondOperand ;
var operation ="";
var snd = new Audio("./static/Click.mov")
function one() {
    snd.play();
    temp=1;
    value += temp;
    document.getElementById("number").innerText = value;
}
function two() {
    snd.play();
    temp=2;
    value += temp;
    document.getElementById("number").innerText = value;
}
function three() {
    snd.play();
    temp=3;
    value += temp;
    document.getElementById("number").innerText = value;
}
function four() {
    snd.play();
    temp=4;
    value += temp;
    document.getElementById("number").innerText = value;
}
function five() {
    snd.play();
    temp=5;
    value += temp;
    document.getElementById("number").innerText = value;
}
function six() {
    snd.play();
    temp=6;
    value += temp;
    document.getElementById("number").innerText = value;
}
function seven() {
    snd.play();
    temp=7;
    value += temp;
    document.getElementById("number").innerText = value;
}
function eight() {
    snd.play();
    temp=8;
    value += temp;
    document.getElementById("number").innerText = value;
}
function nine() {
    snd.play();
    temp=9;
    value += temp;
    document.getElementById("number").innerText = value;
}
function zero() {
    snd.play();
    temp=0;
    value += temp;
    document.getElementById("number").innerText = value;
}

function C() {
    snd.play();
    value="";
    temp = 0;
    document.getElementById("number").innerHTML= "";
    document.getElementById("previous").innerText= "";
    operation = ""
}

function negative() {
    snd.play();
    if(value!="") {
        temp = -1;
        temp *= parseFloat(value);
        value = temp.toString();
        document.getElementById("number").innerText = value;
    }
}

function dot() {
    snd.play();
    if(value = 0){
        temp="0.";
    } else {
        temp=".";
    }
    value += temp;
    document.getElementById("number").innerText = value;
}
function percent() {
    snd.play();
    if(value !=0) {
        temp = parseFloat(value);
        value = (temp/100).toString();
        document.getElementById("number").innerText = value;
    }
}
function plus() {
    snd.play();
    if (value != "") {
        if(operation == "") {
            firstOperand = parseFloat(value);
            document.getElementById("previous").innerText += value + "+"
            value ="";
            operation ="plus";
        } else if (operation == "plus") {
            secondOperand = parseFloat(value);
            document.getElementById("previous").innerText += value + "+"
            value = firstOperand + secondOperand;
            document.getElementById("number").innerText = value;
            firstOperand = value;
            value = ""
            secondOperand = 0;
            operation = "plus";
        } else if (operation == "sub") {
            secondOperand = parseFloat(value);
            document.getElementById("previous").innerText += value + "+"
            value = firstOperand - secondOperand;
            document.getElementById("number").innerText = value;
            firstOperand = value;
            value = ""
            secondOperand = 0;
            operation = "plus";
        } else if (operation == "mul") {
            secondOperand = parseFloat(value);
            document.getElementById("previous").innerText += value + "+"
            value = firstOperand * secondOperand;
            document.getElementById("number").innerText = value;
            firstOperand = value;
            value = ""
            secondOperand = 0;
            operation = "plus";
        } else if (operation == "divide") {
            secondOperand = parseFloat(value);
            document.getElementById("previous").innerText += value + "+"
            value = firstOperand / secondOperand;
            document.getElementById("number").innerText = value;
            firstOperand = value;
            value = ""
            secondOperand = 0;
            operation = "plus";
        }
    } else if(operation != "") {
        var str = document.getElementById("previous").innerText;
        var temp = str.slice(0,str.length-1);
        document.getElementById("previous").innerText= temp + "+"
        operation = "plus";
    }
}
function sub() {
    snd.play();
    if (value != "") {
        if(operation == "") {
            firstOperand = parseFloat(value);
            document.getElementById("previous").innerText += value + "-"
            value ="";
            operation ="sub";
        } else if (operation == "sub") {
            secondOperand = parseFloat(value);
            document.getElementById("previous").innerText += value + "-"
            value = firstOperand - secondOperand;
            document.getElementById("number").innerText = value;
            firstOperand = value;
            value = ""
            secondOperand = 0;
            operation = "sub";
        } else if (operation == "plus") {
            secondOperand = parseFloat(value);
            document.getElementById("previous").innerText += value + "-"
            value = firstOperand + secondOperand;
            document.getElementById("number").innerText = value;
            firstOperand = value;
            value = ""
            secondOperand = 0;
            operation = "sub";
        } else if (operation == "mul") {
            secondOperand = parseFloat(value);
            document.getElementById("previous").innerText += value + "-"
            value = firstOperand * secondOperand;
            document.getElementById("number").innerText = value;
            firstOperand = value;
            value = ""
            secondOperand = 0;
            operation = "sub";
        } else if (operation == "divide") {
            secondOperand = parseFloat(value);
            document.getElementById("previous").innerText += value + "-"
            value = firstOperand / secondOperand;
            document.getElementById("number").innerText = value;
            firstOperand = value;
            value = ""
            secondOperand = 0;
            operation = "sub";
        }
    } else if(operation != "") {
        var str = document.getElementById("previous").innerText;
        var temp = str.slice(0,str.length-1);
        document.getElementById("previous").innerText= temp + "-"
        operation = "sub";
    }
}
function mul() {
    snd.play();
    if (value != "") {
        if(operation == "") {
            firstOperand = parseFloat(value);
            document.getElementById("previous").innerText += value + "*"
            value ="";
            operation ="mul";
        } else if (operation == "mul") {
            secondOperand = parseFloat(value);
            document.getElementById("previous").innerText += value + "*"
            value = firstOperand * secondOperand;
            document.getElementById("number").innerText = value;
            firstOperand = value;
            value = ""
            secondOperand = 0;
            operation = "mul";
        } else if (operation == "sub") {
            secondOperand = parseFloat(value);
            document.getElementById("previous").innerText += value + "*"
            value = firstOperand - secondOperand;
            document.getElementById("number").innerText = value;
            firstOperand = value;
            value = ""
            secondOperand = 0;
            operation = "mul";
        } else if (operation == "plus") {
            secondOperand = parseFloat(value);
            document.getElementById("previous").innerText += value + "*"
            value = firstOperand + secondOperand;
            document.getElementById("number").innerText = value;
            firstOperand = value;
            value = ""
            secondOperand = 0;
            operation = "mul";
        } else if (operation == "divide") {
            secondOperand = parseFloat(value);
            document.getElementById("previous").innerText += value + "*"
            value = firstOperand / secondOperand;
            document.getElementById("number").innerText = value;
            firstOperand = value;
            value = ""
            secondOperand = 0;
            operation = "mul";
        }
    } else if(operation != "") {
        var str = document.getElementById("previous").innerText;
        var temp = str.slice(0,str.length-1);
        document.getElementById("previous").innerText= temp + "*"
        operation = "mul";
    }
}
function divide() {
    snd.play();
    if (value != "") {
        if(operation == "") {
            firstOperand = parseFloat(value);
            document.getElementById("previous").innerText += value + "/"
            value ="";
            operation ="divide";
        } else if (operation == "divide") {
            secondOperand = parseFloat(value);
            document.getElementById("previous").innerText += value + "/"
            value = firstOperand / secondOperand;
            document.getElementById("number").innerText = value;
            firstOperand = value;
            value = ""
            secondOperand = 0;
            operation = "divide";
        } else if (operation == "mul") {
            secondOperand = parseFloat(value);
            document.getElementById("previous").innerText += value + "/"
            value = firstOperand * secondOperand;
            document.getElementById("number").innerText = value;
            firstOperand = value;
            value = ""
            secondOperand = 0;
            operation = "divide";
        } else if (operation == "sub") {
            secondOperand = parseFloat(value);
            document.getElementById("previous").innerText += value + "/"
            value = firstOperand - secondOperand;
            document.getElementById("number").innerText = value;
            firstOperand = value;
            value = ""
            secondOperand = 0;
            operation = "divide";
        } else if (operation == "plus") {
            secondOperand = parseFloat(value);
            document.getElementById("previous").innerText += value + "/"
            value = firstOperand + secondOperand;
            document.getElementById("number").innerText = value;
            firstOperand = value;
            value = ""
            secondOperand = 0;
            operation = "divide";
        }
    } else if(operation != "") {
        var str = document.getElementById("previous").innerText;
        var temp = str.slice(0,str.length-1);
        document.getElementById("previous").innerText= temp + "/"
        operation = "divide";
    }
}
function equal() {
    snd.play();
    if (value != "") {
        if(operation != "") {
            if (operation == "plus") {
                secondOperand = parseFloat(value);
                document.getElementById("previous").innerText = ""
                value = firstOperand + secondOperand;
                document.getElementById("number").innerText = value;
                firstOperand = value;
                secondOperand = 0;
                operation = "";
            } else if (operation == "sub") {
                secondOperand = parseFloat(value);
                document.getElementById("previous").innerText = ""
                value = firstOperand - secondOperand;
                document.getElementById("number").innerText = value;
                firstOperand = value;
                secondOperand = 0;
                operation = "";
            } if (operation == "mul") {
                secondOperand = parseFloat(value);
                document.getElementById("previous").innerText = ""
                value = firstOperand * secondOperand;
                document.getElementById("number").innerText = value;
                firstOperand = value;
                secondOperand = 0;
                operation = "";
            } if (operation == "divide") {
                secondOperand = parseFloat(value);
                document.getElementById("previous").innerText = ""
                value = firstOperand / secondOperand;
                document.getElementById("number").innerText = value;
                firstOperand = value;
                secondOperand = 0;
                operation = "";
            }
        }
    }
}
