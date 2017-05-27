
// You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.
// .
// e.g. transposeTwoStrings(['Hello','World']);
// .
// should return:
// H W  
// e o
// l r
// l l
// o d

function transposeStrings(strings){
    var arr = [];
    for(x in strings[0]){
        arr.push([strings[0][x], strings[1][x]]);
    }
    return arr;
}

var strings = ['Hello','World'];
console.log(transposeStrings(strings));
