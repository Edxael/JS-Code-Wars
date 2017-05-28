// Location of this Problem: 4KYU Sum Strings as Numbers
// https://www.codewars.com/trainer/javascript

function sumStrings(a,b) {
    if(a === ''){a = '0'}
    if(b === ''){b = '0'}

    var x = (parseInt(a) + parseInt(b));





    return x.toString();
}

var a = '712569312664357328695151392';
var b = '8100824045303269669937';
console.log(sumStrings(a,b));

// how to avoid Scienfic Notation:
// https://stackoverflow.com/questions/1685680/how-to-avoid-scientific-notation-for-large-numbers-in-javascript
// https://gist.github.com/jiggzson/b5f489af9ad931e3d186
