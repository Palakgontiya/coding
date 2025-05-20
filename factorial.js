// Find factorial of user input number

function findFactorial(n){
    let factorial = 1;
    if (n === 0 || n === 1) {
        return 1;
    }
    for(let i = 1; i<=n; i++){
        factorial = factorial * i
    }
    return factorial;
}

// function findFactorial(n){
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     return n * findFactorial(n - 1);
// }

console.log(findFactorial(5));