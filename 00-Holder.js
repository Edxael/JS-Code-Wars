
function sumStrings(a,b) {
    if(a === ''){a = '0'}
    if(b === ''){b = '0'}

    var arrA = a.split("").reverse();
    var arrB = b.split("").reverse();

    console.log(arrA);
    console.log(arrB);
    console.log("");


    var arrC = [];
    var hoder = 0;
    var paso = 0;
    var strH = '';
    var cycles = 0;

    for(x in arrA){
        arrA[x] = parseInt(arrA[x]);
    }

    for(x in arrB){
        arrB[x] = parseInt(arrB[x]);
    }

    if(arrA.length > arrB.length){
        cycles = arrA.length;
    }else {
        cycles = arrB.length;
    }




    for(var x = 0; x < cycles; x++){
        console.log("Cycle: ", x)
        if(isNaN(arrB[x])){arrB[x] = 0}
        if(isNaN(arrA[x])){arrA[x] = 0}

        holder = arrA[x] + arrB[x] + paso;
        paso = 0;
        console.log(holder);

        if(holder > 9){
            console.log("A Dividir el digito:");
            paso = parseInt(holder.toString()[0]);
            holder = parseInt(holder.toString()[1]);

            console.log("Paso: ", typeof paso, " ", paso );
            console.log("Holder: ", typeof holder, " ", holder );
        }

        console.log("Value to Push: ", holder, " Paso Value: ", paso);
        arrC.push(holder);

        console.log("Provando Values =>>>  X: ", x, " Cycles: ", cycles);
        if(((x + 1) === cycles) && (paso > 0)){arrC.push(paso);}
        console.log("");
    }







    console.log(arrA);
    console.log(arrB);
    console.log(arrC);
    console.log(" ");

    arrA.reverse();
    arrB.reverse();
    arrC.reverse();

    if(arrC[0] === 0){arrC.shift()}

    console.log("Arrays after Reverse: ");
    console.log(arrA);
    console.log(arrB);
    console.log(arrC);
    console.log(" ");

    strH = arrC.join("");
    console.log(strH);

    return strH;
}

var a = '800';
var b = '9567';
console.log(sumStrings(a,b));



// function sumStrings(a,b) {
//     if(a === ''){a = '0'}
//     if(b === ''){b = '0'}
//
//     var x = (parseInt(a) + parseInt(b)).toString();
//     x = x.split("");
//
//     var ans = "";
//     for(z in x){
//         ans = ans.concat(x[z]);
//     }
//
//     console.log(typeof ans);
//     console.log(ans);
//     return ans;
// }
