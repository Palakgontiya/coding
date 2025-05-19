// Remove Duplicate characters from array of element and find the count of an elements using set

function removeDuplicateFromArray(arr){
    let obj = {};
    for(let i in arr){
        if(!obj.hasOwnProperty(arr[i])){
            obj[arr[i]]= 1;
        }
    }
    return Object.keys(obj).join('');
}

function removeDuplicateFromArrayV2(arr){
    return Array.from(new Set(arr)).join('');
}

console.log(removeDuplicateFromArrayV2([1,2,3,4,3,4,2,3,6,7,8]));