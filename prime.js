function checkPrime(n) {
    if (n < 2) {
        return "Not Prime";
    }
    let flag = true;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            flag = false;
            break;
        }
    }
    if (flag) {
        return "Prime";
    } else {
        return "Not Prime";
    }
}
let val = 11;
console.log(val + " is " + checkPrime(val));