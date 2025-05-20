// Swapping of 2 numbers without third variable

function swipeNumbersWithoutThirdVariable(a,b){
    let num1 = a;
    let num2 = b;

     num1 = num1 + num2;
     num2 = num1 - num2;
    num1 = num1 - num2;
     return {num1,num2};
}

console.log(swipeNumbersWithoutThirdVariable(3,4));
