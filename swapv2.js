function swapTwoNumbersWithouThirdVariable(a,b){
    let num1 = a;
    let num2 = b;

    console.log(num1,num2);

    num1 = num1 + num2;
    num2 = num1 - num2;
    num1 = num1 - num2;

    console.log(num1,num2);
}

const result = swapTwoNumbersWithouThirdVariable(10,11);

console.log(result);