// To find longest common string from array of stringsx

function findLongestCommonString(arr){
    let result = '';
    for(let i=0;i<arr.length; i++){
        if(arr[i].length > result.length){
            result = arr[i];
        }
    }
    return result;
}

console.log(findLongestCommonString(['hii i am palak', 'Hi my name is palak']))