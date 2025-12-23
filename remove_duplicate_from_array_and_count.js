function removeDuplicateAndCountOccurences(arr){
    let obj = {};
    for(let i of arr){
        !obj.hasOwnProperty(i) ? obj[i] = 1 : obj[i]+= 1;
    }
    return {
        unique: Object.keys(obj).map(Number),
        count: obj
    }
}

const result = removeDuplicateAndCountOccurences([1, 2, 2, 3, 3, 3]);
console.log(result)