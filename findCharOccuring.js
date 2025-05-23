// To find character occurance from the string

function findCharacterOccurings(str){
    obj={};
    for(s of str){
        if(s != ' '){
            let ch = s.toLowerCase();
        if(!obj.hasOwnProperty(ch)){
            obj[ch]=1;
        }else{
             obj[ch]+=1;
        }
        }
    }
    return Object.entries(obj);
}

console.log(findCharacterOccurings("Hi I am Palak"))