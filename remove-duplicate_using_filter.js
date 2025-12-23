function removeDuplicateUsingFilter(arr){
    const uniqueArr = arr.filter((item, i)=>{
         return arr.indexOf(item) >= i;
    })

    return uniqueArr;
}

const result = removeDuplicateUsingFilter([0,1, 2, 2, 3, 4, 4]);
console.log(result)