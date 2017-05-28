function kiyoLcm(a) {
    var totals = [];

    for(x in a){
        if((a[x].length === 0)){a[x][0] = 2;}

        for(y in a[x]){
            if((typeof a[x][y]) !== 'number'){a[x][y] = 2;}
            if((a[x][y] % 2 === 0)){
                a[x][y] = 0;
            }
        }
        totals.push(a[x].reduce((pv, cv) => {return pv += cv;}));
    }

    function LCM(A){
        var n = A.length, a = Math.abs(A[0]);
        for (var i = 1; i < n; i++)
         { var b = Math.abs(A[i]), c = a;
           while (a && b){ a > b ? a %= b : b %= a; }
           a = Math.abs(c*A[i])/(a+b);
         }
        return a;
    }

    var final = LCM(totals);
    return (isNaN(final) ? 0 : final);
}


var a = [[1, 7, 6, 6, 'm', 5, 1, 8, 0], [6, 2, 8, 'h', 0, 4, 6, 7, 3], [5, 5, 5, 7, 2, 1, 4, 'c', 3],
     [7, 0, 7, 1, 1, 1, 't', 9, 3], [8, 9, 2, 4, 4, 'v', 6, 2, 4], ['o', 1, 5, 1, 7, 6, 2, 4, 6],
     [8, 8, 8, 9, 4, 8, 9, 9, 'j'], [4, 9, 8, 'v', 3, 3, 5, 0, 6], [1, 8, 6, 8, 7, 'e', 8, 9, 0]]

console.log(kiyoLcm(a));

// Instructions:
// Location: https://www.codewars.com/kata/help-kiyo-kiyo-solve-her-problems-lcm-fun/javascript
// Help Kiyo きよ solve her problems LCM Fun!
//
// Kiyo has been given a series of problems and she needs your help to solve them!
//
// You will be given a two-dimensional array such as the one below.
//
// a =
// [
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9]
// ]
//
// Remove all even integers from each sub-array.
//
// Sum the remaining odd integers of each sub-array.
//
// Sum of odds ( a[0] = 1 + 3 + 5 + 7 + 9 ) = 25
//
// Find the Least common multiple of the arrays.
//
//  (25, 25, 25, 25, 25, 25, 25, 25, 25)
//   ^                                ^
//   |                                |
// a[0]-----------------------------a[8]
//
// example : lcm( 25, 25, 25, 25, 25, 25, 25, 25, 25 ) = 25
//
// example : lcm( 37, 29, 19, 38, 31, 28, 15, 24, 9 ) = 1592632440
// Integers are between 0 and 9. Sub-array size is always 9. The number of sub-arrays varies between 9 and 18.
//
// Watch out for non-integers mixed in the arrays. If all arrays are empty return 0.
