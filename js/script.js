let num1, num2, operator, pressEqual;
const errorBox = document.querySelector('#error');

function add(a, b=0){
    return a + b;
}
function sub(a, b=0){
    return a - b;
}
function mul(a, b=1){
    return a * b;
}
function div(a, b=1){
    if (b == 0){
        return 'Cannot divide by zero';
    }
    answer = a / b;
    answer = Math.round(answer*100)/100
    // console.log(answer);
    return answer;
}

function operate(op, a, b){
    // call one of the above functions
    a = parseInt(a);
    // console.log(a);
    b = parseInt(b);
    if (op == '+') return add(a, b || undefined);
    else if (op == '-') return sub(a, b);
    else if (op == '*') return mul(a, b);
    else if (op == '/') return div(a, b);
    
}

const buttonContainer = document.querySelector('#buttons');
const valueDisplay = document.querySelector('#main');
buttonContainer.addEventListener('click', (e)=>{
    if (e.target.classList.contains('digits')){
        // Normal behaviour
        if (pressEqual != undefined){
            valueDisplay.textContent = '';
            // console.log(num1, operator, num2);
            pressEqual = undefined;
        }
        valueDisplay.textContent += e.target.id;
    } else if (e.target.classList.contains('operator')){
        // simple task 
        if (pressEqual != undefined){
            operator = e.target.id;
            num2 = undefined;
            valueDisplay.textContent = '';            
        } else if (num1 != undefined & num2 == undefined){
            num2 = valueDisplay.textContent;
            // console.log(num1, operator, num2);  
            answer = operate(operator, num1, num2);
            // console.log(answer);
            // console.log(typeof(answer), typeof(num2));          type of num2 is string
            valueDisplay.textContent = answer;  // should it be displayed or not
            num1 = answer;
            // console.log(num1);
            num2 = undefined;
            operator = e.target.id;
            pressEqual = answer;

        }
        else if(num1 == undefined & num2 == undefined){
            num1 = valueDisplay.textContent;
            valueDisplay.textContent = '';
            operator = e.target.id;
        }
    } else if (e.target.id == 'clear'){
        valueDisplay.textContent = '';
        num1 = undefined;
        num2 = undefined;
        operator = undefined;
    } else if (e.target.id == '='){
        if(operator != undefined){
            num2 = valueDisplay.textContent;
            // console.log(num1, operator, num2);
            answer = operate(operator, num1, num2);
            valueDisplay.textContent = answer;
            num1 = answer;
            num2 = undefined;
            operator = undefined;
            pressEqual = answer;
        }
    }
});


























//     // console.dir(e.target)
//     // console.log(e.target.classList.contains('digits'))
//     if (e.target.classList.contains('digits')){
//         // console.log(true)
//         if (operator == 'equal') {
//             valueDisplay.textContent = '';
//             operator = undefined;
//         }
//         valueDisplay.textContent += e.target.id;
//     } else if (e.target.id == 'clear'){
//         valueDisplay.textContent = ''; 
//         num1 = undefined;
//         num2 = undefined;
//         operator = undefined;
//     } else if(e.target.id == '='){
//         if(num1 != undefined){
//             num2 = valueDisplay.textContent;
//             answer = operate(operator, num1, num2);
//             // console.log(answer);
//             valueDisplay.textContent = answer;
//             num1 = undefined;
//             num2 = undefined;
//             operator = 'equal';
//         } else {
//             num1 = valueDisplay.textContent;
//         }
//     } else if (e.target.id == 'buttons'){
//         console.log('wrong click');
//     }
//     else {    // for operators except =
//         if(num1 == undefined){
//             num1 = valueDisplay.textContent;
//             valueDisplay.textContent = '';
//             operator = e.target.id;
//             // console.log(num1);
//         } else {
//             num2 = valueDisplay.textContent;
//             answer = operate(operator, num1, num2);
//             valueDisplay.textContent = '';
//             num1 = answer;
//             num2 = undefined;
//             operator = e.target.id;
//         }
//         console.log(num1, operator, num2);
//         console.log(typeof(operator));
//     }
//     // issue of appending digit after equal operator
        
// });