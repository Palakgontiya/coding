// To find longest word from a string using custom code

function findLongestWordFromString(str) {
    let arr = [];
    let word = '';
    let longestWord = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            word += str[i];
        } 
        if (str[i] === ' ' || i === str.length - 1) {
            if (word) {
                arr.push(word);
                word = '';
            }
        }
    }
    for (const word of arr) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}


console.log(findLongestWordFromString("Which is the longest word of all"));
