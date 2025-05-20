// String reverse with reversing of individual words

function reverseStrWithoutReversingIndivisualWords(str){
    return str.split(' ').reverse().map((i)=> i.split('').reverse().join('')).join(' ');
}

console.log(reverseStrWithoutReversingIndivisualWords("hello I am Palak"));

// I got to know that if you do not give any argument in join it will join the array with comma saperated elements by default.