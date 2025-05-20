// String reverse without using inbult function

function reverseStrWithoutReversingIndivisualWords(str){
    let outputString = '';
    for(let i=str.length - 1; i >= 0; i--){
        outputString += str[i];
    }
    return outputString;
}

console.log(reverseStrWithoutReversingIndivisualWords("hello I am Palak"));