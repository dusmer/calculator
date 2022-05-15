const displayWindow = document.querySelector('.window');
let displayValue ="";
let previousValue;
let operator;
decButton = document.querySelector('#dec');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (!isNaN(button.id)){
            if (operator == "equals"){
                displayValue="";
                operator = "";
            }
            displayValue = Number("" + displayValue + button.id);
            displayWindow.textContent = displayValue;
        }
        
        if (button.id == "dec"){
            displayValue = "" + displayValue + ".";
            displayWindow.textContent = displayValue;
            decButton.disabled = true;
        }
        
        if (button.id == "add"){
            if (operator && operator != "equals"){
                displayValue = operate("add",previousValue,displayValue);
                displayWindow.textContent = displayValue;
            }
            previousValue = displayValue;
            displayValue = "";
            operator = "add";
        }
        
        if (button.id == "mult"){
            if (operator && operator != "equals"){
                displayValue = operate("mult",previousValue,displayValue);
                displayWindow.textContent = displayValue;
            }
            previousValue = displayValue;
            displayValue = "";
            operator = "mult";
        }

        if (button.id == "minus"){
            if (operator && operator != "equals"){
                displayValue = operate("minus",previousValue,displayValue);
                displayWindow.textContent = displayValue;
            }
            previousValue = displayValue;
            displayValue = "";
            operator = "minus";
        }

        if (button.id == "divide"){
            if (operator && operator != "equals"){
                displayValue = operate("divide",previousValue,displayValue);
                displayWindow.textContent = displayValue;
            }
            previousValue = displayValue;
            displayValue = "";
            operator = "divide";
        }

        if (button.id == "equals"){
            displayValue = operate(operator,previousValue,displayValue);
            displayWindow.textContent = displayValue;
            operator = "equals";

        }
        
        if (button.id == "AC"){
            displayValue = "";
            previousValue = "";
            operator = "";
            displayWindow.textContent = displayValue;
        }

        
    })
})

function operate(operator,num1,num2){
    decButton.disabled = false;
    let answer = 0;
    switch (operator){
        case "add":
        answer = add(num1,num2);
        break;
        
        case "minus":
        answer = minus(num1,num2);
        break;

        case "mult":
        answer = mult(num1,num2);
        break;

        case "divide":
        answer = divide(num1,num2);
        break;

        case "remain":
        answer = remain(num1,num2);
        break;
    }
    return answer;
}

function add(num1,num2){
    return num1 + num2;
}
function minus(num1,num2){
    return num1 - num2;
}
function mult(num1,num2){
    return num1 * num2;
}
function divide(num1,num2){
    return (num2 == 0) ? "come on now" : (num1/num2);
    /*if (num2 == 0){
        return "come on now";
    }else{
        return num1 / num2;
    }*/
}
function remain(num1,num2){
    return num1 % num2;
}