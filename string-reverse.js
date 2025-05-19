// String reverse without reversing of individual words (Array of elements can be reverse with reverse() method but for string it is won't possible so required to split and then join.

function StringReverse(str){
    let arrOfString = str.split(' ');
    let reversedArray = arrOfString.reverse();
    let finalOutput = reversedArray.join(' ');
    return finalOutput;
}

console.log(StringReverse("Hello my name is palak"));