function anagram(str1, str2){
    if(str1.length != str2.length){
        return 'not anagrams';
    }
    obj1 = {};
    obj2 = {}
    for(let i of str1){
        if(!obj1.hasOwnProperty(i)){
            obj1[i] = 1;
        }else{
             obj1[i] += 1;
        }
    }
    for(let i of str2){
        if(!obj2.hasOwnProperty(i)){
            obj2[i] = 1;
        }else{
             obj2[i] += 1;
        }
    }
    if(Object.keys(obj1).length == Object.keys(obj2).length){
        for(let i of Object.keys(obj1)){
            if(Object.keys(obj2).includes(i) && obj1[i] == obj2[i]){
                continue;
            }else{
                return 'not anagram'
            }
        }
        return 'anagram';
    }else{
         return 'not anagram'
    }
}
// function anagram(str1, str2) {
//     return str1.split('').sort().join('') ===
//            str2.split('').sort().join('');
// }


const result = anagram('aab', 'aab');

console.log(result);