// Check if a string is an Anagram

function checkAnagram(str1,str2){
    let obj1 = {};
    let obj2 = {};
    if(str1.length === str2.length){
        for(let i = 0; i <str1.length; i++){
             if(!obj1.hasOwnProperty(str1[i])){
                obj1[str1[i]] = 1;
             }else{
                 obj1[str1[i]] = obj1[str1[i]] + 1;
             }
        }
         for(let i = 0; i <str1.length; i++){
             if(!obj2.hasOwnProperty(str2[i])){
                obj2[str2[i]] = 1;
             }else{
                obj2[str2[i]] = obj2[str2[i]] + 1;
             }
        }
        if(Object.keys(obj1).length === Object.keys(obj2).length){
            let arr1 = Object.keys(obj1);
            let arr2 = Object.keys(obj2);
             for(let i = 0; i < arr1.length; i++){
                if(obj1[arr1[i]] != obj2[arr1[i]]){
                    return false;
                }
             }
             return true;
        }
       
    }else{
        return false;
    }
}

console.log(checkAnagram('listen', 'ilent'));