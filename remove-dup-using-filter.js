// Remove Duplicate characters from array of element using filter

function removeDuplicateUsingFilter(arr){
    const abc = arr.filter((i,index)=>{
        return arr.indexOf(i) === index;
    })
    return abc
}

console.log(removeDuplicateUsingFilter([3,6,3,2,7,9,6,5,4,3,6,5]));