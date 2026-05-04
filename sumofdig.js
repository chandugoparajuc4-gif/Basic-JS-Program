let num = 5678; 
let total = 0;
while (num != 0) {
    let digit = num % 10; 
    total = total + digit;
    num = parseInt(num/10); 
}
console.log("Total of digits is:" + total);