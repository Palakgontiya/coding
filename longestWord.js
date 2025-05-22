// To find longest word from a string using (for of Loop) means iterate by an elements not by indexing

function longestWord(str){
    let arr = str.split(' ');
    let result = '';

    for(word of arr){
        if(word.length > result.length){
            result = word;
        }
    }
    return result;
}

console.log(longestWord('Hello my name is Palakk'));