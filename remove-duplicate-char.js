// Remove Duplicate characters from String

function removeDuplicateChar(str){
    let obj = {}
    for(let i in str){
        if(!obj.hasOwnProperty(str[i])){
            obj[str[i]] = 1;
        }
    }
    return Object.keys(obj).join('');
}

function removeDuplicateCharV2(str) {
    return Array.from(new Set(str)).join('');
}

console.log(removeDuplicateChar('satyam'));