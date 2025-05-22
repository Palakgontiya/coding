// To check the string or number is palindrome or not( ex: 121,madam,anna) using reverse method

function palindromeCheck(arg){
    let str = arg.toString().split('').reverse().join('');
    if(str == arg){
        return true;
    }
    else{
        return false;
    }
}

console.log(palindromeCheck(121));