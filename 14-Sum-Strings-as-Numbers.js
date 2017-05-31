// Location:
// https://www.codewars.com/kata/sum-strings-as-numbers

function sumStrings(a,b) {
    if(a === ''){a = '0'}
    if(b === ''){b = '0'}

    var arrA = a.split("").reverse();
    var arrB = b.split("").reverse();
    var arrC = [];
    var hoder = 0;
    var paso = 0;
    var strH = '';
    var cycles = 0;

    for(x in arrA){arrA[x] = parseInt(arrA[x]);}
    for(x in arrB){arrB[x] = parseInt(arrB[x]);}
    if(arrA.length > arrB.length){cycles = arrA.length;}else {cycles = arrB.length;}

    for(var x = 0; x < cycles; x++){
        if(isNaN(arrB[x])){arrB[x] = 0}
        if(isNaN(arrA[x])){arrA[x] = 0}
        holder = arrA[x] + arrB[x] + paso;
        paso = 0;

        if(holder > 9){
            paso = parseInt(holder.toString()[0]);
            holder = parseInt(holder.toString()[1]);
        }

        arrC.push(holder);
        if(((x + 1) === cycles) && (paso > 0)){arrC.push(paso);}
    }

    arrA.reverse();
    arrB.reverse();
    arrC.reverse();

    if(arrC[0] === 0){arrC.shift()}
    strH = arrC.join("");
    return strH;
}

var a = '800';
var b = '9567';
console.log(sumStrings(a,b));
