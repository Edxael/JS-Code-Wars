// Location:
// https://www.codewars.com/kata/vampire-numbers-1
//
// Instructions:
// 6 * 21 = 126
// # 6 and 21 would be valid 'fangs' for a vampire number as the
// # digits 6, 1, and 2 are present in both the product and multiplicands
//
// 10 * 11 = 110
// # 110 is not a vampire number since there are three 1's in the
// # multiplicands, but only two 1's in the product


var vampire_test = function(a, b){
    var total = (a * b).toString().split("").map(function(x){return parseInt(x);}).sort().toString();

    var aNumbers = a.toString().split("").map(function(x){return parseInt(x);});
    var bNumbers = b.toString().split("").map(function(x){return parseInt(x);});
    var originNums = aNumbers.concat(bNumbers).sort().toString();

    return (total == originNums) ? true : false;
}

console.log(vampire_test(2947050, 8469153));
