// To find vowels and its count in a given string

function findVowelsAndItsCound(str){
    let obj = {};
    let vowels = ['a','e','i','o','u'];
     for(let i of str){
        if(vowels.includes(i.toLowerCase())){
            if(!obj.hasOwnProperty(i)){
            obj[i] = 1;
        }else{
             obj[i] = obj[i]+ 1;
        }
        }
    }
    return Object.entries(obj);
}

console.log(findVowelsAndItsCound("I Work at Unstop"));