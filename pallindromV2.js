// To check the string or number is palindrome or not( ex: 121,madam,anna) using diving length by 2 and then comparing

function isPallindrome(input){
    const str = input.toString(); 
    const len = str.length;

   for (let i = 0; i < Math.floor(len / 2); i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false; 
        }
    }
    return true; 
}

console.log(isPallindrome('madsam'));