function removeDuplicateFronString(str){
    let obj = {}
    for(let i = 0; i<str.length; i++){
        if(!obj.hasOwnProperty(str[i])){
            obj[str[i]] = 1;
        }
    }
    return Object.keys(obj).join('');
}

const result = removeDuplicateFronString('programming');

console.log(result);