// Instructions
// .
// Write a function called "countWords".
// Given a string, "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in th given  string.
// .
// Notes:
// * If given an empty string, it should return an empty object.

function countWords(str) {

    if (str.length){
        var obj = {};
        str = str.split(" ");

        for(var x = 0; x < str.length; x++){
            if(str[x] in obj){
                obj[str[x]] += 1;
            }else{
                obj[str[x]] = 1;
            }
        }

        return obj;
    }else{
        return {};
    }
}


var str = 'ask a bunch get a bunch';
console.log(countWords(str));



// ------------------------
// .    Results
// ------------------------
// Object {ask: 1, a: 2, bunch: 2, get: 1}
// ------------------------
