function swapTwoNumsUsingThirdVariable(a,b){
    let num1 = a;
    let num2 = b;
    console.log(num1,num2);

    let num3 = num1;
    num1 = num2;
    num2 = num3
    console.log(num1,num2);
}

const result = swapTwoNumsUsingThirdVariable(4,5);

console.log(result);