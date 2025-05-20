// Swapping of 2 numbers with third variable

function swipeNumbersWithThirdVariable(a,b){
    let c = 0;
    let num1 = a;
    let num2 = b;

     c = num1;
     num1 = num2;
     num2 = c;
     return {num1,num2};
}

console.log(swipeNumbersWithThirdVariable(3,4));