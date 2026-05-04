let num = 55
let num2 = 44
let operator = "+"
switch(operator){
    case '+':
        console.log(${num} + ${num2} = ${num + num2});
        break;
    case '-':
        console.log(${num} - ${num2} = ${num - num2});
        break;
    case '*':
        console.log(${num} * ${num2} = ${num * num2});
        break;
    case '/':
        console.log(${num} / ${num2} = ${num / num2});
        break;
    default:
        console.log("Invalid operator! Please use +, -, *, or /");
}