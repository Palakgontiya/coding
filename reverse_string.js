function reverseString(str){
    let arr = str.split(' ');
    let result = '';
    for( let i = arr.length -1 ; i>=0; i--){
        result += arr[i] + ' ';
    }
    return result;
}

const result = reverseString("Hello World From JavaScript");
console.log(result)